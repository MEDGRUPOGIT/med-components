import { attachShadow, createEvent, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { b as getIonMode } from './ionic-global.js';
import { a as addEventListener, f as clamp, j as findItemLabel, e as renderHiddenInput } from './helpers.js';
import { p as pickerController } from './overlays.js';
import { h as hostContext } from './theme.js';

/**
 * Gets a date value given a format
 * Defaults to the current date if
 * no date given
 */
const getDateValue = (date, format) => {
  const getValue = getValueFromFormat(date, format);
  if (getValue !== undefined) {
    if (format === FORMAT_A || format === FORMAT_a) {
      date.ampm = getValue;
    }
    return getValue;
  }
  const defaultDate = parseDate(new Date().toISOString());
  return getValueFromFormat(defaultDate, format);
};
const renderDatetime = (template, value, locale) => {
  if (value === undefined) {
    return undefined;
  }
  const tokens = [];
  let hasText = false;
  FORMAT_KEYS.forEach((format, index) => {
    if (template.indexOf(format.f) > -1) {
      const token = '{' + index + '}';
      const text = renderTextFormat(format.f, value[format.k], value, locale);
      if (!hasText && text !== undefined && value[format.k] != null) {
        hasText = true;
      }
      tokens.push(token, text || '');
      template = template.replace(format.f, token);
    }
  });
  if (!hasText) {
    return undefined;
  }
  for (let i = 0; i < tokens.length; i += 2) {
    template = template.replace(tokens[i], tokens[i + 1]);
  }
  return template;
};
const renderTextFormat = (format, value, date, locale) => {
  if ((format === FORMAT_DDDD || format === FORMAT_DDD)) {
    try {
      value = (new Date(date.year, date.month - 1, date.day)).getDay();
      if (format === FORMAT_DDDD) {
        return (locale.dayNames ? locale.dayNames : DAY_NAMES)[value];
      }
      return (locale.dayShortNames ? locale.dayShortNames : DAY_SHORT_NAMES)[value];
    }
    catch (e) {
      // ignore
    }
    return undefined;
  }
  if (format === FORMAT_A) {
    return date !== undefined && date.hour !== undefined
      ? (date.hour < 12 ? 'AM' : 'PM')
      : value ? value.toUpperCase() : '';
  }
  if (format === FORMAT_a) {
    return date !== undefined && date.hour !== undefined
      ? (date.hour < 12 ? 'am' : 'pm')
      : value || '';
  }
  if (value == null) {
    return '';
  }
  if (format === FORMAT_YY || format === FORMAT_MM ||
    format === FORMAT_DD || format === FORMAT_HH ||
    format === FORMAT_mm || format === FORMAT_ss) {
    return twoDigit(value);
  }
  if (format === FORMAT_YYYY) {
    return fourDigit(value);
  }
  if (format === FORMAT_MMMM) {
    return (locale.monthNames ? locale.monthNames : MONTH_NAMES)[value - 1];
  }
  if (format === FORMAT_MMM) {
    return (locale.monthShortNames ? locale.monthShortNames : MONTH_SHORT_NAMES)[value - 1];
  }
  if (format === FORMAT_hh || format === FORMAT_h) {
    if (value === 0) {
      return '12';
    }
    if (value > 12) {
      value -= 12;
    }
    if (format === FORMAT_hh && value < 10) {
      return ('0' + value);
    }
  }
  return value.toString();
};
const dateValueRange = (format, min, max) => {
  const opts = [];
  if (format === FORMAT_YYYY || format === FORMAT_YY) {
    // year
    if (max.year === undefined || min.year === undefined) {
      throw new Error('min and max year is undefined');
    }
    for (let i = max.year; i >= min.year; i--) {
      opts.push(i);
    }
  }
  else if (format === FORMAT_MMMM || format === FORMAT_MMM ||
    format === FORMAT_MM || format === FORMAT_M ||
    format === FORMAT_hh || format === FORMAT_h) {
    // month or 12-hour
    for (let i = 1; i < 13; i++) {
      opts.push(i);
    }
  }
  else if (format === FORMAT_DDDD || format === FORMAT_DDD ||
    format === FORMAT_DD || format === FORMAT_D) {
    // day
    for (let i = 1; i < 32; i++) {
      opts.push(i);
    }
  }
  else if (format === FORMAT_HH || format === FORMAT_H) {
    // 24-hour
    for (let i = 0; i < 24; i++) {
      opts.push(i);
    }
  }
  else if (format === FORMAT_mm || format === FORMAT_m) {
    // minutes
    for (let i = 0; i < 60; i++) {
      opts.push(i);
    }
  }
  else if (format === FORMAT_ss || format === FORMAT_s) {
    // seconds
    for (let i = 0; i < 60; i++) {
      opts.push(i);
    }
  }
  else if (format === FORMAT_A || format === FORMAT_a) {
    // AM/PM
    opts.push('am', 'pm');
  }
  return opts;
};
const dateSortValue = (year, month, day, hour = 0, minute = 0) => {
  return parseInt(`1${fourDigit(year)}${twoDigit(month)}${twoDigit(day)}${twoDigit(hour)}${twoDigit(minute)}`, 10);
};
const dateDataSortValue = (data) => {
  return dateSortValue(data.year, data.month, data.day, data.hour, data.minute);
};
const daysInMonth = (month, year) => {
  return (month === 4 || month === 6 || month === 9 || month === 11) ? 30 : (month === 2) ? isLeapYear(year) ? 29 : 28 : 31;
};
const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};
const ISO_8601_REGEXP = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;
const TIME_REGEXP = /^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;
const parseDate = (val) => {
  // manually parse IS0 cuz Date.parse cannot be trusted
  // ISO 8601 format: 1994-12-15T13:47:20Z
  let parse = null;
  if (val != null && val !== '') {
    // try parsing for just time first, HH:MM
    parse = TIME_REGEXP.exec(val);
    if (parse) {
      // adjust the array so it fits nicely with the datetime parse
      parse.unshift(undefined, undefined);
      parse[2] = parse[3] = undefined;
    }
    else {
      // try parsing for full ISO datetime
      parse = ISO_8601_REGEXP.exec(val);
    }
  }
  if (parse === null) {
    // wasn't able to parse the ISO datetime
    return undefined;
  }
  // ensure all the parse values exist with at least 0
  for (let i = 1; i < 8; i++) {
    parse[i] = parse[i] !== undefined ? parseInt(parse[i], 10) : undefined;
  }
  let tzOffset = 0;
  if (parse[9] && parse[10]) {
    // hours
    tzOffset = parseInt(parse[10], 10) * 60;
    if (parse[11]) {
      // minutes
      tzOffset += parseInt(parse[11], 10);
    }
    if (parse[9] === '-') {
      // + or -
      tzOffset *= -1;
    }
  }
  return {
    year: parse[1],
    month: parse[2],
    day: parse[3],
    hour: parse[4],
    minute: parse[5],
    second: parse[6],
    millisecond: parse[7],
    tzOffset,
  };
};
/**
 * Converts a valid UTC datetime string to JS Date time object.
 * By default uses the users local timezone, but an optional
 * timezone can be provided.
 * Note: This is not meant for time strings
 * such as "01:47"
 */
