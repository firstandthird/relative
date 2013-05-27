#relative

Relative date library

##Installation

###Bower (Browser)

`bower install relative`

###NPM (Node/Browserify)

`npm install relative`

###Manual Download

- [Development]()
- [Production]()

##Usage

###relative
```javascript
relative(toDate, fromDate);
//fromDate is optional, defaults to Date.now()
//returns string
```

```javascript
relative(new Date(2013, 5, 27, 3, 0));
//returns 2 hours ago
```

###Example return values

- Just now
- 5 minutes ago
- 1 hour ago
- 2 days ago
- 1 week ago
- 1 month ago
- if longer than 1 month, returns short date 05/27/2013

##Development

###Requirements

- node and npm
- bower `npm install -g bower`
- grunt `npm install -g grunt-cli`

###Setup

- `npm install`
- `bower install`

###Run

`grunt dev`

or for just running tests on file changes:

`grunt ci`

###Tests

`grunt mocha`
