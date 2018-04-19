const Units = {
  Seconds: 1e3,
  Minutes: 6e4,
  Hours: 36e5,
  Days: 864e5,
  Months: 2674800000
};

const Strings = {
  ago: '%s ago',
  future: '%s from now',
  now: 'just now',
  m: '%d minute',
  mm: '%d minutes',
  h: '%d hour',
  hh: '%d hours',
  d: '%d day',
  dd: '%d days',
  M: '%d month',
  MM: '%d months'
};

function leadingZero(number) {
  return `0${number}`.slice(-2);
}

function numberAgo(number, ms) {
  return Math.round(number / ms);
}

function formatDate(date) {
  return [
    leadingZero(date.getMonth() + 1),
    leadingZero(date.getDate()),
    date.getFullYear()
  ].join('/');
}

const relative = (toDate, fromDate = new Date()) => {
  if (toDate instanceof Date === false) {
    toDate = new Date(toDate);
    // toDate is a date
    if (isNaN(toDate.getTime())) {
      // toDate is an invalid date format
      return;
    }
  }

  const result = {};

  if (toDate instanceof Date) {
    fromDate = (fromDate instanceof Date) ? fromDate : new Date();

    result.difference = Math.abs(toDate.getTime() - fromDate.getTime());
    const wording = (toDate.getTime() < fromDate.getTime()) ?
      relative.Strings.ago : relative.Strings.future;

    if (result.difference > Units.Months) {
      result.string = formatDate(toDate);
    } else {
      if (result.difference < Units.Minutes) {
        result.string = relative.Strings.now;
      } else {
        let unit = '';
        let time = 0;

        if (result.difference < Units.Hours) {
          time = numberAgo(result.difference, Units.Minutes);
          unit = 'm';
        } else if (result.difference < Units.Days) {
          time = numberAgo(result.difference, Units.Hours);
          unit = 'h';
        } else if (result.difference < Units.Months) {
          time = numberAgo(result.difference, Units.Days);
          unit = 'd';
        } else {
          time = numberAgo(result.difference, Units.Months);
          unit = 'M';
        }

        unit = time === 1 ? unit : unit + unit;
        result.string = wording.replace(/%s/i, relative.Strings[unit]);
        result.string = result.string.replace(/%d/i, time);
      }
    }
  }

  return result;
};

relative.Strings = Strings;

export default relative;
export { Units };
