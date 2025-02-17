/*!
 * zendesk-timezone.js
 * https://github.com/cdelaforge/zendesk-timezone-js
 *
 * Copyright (c) 2025 Christophe Delaforge <christophe@delaforge.eu>
 * Licensed under The MIT License
 * http://opensource.org/licenses/MIT
 */
(function () {
  const list = [
    {
      "key": "International Date Line West",
      "name": "(GMT-12:00)",
      "tz": "Etc/GMT+12"
    },
    {
      "key": "Midway Island",
      "name": "(GMT-11:00)",
      "tz": "Pacific/Midway"
    },
    {
      "key": "American Samoa",
      "name": "(GMT-11:00)",
      "tz": "Pacific/Pago_Pago"
    },
    {
      "key": "Hawaii",
      "name": "(GMT-10:00)",
      "tz": "Pacific/Honolulu"
    },
    {
      "key": "Alaska",
      "name": "(GMT-09:00)",
      "tz": "America/Juneau"
    },
    {
      "key": "Pacific Time (US & Canada)",
      "name": "(GMT-08:00)",
      "tz": "America/Los_Angeles"
    },
    {
      "key": "Tijuana",
      "name": "(GMT-08:00)",
      "tz": "America/Tijuana"
    },
    {
      "key": "Mountain Time (US & Canada)",
      "name": "(GMT-07:00)",
      "tz": "America/Denver"
    },
    {
      "key": "Arizona",
      "name": "(GMT-07:00)",
      "tz": "America/Phoenix"
    },
    {
      "key": "Chihuahua",
      "name": "(GMT-06:00)",
      "tz": "America/Chihuahua"
    },
    {
      "key": "Mazatlan",
      "name": "(GMT-07:00)",
      "tz": "America/Mazatlan"
    },
    {
      "key": "Central Time (US & Canada)",
      "name": "(GMT-06:00)",
      "tz": "America/Chicago"
    },
    {
      "key": "Saskatchewan",
      "name": "(GMT-06:00)",
      "tz": "America/Regina"
    },
    {
      "key": "Guadalajara",
      "name": "(GMT-06:00)",
      "tz": "America/Mexico_City"
    },
    {
      "key": "Mexico City",
      "name": "(GMT-06:00)",
      "tz": "America/Mexico_City"
    },
    {
      "key": "Monterrey",
      "name": "(GMT-06:00)",
      "tz": "America/Monterrey"
    },
    {
      "key": "Central America",
      "name": "(GMT-06:00)",
      "tz": "America/Guatemala"
    },
    {
      "key": "Eastern Time (US & Canada)",
      "name": "(GMT-05:00)",
      "tz": "America/New_York"
    },
    {
      "key": "Indiana (East)",
      "name": "(GMT-05:00)",
      "tz": "America/Indiana/Indianapolis"
    },
    {
      "key": "Bogota",
      "name": "(GMT-05:00)",
      "tz": "America/Bogota"
    },
    {
      "key": "Lima",
      "name": "(GMT-05:00)",
      "tz": "America/Lima"
    },
    {
      "key": "Quito",
      "name": "(GMT-05:00)",
      "tz": "America/Lima"
    },
    {
      "key": "Atlantic Time (Canada)",
      "name": "(GMT-04:00)",
      "tz": "America/Halifax"
    },
    {
      "key": "Caracas",
      "name": "(GMT-04:00)",
      "tz": "America/Caracas"
    },
    {
      "key": "La Paz",
      "name": "(GMT-04:00)",
      "tz": "America/La_Paz"
    },
    {
      "key": "Santiago",
      "name": "(GMT-03:00)",
      "tz": "America/Santiago"
    },
    {
      "key": "Newfoundland",
      "name": "(GMT-03:30)",
      "tz": "America/St_Johns"
    },
    {
      "key": "Brasilia",
      "name": "(GMT-03:00)",
      "tz": "America/Sao_Paulo"
    },
    {
      "key": "Buenos Aires",
      "name": "(GMT-03:00)",
      "tz": "America/Argentina/Buenos_Aires"
    },
    {
      "key": "Montevideo",
      "name": "(GMT-03:00)",
      "tz": "America/Montevideo"
    },
    {
      "key": "Georgetown",
      "name": "(GMT-04:00)",
      "tz": "America/Guyana"
    },
    {
      "key": "Puerto Rico",
      "name": "(GMT-04:00)",
      "tz": "America/Puerto_Rico"
    },
    {
      "key": "Greenland",
      "name": "(GMT-02:00)",
      "tz": "America/Godthab"
    },
    {
      "key": "Mid-Atlantic",
      "name": "(GMT-02:00)",
      "tz": "Atlantic/South_Georgia"
    },
    {
      "key": "Azores",
      "name": "(GMT-01:00)",
      "tz": "Atlantic/Azores"
    },
    {
      "key": "Cape Verde Is.",
      "name": "(GMT-01:00)",
      "tz": "Atlantic/Cape_Verde"
    },
    {
      "key": "Dublin",
      "name": "(GMT+00:00)",
      "tz": "Europe/Dublin"
    },
    {
      "key": "Edinburgh",
      "name": "(GMT+00:00)",
      "tz": "Europe/London"
    },
    {
      "key": "Lisbon",
      "name": "(GMT+00:00)",
      "tz": "Europe/Lisbon"
    },
    {
      "key": "London",
      "name": "(GMT+00:00)",
      "tz": "Europe/London"
    },
    {
      "key": "Monrovia",
      "name": "(GMT+00:00)",
      "tz": "Africa/Monrovia"
    },
    {
      "key": "UTC",
      "name": "(GMT+00:00)",
      "tz": "Etc/UTC"
    },
    {
      "key": "Amsterdam",
      "name": "(GMT+01:00)",
      "tz": "Europe/Amsterdam"
    },
    {
      "key": "Belgrade",
      "name": "(GMT+01:00)",
      "tz": "Europe/Belgrade"
    },
    {
      "key": "Berlin",
      "name": "(GMT+01:00)",
      "tz": "Europe/Berlin"
    },
    {
      "key": "Bern",
      "name": "(GMT+01:00)",
      "tz": "Europe/Zurich"
    },
    {
      "key": "Bratislava",
      "name": "(GMT+01:00)",
      "tz": "Europe/Bratislava"
    },
    {
      "key": "Brussels",
      "name": "(GMT+01:00)",
      "tz": "Europe/Brussels"
    },
    {
      "key": "Budapest",
      "name": "(GMT+01:00)",
      "tz": "Europe/Budapest"
    },
    {
      "key": "Casablanca",
      "name": "(GMT+01:00)",
      "tz": "Africa/Casablanca"
    },
    {
      "key": "Copenhagen",
      "name": "(GMT+01:00)",
      "tz": "Europe/Copenhagen"
    },
    {
      "key": "Ljubljana",
      "name": "(GMT+01:00)",
      "tz": "Europe/Ljubljana"
    },
    {
      "key": "Madrid",
      "name": "(GMT+01:00)",
      "tz": "Europe/Madrid"
    },
    {
      "key": "Oslo",
      "name": "(GMT+01:00)"
    },
    {
      "key": "Paris",
      "name": "(GMT+01:00)",
      "tz": "Europe/Paris"
    },
    {
      "key": "Prague",
      "name": "(GMT+01:00)",
      "tz": "Europe/Prague"
    },
    {
      "key": "Rome",
      "name": "(GMT+01:00)",
      "tz": "Europe/Rome"
    },
    {
      "key": "Sarajevo",
      "name": "(GMT+01:00)",
      "tz": "Europe/Sarajevo"
    },
    {
      "key": "Skopje",
      "name": "(GMT+01:00)",
      "tz": "Europe/Skopje"
    },
    {
      "key": "Stockholm",
      "name": "(GMT+01:00)",
      "tz": "Europe/Stockholm"
    },
    {
      "key": "Vienna",
      "name": "(GMT+01:00)",
      "tz": "Europe/Vienna"
    },
    {
      "key": "Warsaw",
      "name": "(GMT+01:00)",
      "tz": "Europe/Warsaw"
    },
    {
      "key": "West Central Africa",
      "name": "(GMT+01:00)",
      "tz": "Africa/Algiers"
    },
    {
      "key": "Zagreb",
      "name": "(GMT+01:00)",
      "tz": "Europe/Zagreb"
    },
    {
      "key": "Zurich",
      "name": "(GMT+01:00)",
      "tz": "Europe/Zurich"
    },
    {
      "key": "Athens",
      "name": "(GMT+02:00)",
      "tz": "Europe/Athens"
    },
    {
      "key": "Bucharest",
      "name": "(GMT+02:00)",
      "tz": "Europe/Bucharest"
    },
    {
      "key": "Cairo",
      "name": "(GMT+02:00)",
      "tz": "Africa/Cairo"
    },
    {
      "key": "Harare",
      "name": "(GMT+02:00)",
      "tz": "Africa/Harare"
    },
    {
      "key": "Helsinki",
      "name": "(GMT+02:00)",
      "tz": "Europe/Helsinki"
    },
    {
      "key": "Jerusalem",
      "name": "(GMT+02:00)",
      "tz": "Asia/Jerusalem"
    },
    {
      "key": "Kaliningrad",
      "name": "(GMT+02:00)",
      "tz": "Europe/Kaliningrad"
    },
    {
      "key": "Kyiv",
      "name": "(GMT+02:00)",
      "tz": "Europe/Kiev"
    },
    {
      "key": "Pretoria",
      "name": "(GMT+02:00)",
      "tz": "Africa/Johannesburg"
    },
    {
      "key": "Riga",
      "name": "(GMT+02:00)",
      "tz": "Europe/Riga"
    },
    {
      "key": "Sofia",
      "name": "(GMT+02:00)",
      "tz": "Europe/Sofia"
    },
    {
      "key": "Tallinn",
      "name": "(GMT+02:00)",
      "tz": "Europe/Tallinn"
    },
    {
      "key": "Vilnius",
      "name": "(GMT+02:00)",
      "tz": "Europe/Vilnius"
    },
    {
      "key": "Baghdad",
      "name": "(GMT+03:00)",
      "tz": "Asia/Baghdad"
    },
    {
      "key": "Istanbul",
      "name": "(GMT+03:00)",
      "tz": "Europe/Istanbul"
    },
    {
      "key": "Kuwait",
      "name": "(GMT+03:00)",
      "tz": "Asia/Kuwait"
    },
    {
      "key": "Minsk",
      "name": "(GMT+03:00)",
      "tz": "Europe/Minsk"
    },
    {
      "key": "Moscow",
      "name": "(GMT+03:00)",
      "tz": "Europe/Moscow"
    },
    {
      "key": "Nairobi",
      "name": "(GMT+03:00)",
      "tz": "Africa/Nairobi"
    },
    {
      "key": "Riyadh",
      "name": "(GMT+03:00)",
      "tz": "Asia/Riyadh"
    },
    {
      "key": "St. Petersburg",
      "name": "(GMT+03:00)",
      "tz": "Europe/Moscow"
    },
    {
      "key": "Volgograd",
      "name": "(GMT+03:00)",
      "tz": "Europe/Volgograd"
    },
    {
      "key": "Tehran",
      "name": "(GMT+03:00)",
      "tz": "Asia/Tehran"
    },
    {
      "key": "Abu Dhabi",
      "name": "(GMT+04:00)",
      "tz": "Asia/Muscat"
    },
    {
      "key": "Baku",
      "name": "(GMT+04:00)",
      "tz": "Asia/Baku"
    },
    {
      "key": "Muscat",
      "name": "(GMT+04:00)",
      "tz": "Asia/Muscat"
    },
    {
      "key": "Samara",
      "name": "(GMT+04:00)",
      "tz": "Europe/Samara"
    },
    {
      "key": "Tbilisi",
      "name": "(GMT+04:00)",
      "tz": "Asia/Tbilisi"
    },
    {
      "key": "Yerevan",
      "name": "(GMT+04:00)",
      "tz": "Asia/Yerevan"
    },
    {
      "key": "Kabul",
      "name": "(GMT+04:30)",
      "tz": "Asia/Kabul"
    },
    {
      "key": "Almaty",
      "name": "(GMT+05:00)",
      "tz": "Asia/Almaty"
    },
    {
      "key": "Astana",
      "name": "(GMT+05:00)",
      "tz": "Asia/Almaty"
    },
    {
      "key": "Ekaterinburg",
      "name": "(GMT+05:00)",
      "tz": "Asia/Yekaterinburg"
    },
    {
      "key": "Islamabad",
      "name": "(GMT+05:00)",
      "tz": "Asia/Karachi"
    },
    {
      "key": "Karachi",
      "name": "(GMT+05:00)",
      "tz": "Asia/Karachi"
    },
    {
      "key": "Tashkent",
      "name": "(GMT+05:00)",
      "tz": "Asia/Tashkent"
    },
    {
      "key": "Chennai",
      "name": "(GMT+05:30)",
      "tz": "Asia/Kolkata"
    },
    {
      "key": "Kolkata",
      "name": "(GMT+05:30)",
      "tz": "Asia/Kolkata"
    },
    {
      "key": "Mumbai",
      "name": "(GMT+05:30)",
      "tz": "Asia/Kolkata"
    },
    {
      "key": "New Delhi",
      "name": "(GMT+05:30)",
      "tz": "Asia/Kolkata"
    },
    {
      "key": "Sri Jayawardenepura",
      "name": "(GMT+05:30)",
      "tz": "Asia/Colombo"
    },
    {
      "key": "Kathmandu",
      "name": "(GMT+05:45)",
      "tz": "Asia/Kathmandu"
    },
    {
      "key": "Dhaka",
      "name": "(GMT+06:00)",
      "tz": "Asia/Dhaka"
    },
    {
      "key": "Urumqi",
      "name": "(GMT+06:00)",
      "tz": "Asia/Urumqi"
    },
    {
      "key": "Rangoon",
      "name": "(GMT+06:30)",
      "tz": "Asia/Rangoon"
    },
    {
      "key": "Bangkok",
      "name": "(GMT+07:00)",
      "tz": "Asia/Bangkok"
    },
    {
      "key": "Hanoi",
      "name": "(GMT+07:00)",
      "tz": "Asia/Bangkok"
    },
    {
      "key": "Jakarta",
      "name": "(GMT+07:00)",
      "tz": "Asia/Jakarta"
    },
    {
      "key": "Krasnoyarsk",
      "name": "(GMT+07:00)",
      "tz": "Asia/Krasnoyarsk"
    },
    {
      "key": "Novosibirsk",
      "name": "(GMT+07:00)",
      "tz": "Asia/Novosibirsk"
    },
    {
      "key": "Beijing",
      "name": "(GMT+08:00)",
      "tz": "Asia/Shanghai"
    },
    {
      "key": "Chongqing",
      "name": "(GMT+08:00)",
      "tz": "Asia/Chongqing"
    },
    {
      "key": "Hong Kong",
      "name": "(GMT+08:00)",
      "tz": "Asia/Hong_Kong"
    },
    {
      "key": "Irkutsk",
      "name": "(GMT+08:00)",
      "tz": "Asia/Irkutsk"
    },
    {
      "key": "Kuala Lumpur",
      "name": "(GMT+08:00)",
      "tz": "Asia/Kuala_Lumpur"
    },
    {
      "key": "Perth",
      "name": "(GMT+08:00)",
      "tz": "Australia/Perth"
    },
    {
      "key": "Singapore",
      "name": "(GMT+08:00)",
      "tz": "Asia/Singapore"
    },
    {
      "key": "Taipei",
      "name": "(GMT+08:00)",
      "tz": "Asia/Taipei"
    },
    {
      "key": "Ulaanbaatar",
      "name": "(GMT+08:00)",
      "tz": "Asia/Ulaanbaatar"
    },
    {
      "key": "Osaka",
      "name": "(GMT+09:00)",
      "tz": "Asia/Tokyo"
    },
    {
      "key": "Sapporo",
      "name": "(GMT+09:00)",
      "tz": "Asia/Tokyo"
    },
    {
      "key": "Seoul",
      "name": "(GMT+09:00)",
      "tz": "Asia/Seoul"
    },
    {
      "key": "Tokyo",
      "name": "(GMT+09:00)",
      "tz": "Asia/Tokyo"
    },
    {
      "key": "Yakutsk",
      "name": "(GMT+09:00)",
      "tz": "Asia/Yakutsk"
    },
    {
      "key": "Darwin",
      "name": "(GMT+09:30)",
      "tz": "Australia/Darwin"
    },
    {
      "key": "Brisbane",
      "name": "(GMT+10:00)",
      "tz": "Australia/Brisbane"
    },
    {
      "key": "Guam",
      "name": "(GMT+10:00)",
      "tz": "Pacific/Guam"
    },
    {
      "key": "Port Moresby",
      "name": "(GMT+10:00)",
      "tz": "Pacific/Port_Moresby"
    },
    {
      "key": "Vladivostok",
      "name": "(GMT+10:00)",
      "tz": "Asia/Vladivostok"
    },
    {
      "key": "Adelaide",
      "name": "(GMT+10:30)",
      "tz": "Australia/Adelaide"
    },
    {
      "key": "Canberra",
      "name": "(GMT+11:00)",
      "tz": "Australia/Canberra"
    },
    {
      "key": "Hobart",
      "name": "(GMT+11:00)",
      "tz": "Australia/Hobart"
    },
    {
      "key": "Magadan",
      "name": "(GMT+11:00)",
      "tz": "Asia/Magadan"
    },
    {
      "key": "Melbourne",
      "name": "(GMT+11:00)",
      "tz": "Australia/Melbourne"
    },
    {
      "key": "New Caledonia",
      "name": "(GMT+11:00)",
      "tz": "Pacific/Noumea"
    },
    {
      "key": "Solomon Is.",
      "name": "(GMT+11:00)",
      "tz": "Pacific/Guadalcanal"
    },
    {
      "key": "Srednekolymsk",
      "name": "(GMT+11:00)",
      "tz": "Asia/Srednekolymsk"
    },
    {
      "key": "Sydney",
      "name": "(GMT+11:00)",
      "tz": "Australia/Sydney"
    },
    {
      "key": "Fiji",
      "name": "(GMT+12:00)",
      "tz": "Pacific/Fiji"
    },
    {
      "key": "Kamchatka",
      "name": "(GMT+12:00)",
      "tz": "Asia/Kamchatka"
    },
    {
      "key": "Marshall Is.",
      "name": "(GMT+12:00)",
      "tz": "Pacific/Majuro"
    },
    {
      "key": "Auckland",
      "name": "(GMT+13:00)",
      "tz": "Pacific/Auckland"
    },
    {
      "key": "Nuku'alofa",
      "name": "(GMT+13:00)",
      "tz": "Pacific/Tongatapu"
    },
    {
      "key": "Samoa",
      "name": "(GMT+13:00)",
      "tz": "Pacific/Apia"
    },
    {
      "key": "Tokelau Is.",
      "name": "(GMT+13:00)",
      "tz": "Pacific/Fakaofo"
    },
    {
      "key": "Wellington",
      "name": "(GMT+13:00)",
      "tz": "Pacific/Auckland"
    },
    {
      "key": "Chatham Is.",
      "name": "(GMT+13:45)",
      "tz": "Pacific/Chatham"
    }
  ];

  // Keys are Zendesk TimeZone names, values are TZInfo identifiers.
  const mapping = Object.assign({}, ...list.map((x) => ({ [x.key]: x.tz })));

  const api = {
    // Convert from a Zendesk TimeZone name
    from: (value) => mapping[value],

    // Convert to a Zendesk TimeZone name
    to: (value) => list.find(elt => elt.tz === value)?.key,

    // List all timezones
    list: () => list
  };

  if (typeof module !== 'undefined' && Object(module) === module) {
    // node.js / CommonJS
    module.exports = api;
  } else {
    // Export as a top level object
    this.ZendeskTimeZone = api;
  }
}).call(this);