const getDateTime = (dateString = '', timeZone = '') => {
  /**
   * If user passed in undefined
   * or null, convert it to the
   * empty string since the rest
   * of this functions expects
   * a string
   */
  if (dateString === undefined || dateString === null) {
    dateString = '';
  }
  /**
   * Ensures that YYYY-MM-DD, YYYY-MM,
   * YYYY-DD, YYYY, etc does not get affected
   * by timezones and stays on the day/month
   * that the user provided
   */
  if (dateString.length === 10 ||
    dateString.length === 7 ||
    dateString.length === 4) {
    dateString += ' ';
  }
  const date = (typeof dateString === 'string' && dateString.length > 0) ? new Date(dateString) : new Date();
  const localDateTime = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  if (timeZone && timeZone.length > 0) {
    return new Date(date.getTime() - getTimezoneOffset(localDateTime, timeZone));
  }
  return localDateTime;
};
const getTimezoneOffset = (localDate, timeZone) => {
  const utcDateTime = new Date(localDate.toLocaleString('en-US', { timeZone: 'utc' }));
  const tzDateTime = new Date(localDate.toLocaleString('en-US', { timeZone }));
  return utcDateTime.getTime() - tzDateTime.getTime();
};
const updateDate = (existingData, newData, displayTimezone) => {
  if (!newData || typeof newData === 'string') {
    const dateTime = getDateTime(newData, displayTimezone);
    if (!Number.isNaN(dateTime.getTime())) {
      newData = dateTime.toISOString();
    }
  }
  if (newData && newData !== '') {
    if (typeof newData === 'string') {
      // new date is a string, and hopefully in the ISO format
      // convert it to our DatetimeData if a valid ISO
      newData = parseDate(newData);
      if (newData) {
        // successfully parsed the ISO string to our DatetimeData
        Object.assign(existingData, newData);
        return true;
      }
    }
    else if ((newData.year || newData.hour || newData.month || newData.day || newData.minute || newData.second)) {
      // newData is from the datetime picker's selected values
      // update the existing datetimeValue with the new values
      if (newData.ampm !== undefined && newData.hour !== undefined) {
        // change the value of the hour based on whether or not it is am or pm
        // if the meridiem is pm and equal to 12, it remains 12
        // otherwise we add 12 to the hour value
        // if the meridiem is am and equal to 12, we change it to 0
        // otherwise we use its current hour value
        // for example: 8 pm becomes 20, 12 am becomes 0, 4 am becomes 4
        newData.hour.value = (newData.ampm.value === 'pm')
          ? (newData.hour.value === 12 ? 12 : newData.hour.value + 12)
          : (newData.hour.value === 12 ? 0 : newData.hour.value);
      }
      // merge new values from the picker's selection
      // to the existing DatetimeData values
      for (const key of Object.keys(newData)) {
        existingData[key] = newData[key].value;
      }
      return true;
    }
    else if (newData.ampm) {
      // Even though in the picker column hour values are between 1 and 12, the hour value is actually normalized
      // to [0, 23] interval. Because of this when changing between AM and PM we have to update the hour so it points
      // to the correct HH hour
      newData.hour = {
        value: newData.hour
          ? newData.hour.value
          : (newData.ampm.value === 'pm'
            ? (existingData.hour < 12 ? existingData.hour + 12 : existingData.hour)
            : (existingData.hour >= 12 ? existingData.hour - 12 : existingData.hour))
      };
      existingData['hour'] = newData['hour'].value;
      existingData['ampm'] = newData['ampm'].value;
      return true;
    }
    // eww, invalid data
    console.warn(`Error parsing date: "${newData}". Please provide a valid ISO 8601 datetime format: https://www.w3.org/TR/NOTE-datetime`);
  }
  else {
    // blank data, clear everything out
    for (const k in existingData) {
      if (existingData.hasOwnProperty(k)) {
        delete existingData[k];
      }
    }
  }
  return false;
};
const parseTemplate = (template) => {
  const formats = [];
  template = template.replace(/[^\w\s]/gi, ' ');
  FORMAT_KEYS.forEach(format => {
    if (format.f.length > 1 && template.indexOf(format.f) > -1 && template.indexOf(format.f + format.f.charAt(0)) < 0) {
      template = template.replace(format.f, ' ' + format.f + ' ');
    }
  });
  const words = template.split(' ').filter(w => w.length > 0);
  words.forEach((word, i) => {
    FORMAT_KEYS.forEach(format => {
      if (word === format.f) {
        if (word === FORMAT_A || word === FORMAT_a) {
          // this format is an am/pm format, so it's an "a" or "A"
          if ((formats.indexOf(FORMAT_h) < 0 && formats.indexOf(FORMAT_hh) < 0) ||
            VALID_AMPM_PREFIX.indexOf(words[i - 1]) === -1) {
            // template does not already have a 12-hour format
            // or this am/pm format doesn't have a hour, minute, or second format immediately before it
            // so do not treat this word "a" or "A" as the am/pm format
            return;
          }
        }
        formats.push(word);
      }
    });
  });
  return formats;
};
const getValueFromFormat = (date, format) => {
  if (format === FORMAT_A || format === FORMAT_a) {
    return (date.hour < 12 ? 'am' : 'pm');
  }
  if (format === FORMAT_hh || format === FORMAT_h) {
    return (date.hour > 12 ? date.hour - 12 : (date.hour === 0 ? 12 : date.hour));
  }
  return date[convertFormatToKey(format)];
};
const convertFormatToKey = (format) => {
  for (const k in FORMAT_KEYS) {
    if (FORMAT_KEYS[k].f === format) {
      return FORMAT_KEYS[k].k;
    }
  }
  return undefined;
};
const convertDataToISO = (data) => {
  // https://www.w3.org/TR/NOTE-datetime
  let rtn = '';
  if (data.year !== undefined) {
    // YYYY
    rtn = fourDigit(data.year);
    if (data.month !== undefined) {
      // YYYY-MM
      rtn += '-' + twoDigit(data.month);
      if (data.day !== undefined) {
        // YYYY-MM-DD
        rtn += '-' + twoDigit(data.day);
        if (data.hour !== undefined) {
          // YYYY-MM-DDTHH:mm:SS
          rtn += `T${twoDigit(data.hour)}:${twoDigit(data.minute)}:${twoDigit(data.second)}`;
          if (data.millisecond > 0) {
            // YYYY-MM-DDTHH:mm:SS.SSS
            rtn += '.' + threeDigit(data.millisecond);
          }
          if (data.tzOffset === undefined) {
            // YYYY-MM-DDTHH:mm:SSZ
            rtn += 'Z';
          }
          else {
            // YYYY-MM-DDTHH:mm:SS+/-HH:mm
            rtn += (data.tzOffset > 0 ? '+' : '-') + twoDigit(Math.floor(Math.abs(data.tzOffset / 60))) + ':' + twoDigit(data.tzOffset % 60);
          }
        }
      }
    }
  }
  else if (data.hour !== undefined) {
    // HH:mm
    rtn = twoDigit(data.hour) + ':' + twoDigit(data.minute);
    if (data.second !== undefined) {
      // HH:mm:SS
      rtn += ':' + twoDigit(data.second);
      if (data.millisecond !== undefined) {
        // HH:mm:SS.SSS
        rtn += '.' + threeDigit(data.millisecond);
      }
    }
  }
  return rtn;
};
/**
 * Use to convert a string of comma separated strings or
 * an array of strings, and clean up any user input
 */
const convertToArrayOfStrings = (input, type) => {
  if (input == null) {
    return undefined;
  }
  if (typeof input === 'string') {
    // convert the string to an array of strings
    // auto remove any [] characters
    input = input.replace(/\[|\]/g, '').split(',');
  }
  let values;
  if (Array.isArray(input)) {
    // trim up each string value
    values = input.map(val => val.toString().trim());
  }
  if (values === undefined || values.length === 0) {
    console.warn(`Invalid "${type}Names". Must be an array of strings, or a comma separated string.`);
  }
  return values;
};
/**
 * Use to convert a string of comma separated numbers or
 * an array of numbers, and clean up any user input
 */
