import relative from '../index';
import test from 'tape-rollup';

function leadingZero(number) {
  return `0${number}`.slice(-2);
}

function formatDate(date) {
  return [
    leadingZero(date.getMonth() + 1),
    leadingZero(date.getDate()),
    date.getFullYear()
  ].join('/');
}

test('should say just now if date is less than one minute ago', assert => {
  assert.equal(relative(new Date()).string, 'just now');
  assert.end();
});

test('should say 1 minute ago if date is one minute ago', assert => {
  const testDate = new Date();
  testDate.setMinutes(testDate.getMinutes() - 1);

  assert.equal(relative(testDate).string, '1 minute ago');
  assert.end();
});

test('should say 2 minutes ago if date is two minutes ago', assert => {
  const testDate = new Date();
  testDate.setMinutes(testDate.getMinutes() - 2);

  assert.equal(relative(testDate).string, '2 minutes ago');
  assert.end();
});

test('should say 1 day ago if date is one day ago', assert => {
  const testDate = new Date();
  testDate.setDate(testDate.getDate() - 1);

  assert.equal(relative(testDate).string, '1 day ago');
  assert.end();
});

test('should say 2 days ago if date is two day ago', assert => {
  const testDate = new Date();
  testDate.setDate(testDate.getDate() - 2);

  assert.equal(relative(testDate).string, '2 days ago');
  assert.end();
});

test('should say 1 month ago if date is one month ago', assert => {
  const testDate = new Date();
  testDate.setMonth(testDate.getMonth() - 1);
  assert.equal(relative(testDate).string, '1 month ago');
  assert.end();
});

test('should return normal format date if date is greater than one month ago', assert => {
  const testDate = new Date();
  testDate.setMonth(testDate.getMonth() - 2);

  assert.equal(relative(testDate).string, formatDate(testDate));
  assert.end();
});

test('passing date string should return correct string', assert => {
  const current = new Date();

  assert.equal(relative(current.toString()).string, 'just now');

  current.setDate(current.getDate() - 1);

  assert.equal(relative(current.toString()).string, '1 day ago');
  assert.end();
});

test('passing timestamp should return correct string', assert => {
  const current = new Date();

  assert.equal(relative(current.getTime()).string, 'just now');

  current.setDate(current.getDate() - 1);

  assert.equal(relative(current.getTime()).string, '1 day ago');
  assert.end();
});

test('future date should be parsed', assert => {
  const current = new Date();

  current.setDate(current.getDate() + 1);

  assert.equal(relative(current).string, '1 day from now');
  assert.end();
});
