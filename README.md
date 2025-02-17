# zendesk-timezone-js

This library is a fork of the rails-timezone-js library (https://github.com/davidwood/rails-timezone-js), and takes into account the latest timezone modifications (from current active support time zone).
It also allows to list timezones with the names displayed in Zendesk.

It can be used both in node.js and browsers.

## Usage

The library provides two functions:

* `from(timezone)`: Convert from a zendesk time zone name
* `to(tz)`: Convert to a Zendesk time zone name

### node.js

    npm install zendesk-timezone

### Browser

The functions are exposed via `window.ZendeskTimeZone`