const convertToArrayOfNumbers = (input, type) => {
  if (typeof input === 'string') {
    // convert the string to an array of strings
    // auto remove any whitespace and [] characters
    input = input.replace(/\[|\]|\s/g, '').split(',');
  }
  let values;
  if (Array.isArray(input)) {
    // ensure each value is an actual number in the returned array
    values = input
      .map((num) => parseInt(num, 10))
      .filter(isFinite);
  }
  else {
    values = [input];
  }
  if (values.length === 0) {
    console.warn(`Invalid "${type}Values". Must be an array of numbers, or a comma separated string of numbers.`);
  }
  return values;
};
const twoDigit = (val) => {
  return ('0' + (val !== undefined ? Math.abs(val) : '0')).slice(-2);
};
const threeDigit = (val) => {
  return ('00' + (val !== undefined ? Math.abs(val) : '0')).slice(-3);
};
const fourDigit = (val) => {
  return ('000' + (val !== undefined ? Math.abs(val) : '0')).slice(-4);
};
const FORMAT_YYYY = 'YYYY';
const FORMAT_YY = 'YY';
const FORMAT_MMMM = 'MMMM';
const FORMAT_MMM = 'MMM';
const FORMAT_MM = 'MM';
const FORMAT_M = 'M';
const FORMAT_DDDD = 'DDDD';
const FORMAT_DDD = 'DDD';
const FORMAT_DD = 'DD';
const FORMAT_D = 'D';
const FORMAT_HH = 'HH';
const FORMAT_H = 'H';
const FORMAT_hh = 'hh';
const FORMAT_h = 'h';
const FORMAT_mm = 'mm';
const FORMAT_m = 'm';
const FORMAT_ss = 'ss';
const FORMAT_s = 's';
const FORMAT_A = 'A';
const FORMAT_a = 'a';
const FORMAT_KEYS = [
  { f: FORMAT_YYYY, k: 'year' },
  { f: FORMAT_MMMM, k: 'month' },
  { f: FORMAT_DDDD, k: 'day' },
  { f: FORMAT_MMM, k: 'month' },
  { f: FORMAT_DDD, k: 'day' },
  { f: FORMAT_YY, k: 'year' },
  { f: FORMAT_MM, k: 'month' },
  { f: FORMAT_DD, k: 'day' },
  { f: FORMAT_HH, k: 'hour' },
  { f: FORMAT_hh, k: 'hour' },
  { f: FORMAT_mm, k: 'minute' },
  { f: FORMAT_ss, k: 'second' },
  { f: FORMAT_M, k: 'month' },
  { f: FORMAT_D, k: 'day' },
  { f: FORMAT_H, k: 'hour' },
  { f: FORMAT_h, k: 'hour' },
  { f: FORMAT_m, k: 'minute' },
  { f: FORMAT_s, k: 'second' },
  { f: FORMAT_A, k: 'ampm' },
  { f: FORMAT_a, k: 'ampm' },
];
const DAY_NAMES = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const DAY_SHORT_NAMES = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
];
const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const MONTH_SHORT_NAMES = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const VALID_AMPM_PREFIX = [
  FORMAT_hh, FORMAT_h, FORMAT_mm, FORMAT_m, FORMAT_ss, FORMAT_s
];

