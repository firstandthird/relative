# Relative

Relative date library

## Installation

`npm install @firstandthird/relative`

## Usage

```javascript
import relative from '@firstandthird/relative';

relative(toDate, fromDate);
// fromDate is optional, defaults to Date.now()
// returns string
```

### Example return values

- Just now
- 5 minutes ago
- 1 hour ago
- 2 days ago
- 1 week ago
- 1 month ago
- if longer than 1 month, returns short date 05/27/2013