const datetimeIosCss = ":root{--med-color-brand-primary-darkest:#074953;--med-color-brand-primary-darkest-rgb:7, 73, 83;--med-color-brand-primary-dark:#137585;--med-color-brand-primary-dark-rgb:19, 117, 133;--med-color-brand-primary-medium:#3aa8b9;--med-color-brand-primary-medium-rgb:58, 168, 185;--med-color-brand-primary-light:#73d6e5;--med-color-brand-primary-light-rgb:115, 214, 229;--med-color-brand-primary-lightest:#b0ecf5;--med-color-brand-primary-lightest-rgb:176, 236, 245;--med-color-brand-primary-gradient:linear-gradient(to right, #3aa8b9, #137585);--med-color-aula-darkest:#075344;--med-color-aula-darkest-rgb:7, 83, 68;--med-color-aula-dark:#13856e;--med-color-aula-dark-rgb:19, 133, 110;--med-color-aula-medium:#3ab89f;--med-color-aula-medium-rgb:58, 184, 159;--med-color-aula-light:#73e5cf;--med-color-aula-light-rgb:115, 229, 207;--med-color-aula-lightest:#b0f5e7;--med-color-aula-lightest-rgb:176, 245, 231;--med-color-aula-gradient:linear-gradient(to right, #3ab89f, #13856e);--med-color-material-darkest:#552607;--med-color-material-darkest-rgb:85, 38, 7;--med-color-material-dark:#854013;--med-color-material-dark-rgb:133, 64, 19;--med-color-material-medium:#b86d3b;--med-color-material-medium-rgb:184, 109, 59;--med-color-material-light:#e5a173;--med-color-material-light-rgb:229, 161, 115;--med-color-material-lightest:#f5ccb0;--med-color-material-lightest-rgb:245, 204, 176;--med-color-material-gradient:linear-gradient(to right, #b86d3b, #854013);--med-color-questoes-darkest:#073953;--med-color-questoes-darkest-rgb:7, 57, 83;--med-color-questoes-dark:#135f85;--med-color-questoes-dark-rgb:19, 95, 133;--med-color-questoes-medium:#3a8eb8;--med-color-questoes-medium-rgb:58, 142, 184;--med-color-questoes-light:#73bfe5;--med-color-questoes-light-rgb:115, 191, 229;--med-color-questoes-lightest:#b0def5;--med-color-questoes-lightest-rgb:176, 222, 245;--med-color-questoes-gradient:linear-gradient(to right, #3a8eb8, #135f85);--med-color-revalida-darkest:#53071e;--med-color-revalida-darkest-rgb:83, 7, 30;--med-color-revalida-dark:#851335;--med-color-revalida-dark-rgb:133, 19, 53;--med-color-revalida-medium:#b83a60;--med-color-revalida-medium-rgb:184, 58, 96;--med-color-revalida-light:#e57395;--med-color-revalida-light-rgb:229, 115, 149;--med-color-revalida-lightest:#f5b0c5;--med-color-revalida-lightest-rgb:245, 176, 197;--med-color-revalida-gradient:linear-gradient(to right, #b83a60, #851335);--med-color-provaschecklist-darkest:#2b0755;--med-color-provaschecklist-darkest-rgb:43, 7, 85;--med-color-provaschecklist-dark:#481385;--med-color-provaschecklist-dark-rgb:72, 19, 133;--med-color-provaschecklist-medium:#753bb8;--med-color-provaschecklist-medium-rgb:117, 59, 184;--med-color-provaschecklist-light:#a873e5;--med-color-provaschecklist-light-rgb:168, 115, 229;--med-color-provaschecklist-lightest:#d1b2f5;--med-color-provaschecklist-lightest-rgb:209, 178, 245;--med-color-provaschecklist-gradient:linear-gradient(to right, #753bb8, #481385);--med-color-neutral-dark-prime:#141414;--med-color-neutral-dark-prime-rgb:20, 20, 20;--med-color-neutral-dark-40:#292929;--med-color-neutral-dark-40-rgb:41, 41, 41;--med-color-neutral-dark-30:#474747;--med-color-neutral-dark-30-rgb:71, 71, 71;--med-color-neutral-dark-20:#5c5c5c;--med-color-neutral-dark-20-rgb:92, 92, 92;--med-color-neutral-dark-10:#7a7a7a;--med-color-neutral-dark-10-rgb:122, 122, 122;--med-color-neutral-dark-gradient:linear-gradient(to right, #fafafa, #141414);--med-color-neutral-light-prime:#fafafa;--med-color-neutral-light-prime-rgb:250, 250, 250;--med-color-neutral-light-40:#ebebeb;--med-color-neutral-light-40-rgb:235, 235, 235;--med-color-neutral-light-30:#d6d6d6;--med-color-neutral-light-30-rgb:214, 214, 214;--med-color-neutral-light-20:#c2c2c2;--med-color-neutral-light-20-rgb:194, 194, 194;--med-color-neutral-light-10:#adadad;--med-color-neutral-light-10-rgb:173, 173, 173;--med-color-neutral-light-gradient:linear-gradient(to right, #141414, #fafafa);--med-color-feedback-warning-darkest:#504606;--med-color-feedback-warning-darkest-rgb:80, 70, 6;--med-color-feedback-warning-dark:#857513;--med-color-feedback-warning-dark-rgb:133, 117, 19;--med-color-feedback-warning-medium:#b8a73b;--med-color-feedback-warning-medium-rgb:184, 167, 59;--med-color-feedback-warning-light:#e5d673;--med-color-feedback-warning-light-rgb:229, 214, 115;--med-color-feedback-warning-lightest:#f5ecb0;--med-color-feedback-warning-lightest-rgb:245, 236, 176;--med-color-feedback-warning-gradient:linear-gradient(to right, #b8a73b, #857513);--med-color-feedback-error-darkest:#520c07;--med-color-feedback-error-darkest-rgb:82, 12, 7;--med-color-feedback-error-dark:#851a13;--med-color-feedback-error-dark-rgb:133, 26, 19;--med-color-feedback-error-medium:#b8433b;--med-color-feedback-error-medium-rgb:184, 67, 59;--med-color-feedback-error-light:#e57a73;--med-color-feedback-error-light-rgb:229, 122, 115;--med-color-feedback-error-lightest:#f5b5b0;--med-color-feedback-error-lightest-rgb:245, 181, 176;--med-color-feedback-error-gradient:linear-gradient(to right, #b8433b, #851a13);--med-color-feedback-success-darkest:#065010;--med-color-feedback-success-darkest-rgb:6, 80, 16;--med-color-feedback-success-dark:#138522;--med-color-feedback-success-dark-rgb:19, 133, 34;--med-color-feedback-success-medium:#3bb84b;--med-color-feedback-success-medium-rgb:59, 184, 75;--med-color-feedback-success-light:#73e582;--med-color-feedback-success-light-rgb:115, 229, 130;--med-color-feedback-success-lightest:#b0f5b9;--med-color-feedback-success-lightest-rgb:176, 245, 185;--med-color-feedback-success-gradient:linear-gradient(to right, #3bb84b, #138522)}:root{--med-font-family-brand:fsemeric;--med-font-family-base:fsemeric;--med-font-size-nano:10px;--med-font-size-xxxs:12px;--med-font-size-xxs:14px;--med-font-size-xs:16px;--med-font-size-sm:20px;--med-font-size-md:24px;--med-font-size-lg:32px;--med-font-size-xl:40px;--med-font-size-xxl:48px;--med-font-size-xxxl:64px;--med-font-size-huge:96px;--med-font-weight-thin:250;--med-font-weight-light:300;--med-font-weight-regular:400;--med-font-weight-medium:500;--med-font-weight-semibold:600;--med-font-weight-bold:700;--med-font-weight-extrabold:800;--med-font-weight-heavy:900;--med-line-height-compressed:100%;--med-line-height-double:100%}:root{--med-spacing-inset-nano:4px;--med-spacing-inset-xs:8px;--med-spacing-inset-sm:16px;--med-spacing-inset-base:24px;--med-spacing-inset-md:32px;--med-spacing-inset-md:32px;--med-spacing-inset-md:32px;--med-spacing-inset-xxl:64px;--med-spacing-squish-nano:4px 8px;--med-spacing-squish-xs:8px 16px;--med-spacing-squish-sm:8px 24px;--med-spacing-squish-base:8px 32px;--med-spacing-squish-md:16px 24px;--med-spacing-squish-lg:16px 32px;--med-spacing-squish-xl:24px 32px;--med-spacing-squish-xxl:32px 40px;--med-spacing-stretch-nano:8px 4px;--med-spacing-stretch-xs:16px 8px;--med-spacing-stretch-sm:24px 8px;--med-spacing-stretch-base:32px 8px;--med-spacing-stretch-md:24px 16px;--med-spacing-stretch-lg:32px 16px;--med-spacing-stretch-xl:32px 24px;--med-spacing-stretch-xxl:40px 32px;--med-spacing-inline-quark:2px;--med-spacing-inline-nano:4px;--med-spacing-inline-xxxs:8px;--med-spacing-inline-base:16px;--med-spacing-inline-xxs:24px;--med-spacing-inline-xs:32px;--med-spacing-inline-sm:40px;--med-spacing-inline-md:48px;--med-spacing-inline-lg:56px;--med-spacing-inline-xl:64px;--med-spacing-inline-xxl:72px;--med-spacing-inline-xxxl:80px;--med-spacing-inline-huge:120px;--med-spacing-inline-ultra:160px;--med-spacing-stack-quark:2px;--med-spacing-stack-nano:4px;--med-spacing-stack-xxxs:8px;--med-spacing-stack-base:16px;--med-spacing-stack-xxs:24px;--med-spacing-stack-xs:32px;--med-spacing-stack-sm:40px;--med-spacing-stack-md:48px;--med-spacing-stack-lg:56px;--med-spacing-stack-xl:64px;--med-spacing-stack-xxl:72px;--med-spacing-stack-xxxl:80px;--med-spacing-stack-huge:120px;--med-spacing-stack-ultra:160px}:root{--med-border-radius-none:0;--med-border-radius-quark:2px;--med-border-radius-nano:4px;--med-border-radius-sm:8px;--med-border-radius-md:16px;--med-border-radius-lg:24px;--med-border-radius-pill:31.25em;--med-border-radius-full:50%;--med-border-radius-speech-left-down:8px 8px 8px 0;--med-border-radius-speech-right-down:8px 8px 0 8px;--med-border-radius-speech-right-up:8px 0 8px 0px;--med-border-radius-speech-left-up:0 8px 8px 0px;--med-border-radius-table-down-sm:0 0 8px 8px;--med-border-radius-table-up-sm:8px 8px 0 0;--med-border-radius-table-down-md:16px 16px 0 0;--med-border-radius-table-up-md:0 0 16px 16px;--med-border-width-none:0;--med-border-width-quark:0.25px;--med-border-width-nano:0.5px;--med-border-width-hairline:1px;--med-border-width-thin:2px;--med-border-width-thick:4px;--med-border-width-bold:8px;--med-border-width-heavy:16px;--med-opacity-level-semiopaque:0.8;--med-opacity-level-intense:0.64;--med-opacity-level-half:0.5;--med-opacity-level-medium:0.32;--med-opacity-level-light:0.16;--med-opacity-level-semitransparent:0.08;--med-shadow-level-0:none;--med-shadow-level-1:0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 3px rgba(0, 0, 0, 0.2);--med-shadow-level-2:0 2px 4px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-3:0 3px 3px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-4:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-5:0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-6:0 8px 10px rgba(0, 0, 0, 0.14), 0 3px 14px rgba(0, 0, 0, 0.12), 0 4px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-7:0 9px 12px rgba(0, 0, 0, 0.14), 0 3px 16px rgba(0, 0, 0, 0.12), 0 5px 6px rgba(0, 0, 0, 0.2);--med-shadow-level-8:0 12px 17px rgba(0, 0, 0, 0.14), 0 5px 22px rgba(0, 0, 0, 0.12), 0 7px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-9:0 16px 24px rgba(0, 0, 0, 0.14), 0 6px 30px rgba(0, 0, 0, 0.12), 0 8px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-10:0 24px 38px rgba(0, 0, 0, 0.14), 0 9px 46px rgba(0, 0, 0, 0.12), 0 11px 15px rgba(0, 0, 0, 0.2)}:host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;min-width:16px;min-height:1.2em;font-family:var(--ion-font-family, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static}:host(.datetime-placeholder){color:var(--placeholder-color)}:host(.datetime-disabled){opacity:0.3;pointer-events:none}:host(.datetime-readonly){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.datetime-text{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-ms-flex:1;flex:1;min-height:inherit;direction:ltr;overflow:inherit}[dir=rtl] .datetime-text,:host-context([dir=rtl]) .datetime-text{direction:rtl}:host{--placeholder-color:var(--ion-color-step-400, #999999);--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}";

const datetimeMdCss = ":root{--med-color-brand-primary-darkest:#074953;--med-color-brand-primary-darkest-rgb:7, 73, 83;--med-color-brand-primary-dark:#137585;--med-color-brand-primary-dark-rgb:19, 117, 133;--med-color-brand-primary-medium:#3aa8b9;--med-color-brand-primary-medium-rgb:58, 168, 185;--med-color-brand-primary-light:#73d6e5;--med-color-brand-primary-light-rgb:115, 214, 229;--med-color-brand-primary-lightest:#b0ecf5;--med-color-brand-primary-lightest-rgb:176, 236, 245;--med-color-brand-primary-gradient:linear-gradient(to right, #3aa8b9, #137585);--med-color-aula-darkest:#075344;--med-color-aula-darkest-rgb:7, 83, 68;--med-color-aula-dark:#13856e;--med-color-aula-dark-rgb:19, 133, 110;--med-color-aula-medium:#3ab89f;--med-color-aula-medium-rgb:58, 184, 159;--med-color-aula-light:#73e5cf;--med-color-aula-light-rgb:115, 229, 207;--med-color-aula-lightest:#b0f5e7;--med-color-aula-lightest-rgb:176, 245, 231;--med-color-aula-gradient:linear-gradient(to right, #3ab89f, #13856e);--med-color-material-darkest:#552607;--med-color-material-darkest-rgb:85, 38, 7;--med-color-material-dark:#854013;--med-color-material-dark-rgb:133, 64, 19;--med-color-material-medium:#b86d3b;--med-color-material-medium-rgb:184, 109, 59;--med-color-material-light:#e5a173;--med-color-material-light-rgb:229, 161, 115;--med-color-material-lightest:#f5ccb0;--med-color-material-lightest-rgb:245, 204, 176;--med-color-material-gradient:linear-gradient(to right, #b86d3b, #854013);--med-color-questoes-darkest:#073953;--med-color-questoes-darkest-rgb:7, 57, 83;--med-color-questoes-dark:#135f85;--med-color-questoes-dark-rgb:19, 95, 133;--med-color-questoes-medium:#3a8eb8;--med-color-questoes-medium-rgb:58, 142, 184;--med-color-questoes-light:#73bfe5;--med-color-questoes-light-rgb:115, 191, 229;--med-color-questoes-lightest:#b0def5;--med-color-questoes-lightest-rgb:176, 222, 245;--med-color-questoes-gradient:linear-gradient(to right, #3a8eb8, #135f85);--med-color-revalida-darkest:#53071e;--med-color-revalida-darkest-rgb:83, 7, 30;--med-color-revalida-dark:#851335;--med-color-revalida-dark-rgb:133, 19, 53;--med-color-revalida-medium:#b83a60;--med-color-revalida-medium-rgb:184, 58, 96;--med-color-revalida-light:#e57395;--med-color-revalida-light-rgb:229, 115, 149;--med-color-revalida-lightest:#f5b0c5;--med-color-revalida-lightest-rgb:245, 176, 197;--med-color-revalida-gradient:linear-gradient(to right, #b83a60, #851335);--med-color-provaschecklist-darkest:#2b0755;--med-color-provaschecklist-darkest-rgb:43, 7, 85;--med-color-provaschecklist-dark:#481385;--med-color-provaschecklist-dark-rgb:72, 19, 133;--med-color-provaschecklist-medium:#753bb8;--med-color-provaschecklist-medium-rgb:117, 59, 184;--med-color-provaschecklist-light:#a873e5;--med-color-provaschecklist-light-rgb:168, 115, 229;--med-color-provaschecklist-lightest:#d1b2f5;--med-color-provaschecklist-lightest-rgb:209, 178, 245;--med-color-provaschecklist-gradient:linear-gradient(to right, #753bb8, #481385);--med-color-neutral-dark-prime:#141414;--med-color-neutral-dark-prime-rgb:20, 20, 20;--med-color-neutral-dark-40:#292929;--med-color-neutral-dark-40-rgb:41, 41, 41;--med-color-neutral-dark-30:#474747;--med-color-neutral-dark-30-rgb:71, 71, 71;--med-color-neutral-dark-20:#5c5c5c;--med-color-neutral-dark-20-rgb:92, 92, 92;--med-color-neutral-dark-10:#7a7a7a;--med-color-neutral-dark-10-rgb:122, 122, 122;--med-color-neutral-dark-gradient:linear-gradient(to right, #fafafa, #141414);--med-color-neutral-light-prime:#fafafa;--med-color-neutral-light-prime-rgb:250, 250, 250;--med-color-neutral-light-40:#ebebeb;--med-color-neutral-light-40-rgb:235, 235, 235;--med-color-neutral-light-30:#d6d6d6;--med-color-neutral-light-30-rgb:214, 214, 214;--med-color-neutral-light-20:#c2c2c2;--med-color-neutral-light-20-rgb:194, 194, 194;--med-color-neutral-light-10:#adadad;--med-color-neutral-light-10-rgb:173, 173, 173;--med-color-neutral-light-gradient:linear-gradient(to right, #141414, #fafafa);--med-color-feedback-warning-darkest:#504606;--med-color-feedback-warning-darkest-rgb:80, 70, 6;--med-color-feedback-warning-dark:#857513;--med-color-feedback-warning-dark-rgb:133, 117, 19;--med-color-feedback-warning-medium:#b8a73b;--med-color-feedback-warning-medium-rgb:184, 167, 59;--med-color-feedback-warning-light:#e5d673;--med-color-feedback-warning-light-rgb:229, 214, 115;--med-color-feedback-warning-lightest:#f5ecb0;--med-color-feedback-warning-lightest-rgb:245, 236, 176;--med-color-feedback-warning-gradient:linear-gradient(to right, #b8a73b, #857513);--med-color-feedback-error-darkest:#520c07;--med-color-feedback-error-darkest-rgb:82, 12, 7;--med-color-feedback-error-dark:#851a13;--med-color-feedback-error-dark-rgb:133, 26, 19;--med-color-feedback-error-medium:#b8433b;--med-color-feedback-error-medium-rgb:184, 67, 59;--med-color-feedback-error-light:#e57a73;--med-color-feedback-error-light-rgb:229, 122, 115;--med-color-feedback-error-lightest:#f5b5b0;--med-color-feedback-error-lightest-rgb:245, 181, 176;--med-color-feedback-error-gradient:linear-gradient(to right, #b8433b, #851a13);--med-color-feedback-success-darkest:#065010;--med-color-feedback-success-darkest-rgb:6, 80, 16;--med-color-feedback-success-dark:#138522;--med-color-feedback-success-dark-rgb:19, 133, 34;--med-color-feedback-success-medium:#3bb84b;--med-color-feedback-success-medium-rgb:59, 184, 75;--med-color-feedback-success-light:#73e582;--med-color-feedback-success-light-rgb:115, 229, 130;--med-color-feedback-success-lightest:#b0f5b9;--med-color-feedback-success-lightest-rgb:176, 245, 185;--med-color-feedback-success-gradient:linear-gradient(to right, #3bb84b, #138522)}:root{--med-font-family-brand:fsemeric;--med-font-family-base:fsemeric;--med-font-size-nano:10px;--med-font-size-xxxs:12px;--med-font-size-xxs:14px;--med-font-size-xs:16px;--med-font-size-sm:20px;--med-font-size-md:24px;--med-font-size-lg:32px;--med-font-size-xl:40px;--med-font-size-xxl:48px;--med-font-size-xxxl:64px;--med-font-size-huge:96px;--med-font-weight-thin:250;--med-font-weight-light:300;--med-font-weight-regular:400;--med-font-weight-medium:500;--med-font-weight-semibold:600;--med-font-weight-bold:700;--med-font-weight-extrabold:800;--med-font-weight-heavy:900;--med-line-height-compressed:100%;--med-line-height-double:100%}:root{--med-spacing-inset-nano:4px;--med-spacing-inset-xs:8px;--med-spacing-inset-sm:16px;--med-spacing-inset-base:24px;--med-spacing-inset-md:32px;--med-spacing-inset-md:32px;--med-spacing-inset-md:32px;--med-spacing-inset-xxl:64px;--med-spacing-squish-nano:4px 8px;--med-spacing-squish-xs:8px 16px;--med-spacing-squish-sm:8px 24px;--med-spacing-squish-base:8px 32px;--med-spacing-squish-md:16px 24px;--med-spacing-squish-lg:16px 32px;--med-spacing-squish-xl:24px 32px;--med-spacing-squish-xxl:32px 40px;--med-spacing-stretch-nano:8px 4px;--med-spacing-stretch-xs:16px 8px;--med-spacing-stretch-sm:24px 8px;--med-spacing-stretch-base:32px 8px;--med-spacing-stretch-md:24px 16px;--med-spacing-stretch-lg:32px 16px;--med-spacing-stretch-xl:32px 24px;--med-spacing-stretch-xxl:40px 32px;--med-spacing-inline-quark:2px;--med-spacing-inline-nano:4px;--med-spacing-inline-xxxs:8px;--med-spacing-inline-base:16px;--med-spacing-inline-xxs:24px;--med-spacing-inline-xs:32px;--med-spacing-inline-sm:40px;--med-spacing-inline-md:48px;--med-spacing-inline-lg:56px;--med-spacing-inline-xl:64px;--med-spacing-inline-xxl:72px;--med-spacing-inline-xxxl:80px;--med-spacing-inline-huge:120px;--med-spacing-inline-ultra:160px;--med-spacing-stack-quark:2px;--med-spacing-stack-nano:4px;--med-spacing-stack-xxxs:8px;--med-spacing-stack-base:16px;--med-spacing-stack-xxs:24px;--med-spacing-stack-xs:32px;--med-spacing-stack-sm:40px;--med-spacing-stack-md:48px;--med-spacing-stack-lg:56px;--med-spacing-stack-xl:64px;--med-spacing-stack-xxl:72px;--med-spacing-stack-xxxl:80px;--med-spacing-stack-huge:120px;--med-spacing-stack-ultra:160px}:root{--med-border-radius-none:0;--med-border-radius-quark:2px;--med-border-radius-nano:4px;--med-border-radius-sm:8px;--med-border-radius-md:16px;--med-border-radius-lg:24px;--med-border-radius-pill:31.25em;--med-border-radius-full:50%;--med-border-radius-speech-left-down:8px 8px 8px 0;--med-border-radius-speech-right-down:8px 8px 0 8px;--med-border-radius-speech-right-up:8px 0 8px 0px;--med-border-radius-speech-left-up:0 8px 8px 0px;--med-border-radius-table-down-sm:0 0 8px 8px;--med-border-radius-table-up-sm:8px 8px 0 0;--med-border-radius-table-down-md:16px 16px 0 0;--med-border-radius-table-up-md:0 0 16px 16px;--med-border-width-none:0;--med-border-width-quark:0.25px;--med-border-width-nano:0.5px;--med-border-width-hairline:1px;--med-border-width-thin:2px;--med-border-width-thick:4px;--med-border-width-bold:8px;--med-border-width-heavy:16px;--med-opacity-level-semiopaque:0.8;--med-opacity-level-intense:0.64;--med-opacity-level-half:0.5;--med-opacity-level-medium:0.32;--med-opacity-level-light:0.16;--med-opacity-level-semitransparent:0.08;--med-shadow-level-0:none;--med-shadow-level-1:0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 3px rgba(0, 0, 0, 0.2);--med-shadow-level-2:0 2px 4px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-3:0 3px 3px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-4:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-5:0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-6:0 8px 10px rgba(0, 0, 0, 0.14), 0 3px 14px rgba(0, 0, 0, 0.12), 0 4px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-7:0 9px 12px rgba(0, 0, 0, 0.14), 0 3px 16px rgba(0, 0, 0, 0.12), 0 5px 6px rgba(0, 0, 0, 0.2);--med-shadow-level-8:0 12px 17px rgba(0, 0, 0, 0.14), 0 5px 22px rgba(0, 0, 0, 0.12), 0 7px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-9:0 16px 24px rgba(0, 0, 0, 0.14), 0 6px 30px rgba(0, 0, 0, 0.12), 0 8px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-10:0 24px 38px rgba(0, 0, 0, 0.14), 0 9px 46px rgba(0, 0, 0, 0.12), 0 11px 15px rgba(0, 0, 0, 0.2)}:host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;min-width:16px;min-height:1.2em;font-family:var(--ion-font-family, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static}:host(.datetime-placeholder){color:var(--placeholder-color)}:host(.datetime-disabled){opacity:0.3;pointer-events:none}:host(.datetime-readonly){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.datetime-text{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-ms-flex:1;flex:1;min-height:inherit;direction:ltr;overflow:inherit}[dir=rtl] .datetime-text,:host-context([dir=rtl]) .datetime-text{direction:rtl}:host{--placeholder-color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:16px}";

const Datetime = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.ionCancel = createEvent(this, "ionCancel", 7);
    this.ionChange = createEvent(this, "ionChange", 7);
    this.ionFocus = createEvent(this, "ionFocus", 7);
    this.ionBlur = createEvent(this, "ionBlur", 7);
    this.ionStyle = createEvent(this, "ionStyle", 7);
    this.inputId = `ion-dt-${datetimeIds++}`;
    this.locale = {};
    this.datetimeMin = {};
    this.datetimeMax = {};
    this.datetimeValue = {};
    this.isExpanded = false;
    /**
     * The name of the control, which is submitted with the form data.
     */
    this.name = this.inputId;
    /**
     * If `true`, the user cannot interact with the datetime.
     */
    this.disabled = false;
    /**
     * If `true`, the datetime appears normal but is not interactive.
     */
    this.readonly = false;
    /**
     * The display format of the date and time as text that shows
     * within the item. When the `pickerFormat` input is not used, then the
     * `displayFormat` is used for both display the formatted text, and determining
     * the datetime picker's columns. See the `pickerFormat` input description for
     * more info. Defaults to `MMM D, YYYY`.
     */
    this.displayFormat = 'MMM D, YYYY';
    /**
     * The text to display on the picker's cancel button.
     */
    this.cancelText = 'Cancel';
    /**
     * The text to display on the picker's "Done" button.
     */
    this.doneText = 'Done';
    this.onClick = () => {
      this.setFocus();
      this.open();
    };
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
  }
  disabledChanged() {
    this.emitStyle();
  }
  /**
   * Update the datetime value when the value changes
   */
  valueChanged() {
    this.updateDatetimeValue(this.value);
    this.emitStyle();
    this.ionChange.emit({
      value: this.value
    });
  }
  componentWillLoad() {
    // first see if locale names were provided in the inputs
    // then check to see if they're in the config
    // if neither were provided then it will use default English names
    this.locale = {
      // this.locale[type] = convertToArrayOfStrings((this[type] ? this[type] : this.config.get(type), type);
      monthNames: convertToArrayOfStrings(this.monthNames, 'monthNames'),
      monthShortNames: convertToArrayOfStrings(this.monthShortNames, 'monthShortNames'),
      dayNames: convertToArrayOfStrings(this.dayNames, 'dayNames'),
      dayShortNames: convertToArrayOfStrings(this.dayShortNames, 'dayShortNames')
    };
    this.updateDatetimeValue(this.value);
    this.emitStyle();
  }
  /**
   * Opens the datetime overlay.
   */
  async open() {
    if (this.disabled || this.isExpanded) {
      return;
    }
    const pickerOptions = this.generatePickerOptions();
    const picker = await pickerController.create(pickerOptions);
    this.isExpanded = true;
    picker.onDidDismiss().then(() => {
      this.isExpanded = false;
      this.setFocus();
    });
    addEventListener(picker, 'ionPickerColChange', async (event) => {
      const data = event.detail;
      const colSelectedIndex = data.selectedIndex;
      const colOptions = data.options;
      const changeData = {};
      changeData[data.name] = {
        value: colOptions[colSelectedIndex].value
      };
      if (data.name !== 'ampm' && this.datetimeValue.ampm !== undefined) {
        changeData['ampm'] = {
          value: this.datetimeValue.ampm
        };
      }
      this.updateDatetimeValue(changeData);
      picker.columns = this.generateColumns();
    });
    await picker.present();
  }
  emitStyle() {
    this.ionStyle.emit({
      'interactive': true,
      'datetime': true,
      'has-placeholder': this.placeholder != null,
      'has-value': this.hasValue(),
      'interactive-disabled': this.disabled,
    });
  }
  updateDatetimeValue(value) {
    updateDate(this.datetimeValue, value, this.displayTimezone);
  }
  generatePickerOptions() {
    const mode = getIonMode(this);
    this.locale = {
      monthNames: convertToArrayOfStrings(this.monthNames, 'monthNames'),
      monthShortNames: convertToArrayOfStrings(this.monthShortNames, 'monthShortNames'),
      dayNames: convertToArrayOfStrings(this.dayNames, 'dayNames'),
      dayShortNames: convertToArrayOfStrings(this.dayShortNames, 'dayShortNames')
    };
    const pickerOptions = Object.assign(Object.assign({ mode }, this.pickerOptions), { columns: this.generateColumns() });
    // If the user has not passed in picker buttons,
    // add a cancel and ok button to the picker
    const buttons = pickerOptions.buttons;
    if (!buttons || buttons.length === 0) {
      pickerOptions.buttons = [
        {
          text: this.cancelText,
          role: 'cancel',
          handler: () => {
            this.updateDatetimeValue(this.value);
            this.ionCancel.emit();
          }
        },
        {
          text: this.doneText,
          handler: (data) => {
            this.updateDatetimeValue(data);
            /**
             * Prevent convertDataToISO from doing any
             * kind of transformation based on timezone
             * This cancels out any change it attempts to make
             *
             * Important: Take the timezone offset based on
             * the date that is currently selected, otherwise
             * there can be 1 hr difference when dealing w/ DST
             */
            const date = new Date(convertDataToISO(this.datetimeValue));
            // If a custom display timezone is provided, use that tzOffset value instead
            this.datetimeValue.tzOffset = (this.displayTimezone !== undefined && this.displayTimezone.length > 0)
              ? ((getTimezoneOffset(date, this.displayTimezone)) / 1000 / 60) * -1
              : date.getTimezoneOffset() * -1;
            this.value = convertDataToISO(this.datetimeValue);
          }
        }
      ];
    }
    return pickerOptions;
  }
  generateColumns() {
    // if a picker format wasn't provided, then fallback
    // to use the display format
    let template = this.pickerFormat || this.displayFormat || DEFAULT_FORMAT;
    if (template.length === 0) {
      return [];
    }
    // make sure we've got up to date sizing information
    this.calcMinMax();
    // does not support selecting by day name
    // automatically remove any day name formats
    template = template.replace('DDDD', '{~}').replace('DDD', '{~}');
    if (template.indexOf('D') === -1) {
      // there is not a day in the template
      // replace the day name with a numeric one if it exists
      template = template.replace('{~}', 'D');
    }
    // make sure no day name replacer is left in the string
    template = template.replace(/{~}/g, '');
    // parse apart the given template into an array of "formats"
    const columns = parseTemplate(template).map((format) => {
      // loop through each format in the template
      // create a new picker column to build up with data
      const key = convertFormatToKey(format);
      let values;
      // check if they have exact values to use for this date part
      // otherwise use the default date part values
      const self = this;
      values = self[key + 'Values']
        ? convertToArrayOfNumbers(self[key + 'Values'], key)
        : dateValueRange(format, this.datetimeMin, this.datetimeMax);
      const colOptions = values.map(val => {
        return {
          value: val,
          text: renderTextFormat(format, val, undefined, this.locale),
        };
      });
      // cool, we've loaded up the columns with options
      // preselect the option for this column
      const optValue = getDateValue(this.datetimeValue, format);
      const selectedIndex = colOptions.findIndex(opt => opt.value === optValue);
      return {
        name: key,
        selectedIndex: selectedIndex >= 0 ? selectedIndex : 0,
        options: colOptions
      };
    });
    // Normalize min/max
    const min = this.datetimeMin;
    const max = this.datetimeMax;
    ['month', 'day', 'hour', 'minute']
      .filter(name => !columns.find(column => column.name === name))
      .forEach(name => {
      min[name] = 0;
      max[name] = 0;
    });
    return this.validateColumns(divyColumns(columns));
  }
  validateColumns(columns) {
    const today = new Date();
    const minCompareVal = dateDataSortValue(this.datetimeMin);
    const maxCompareVal = dateDataSortValue(this.datetimeMax);
    const yearCol = columns.find(c => c.name === 'year');
    let selectedYear = today.getFullYear();
    if (yearCol) {
      // default to the first value if the current year doesn't exist in the options
      if (!yearCol.options.find(col => col.value === today.getFullYear())) {
        selectedYear = yearCol.options[0].value;
      }
      const selectedIndex = yearCol.selectedIndex;
      if (selectedIndex !== undefined) {
        const yearOpt = yearCol.options[selectedIndex];
        if (yearOpt) {
          // they have a selected year value
          selectedYear = yearOpt.value;
        }
      }
    }
    const selectedMonth = this.validateColumn(columns, 'month', 1, minCompareVal, maxCompareVal, [selectedYear, 0, 0, 0, 0], [selectedYear, 12, 31, 23, 59]);
    const numDaysInMonth = daysInMonth(selectedMonth, selectedYear);
    const selectedDay = this.validateColumn(columns, 'day', 2, minCompareVal, maxCompareVal, [selectedYear, selectedMonth, 0, 0, 0], [selectedYear, selectedMonth, numDaysInMonth, 23, 59]);
    const selectedHour = this.validateColumn(columns, 'hour', 3, minCompareVal, maxCompareVal, [selectedYear, selectedMonth, selectedDay, 0, 0], [selectedYear, selectedMonth, selectedDay, 23, 59]);
    this.validateColumn(columns, 'minute', 4, minCompareVal, maxCompareVal, [selectedYear, selectedMonth, selectedDay, selectedHour, 0], [selectedYear, selectedMonth, selectedDay, selectedHour, 59]);
    return columns;
  }
  calcMinMax() {
    const todaysYear = new Date().getFullYear();
    if (this.yearValues !== undefined) {
      const years = convertToArrayOfNumbers(this.yearValues, 'year');
      if (this.min === undefined) {
        this.min = Math.min(...years).toString();
      }
      if (this.max === undefined) {
        this.max = Math.max(...years).toString();
      }
    }
    else {
      if (this.min === undefined) {
        this.min = (todaysYear - 100).toString();
      }
      if (this.max === undefined) {
        this.max = todaysYear.toString();
      }
    }
    const min = this.datetimeMin = parseDate(this.min);
    const max = this.datetimeMax = parseDate(this.max);
    min.year = min.year || todaysYear;
    max.year = max.year || todaysYear;
    min.month = min.month || 1;
    max.month = max.month || 12;
    min.day = min.day || 1;
    max.day = max.day || 31;
    min.hour = min.hour || 0;
    max.hour = max.hour === undefined ? 23 : max.hour;
    min.minute = min.minute || 0;
    max.minute = max.minute === undefined ? 59 : max.minute;
    min.second = min.second || 0;
    max.second = max.second === undefined ? 59 : max.second;
    // Ensure min/max constraints
    if (min.year > max.year) {
      console.error('min.year > max.year');
      min.year = max.year - 100;
    }
    if (min.year === max.year) {
      if (min.month > max.month) {
        console.error('min.month > max.month');
        min.month = 1;
      }
      else if (min.month === max.month && min.day > max.day) {
        console.error('min.day > max.day');
        min.day = 1;
      }
    }
  }
  validateColumn(columns, name, index, min, max, lowerBounds, upperBounds) {
    const column = columns.find(c => c.name === name);
    if (!column) {
      return 0;
    }
    const lb = lowerBounds.slice();
    const ub = upperBounds.slice();
    const options = column.options;
    let indexMin = options.length - 1;
    let indexMax = 0;
    for (let i = 0; i < options.length; i++) {
      const opts = options[i];
      const value = opts.value;
      lb[index] = opts.value;
      ub[index] = opts.value;
      const disabled = opts.disabled = (value < lowerBounds[index] ||
        value > upperBounds[index] ||
        dateSortValue(ub[0], ub[1], ub[2], ub[3], ub[4]) < min ||
        dateSortValue(lb[0], lb[1], lb[2], lb[3], lb[4]) > max);
      if (!disabled) {
        indexMin = Math.min(indexMin, i);
        indexMax = Math.max(indexMax, i);
      }
    }
    const selectedIndex = column.selectedIndex = clamp(indexMin, column.selectedIndex, indexMax);
    const opt = column.options[selectedIndex];
    if (opt) {
      return opt.value;
    }
    return 0;
  }
  get text() {
    // create the text of the formatted data
    const template = this.displayFormat || this.pickerFormat || DEFAULT_FORMAT;
    if (this.value === undefined ||
      this.value === null ||
      this.value.length === 0) {
      return;
    }
    return renderDatetime(template, this.datetimeValue, this.locale);
  }
  hasValue() {
    return this.text !== undefined;
  }
  setFocus() {
    if (this.buttonEl) {
      this.buttonEl.focus();
    }
  }
  render() {
    const { inputId, text, disabled, readonly, isExpanded, el, placeholder } = this;
    const mode = getIonMode(this);
    const labelId = inputId + '-lbl';
    const label = findItemLabel(el);
    const addPlaceholderClass = (text === undefined && placeholder != null) ? true : false;
    // If selected text has been passed in, use that first
    // otherwise use the placeholder
    const datetimeText = text === undefined
      ? (placeholder != null ? placeholder : '')
      : text;
    const datetimeTextPart = text === undefined
      ? (placeholder != null ? 'placeholder' : undefined)
      : 'text';
    if (label) {
      label.id = labelId;
    }
    renderHiddenInput(true, el, this.name, this.value, this.disabled);
    return (h(Host, { onClick: this.onClick, "aria-disabled": disabled ? 'true' : null, "aria-expanded": `${isExpanded}`, "aria-haspopup": "true", "aria-labelledby": labelId, class: {
        [mode]: true,
        'datetime-disabled': disabled,
        'datetime-readonly': readonly,
        'datetime-placeholder': addPlaceholderClass,
        'in-item': hostContext('ion-item', el)
      } }, h("div", { class: "datetime-text", part: datetimeTextPart }, datetimeText), h("button", { type: "button", onFocus: this.onFocus, onBlur: this.onBlur, disabled: this.disabled, ref: btnEl => this.buttonEl = btnEl })));
  }
  get el() { return this; }
  static get watchers() { return {
    "disabled": ["disabledChanged"],
    "value": ["valueChanged"]
  }; }
  static get style() { return {
    ios: datetimeIosCss,
    md: datetimeMdCss
  }; }
};
const divyColumns = (columns) => {
  const columnsWidth = [];
  let col;
  let width;
  for (let i = 0; i < columns.length; i++) {
    col = columns[i];
    columnsWidth.push(0);
    for (const option of col.options) {
      width = option.text.length;
      if (width > columnsWidth[i]) {
        columnsWidth[i] = width;
      }
    }
  }
  if (columnsWidth.length === 2) {
    width = Math.max(columnsWidth[0], columnsWidth[1]);
    columns[0].align = 'right';
    columns[1].align = 'left';
    columns[0].optionsWidth = columns[1].optionsWidth = `${width * 17}px`;
  }
  else if (columnsWidth.length === 3) {
    width = Math.max(columnsWidth[0], columnsWidth[2]);
    columns[0].align = 'right';
    columns[1].columnWidth = `${columnsWidth[1] * 17}px`;
    columns[0].optionsWidth = columns[2].optionsWidth = `${width * 17}px`;
    columns[2].align = 'left';
  }
  return columns;
};
const DEFAULT_FORMAT = 'MMM D, YYYY';
let datetimeIds = 0;

const IonDatetime = /*@__PURE__*/proxyCustomElement(Datetime, [33,"ion-datetime",{"name":[1],"disabled":[4],"readonly":[4],"min":[1025],"max":[1025],"displayFormat":[1,"display-format"],"displayTimezone":[1,"display-timezone"],"pickerFormat":[1,"picker-format"],"cancelText":[1,"cancel-text"],"doneText":[1,"done-text"],"yearValues":[8,"year-values"],"monthValues":[8,"month-values"],"dayValues":[8,"day-values"],"hourValues":[8,"hour-values"],"minuteValues":[8,"minute-values"],"monthNames":[1,"month-names"],"monthShortNames":[1,"month-short-names"],"dayNames":[1,"day-names"],"dayShortNames":[1,"day-short-names"],"pickerOptions":[16],"placeholder":[1],"value":[1025],"isExpanded":[32]}]);

export { IonDatetime };