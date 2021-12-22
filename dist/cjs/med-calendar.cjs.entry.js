'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');

const medCalendarCss = ":root{--med-font-family-brand:\"fsemeric\";--med-font-family-base:\"fsemeric\";--med-font-size-nano:10px;--med-font-size-xxxs:12px;--med-font-size-xxs:14px;--med-font-size-xs:16px;--med-font-size-sm:20px;--med-font-size-md:24px;--med-font-size-lg:32px;--med-font-size-xl:40px;--med-font-size-xxl:48px;--med-font-size-xxxl:64px;--med-font-size-huge:96px;--med-font-weight-thin:250;--med-font-weight-light:300;--med-font-weight-regular:400;--med-font-weight-medium:500;--med-font-weight-semibold:600;--med-font-weight-bold:700;--med-font-weight-extrabold:800;--med-font-weight-heavy:900;--med-letter-spacing-ultracompressed:-0.04;--med-letter-spacing-compressed:-0.02;--med-letter-spacing-default:0;--med-letter-spacing-medium:0.02;--med-letter-spacing-expanded:0.05;--med-letter-spacing-distant:0.1;--med-letter-spacing-far:0.2;--med-line-height-compressed:100%;--med-line-height-default:24px;--med-line-height-double:200%}:root{--med-spacing-inset-nano:4px;--med-spacing-inset-xs:8px;--med-spacing-inset-sm:16px;--med-spacing-inset-base:24px;--med-spacing-inset-md:32px;--med-spacing-inset-lg:40px;--med-spacing-inset-xl:48px;--med-spacing-inset-xxl:64px;--med-spacing-squish-nano:4px 8px;--med-spacing-squish-xs:8px 16px;--med-spacing-squish-sm:8px 24px;--med-spacing-squish-base:8px 32px;--med-spacing-squish-md:16px 24px;--med-spacing-squish-lg:16px 32px;--med-spacing-squish-xl:24px 32px;--med-spacing-squish-xxl:32px 40px;--med-spacing-stretch-nano:8px 4px;--med-spacing-stretch-xs:16px 8px;--med-spacing-stretch-sm:24px 8px;--med-spacing-stretch-base:32px 8px;--med-spacing-stretch-md:24px 16px;--med-spacing-stretch-lg:32px 16px;--med-spacing-stretch-xl:32px 24px;--med-spacing-stretch-xxl:40px 32px;--med-spacing-inline-quark:2px;--med-spacing-inline-nano:4px;--med-spacing-inline-xxxs:8px;--med-spacing-inline-base:16px;--med-spacing-inline-xxs:24px;--med-spacing-inline-xs:32px;--med-spacing-inline-sm:40px;--med-spacing-inline-md:48px;--med-spacing-inline-lg:56px;--med-spacing-inline-xl:64px;--med-spacing-inline-xxl:72px;--med-spacing-inline-xxxl:80px;--med-spacing-inline-huge:120px;--med-spacing-inline-ultra:160px;--med-spacing-stack-quark:2px;--med-spacing-stack-nano:4px;--med-spacing-stack-xxxs:8px;--med-spacing-stack-base:16px;--med-spacing-stack-xxs:24px;--med-spacing-stack-xs:32px;--med-spacing-stack-sm:40px;--med-spacing-stack-md:48px;--med-spacing-stack-lg:56px;--med-spacing-stack-xl:64px;--med-spacing-stack-xxl:72px;--med-spacing-stack-xxxl:80px;--med-spacing-stack-huge:120px;--med-spacing-stack-ultra:160px}:root{--med-border-radius-none:0;--med-border-radius-quark:2px;--med-border-radius-nano:4px;--med-border-radius-sm:8px;--med-border-radius-md:16px;--med-border-radius-lg:24px;--med-border-radius-pill:31.25em;--med-border-radius-full:50%;--med-border-radius-speech-left-down:8px 8px 8px 0;--med-border-radius-speech-right-down:8px 8px 0 8px;--med-border-radius-speech-right-up:8px 0 8px 0px;--med-border-radius-speech-left-up:0 8px 8px 0px;--med-border-radius-table-down-sm:0 0 8px 8px;--med-border-radius-table-up-sm:8px 8px 0 0;--med-border-radius-table-down-md:16px 16px 0 0;--med-border-radius-table-up-md:0 0 16px 16px;--med-border-width-none:0;--med-border-width-quark:0.25px;--med-border-width-nano:0.5px;--med-border-width-hairline:1px;--med-border-width-thin:2px;--med-border-width-thick:4px;--med-border-width-bold:8px;--med-border-width-heavy:16px;--med-opacity-level-semiopaque:0.8;--med-opacity-level-intense:0.64;--med-opacity-level-half:0.5;--med-opacity-level-medium:0.32;--med-opacity-level-light:0.16;--med-opacity-level-semitransparent:0.08;--med-shadow-level-0:none;--med-shadow-level-1:0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 3px rgba(0, 0, 0, 0.2);--med-shadow-level-2:0 2px 4px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-3:0 3px 3px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-4:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-5:0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-6:0 8px 10px rgba(0, 0, 0, 0.14), 0 3px 14px rgba(0, 0, 0, 0.12), 0 4px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-7:0 9px 12px rgba(0, 0, 0, 0.14), 0 3px 16px rgba(0, 0, 0, 0.12), 0 5px 6px rgba(0, 0, 0, 0.2);--med-shadow-level-8:0 12px 17px rgba(0, 0, 0, 0.14), 0 5px 22px rgba(0, 0, 0, 0.12), 0 7px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-9:0 16px 24px rgba(0, 0, 0, 0.14), 0 6px 30px rgba(0, 0, 0, 0.12), 0 8px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-10:0 24px 38px rgba(0, 0, 0, 0.14), 0 9px 46px rgba(0, 0, 0, 0.12), 0 11px 15px rgba(0, 0, 0, 0.2)}html{font-family:sans-serif;font-size:15px;line-height:1.4;color:#444}body{margin:0;background:#504f4f;font-size:1em}.wrapper{margin:15px auto;max-width:1100px}.container-calendar{background:#ffffff;padding:15px;max-width:475px;margin:0 auto;overflow:auto}.button-container-calendar button{cursor:pointer;display:inline-block;zoom:1;background:#00a2b7;color:#fff;border:1px solid #0aa2b5;border-radius:4px;padding:5px 10px}.table-calendar{border-collapse:collapse;width:100%}.table-calendar td,.table-calendar th{padding:5px;border:1px solid #e2e2e2;text-align:center;vertical-align:top}.date-picker.selected{font-weight:bold;outline:1px dashed #00BCD4}.date-picker.selected span{border-bottom:2px solid currentColor}.date-picker:nth-child(1){color:red}.date-picker:nth-child(6){color:green}#monthAndYear{text-align:center;margin-top:0}.button-container-calendar{position:relative;margin-bottom:1em;overflow:hidden;clear:both}#previous{float:left}#next{float:right}.footer-container-calendar{margin-top:1em;border-top:1px solid #dadada;padding:10px 0}.footer-container-calendar select{cursor:pointer;display:inline-block;zoom:1;background:#ffffff;color:#585858;border:1px solid #bfc5c5;border-radius:3px;padding:5px 1em}";

const MedCalendar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.today = new Date();
    this.currentMonth = this.today.getMonth();
    this.currentYear = this.today.getFullYear();
    this.generate_year_range = (start, end) => {
      let years = '';
      for (var year = start; year <= end; year++) {
        years += "<option value='" + year + "'>" + year + "</option>";
      }
      return years;
    };
    this.next = () => {
      this.currentYear = (this.currentMonth === 11) ? this.currentYear + 1 : this.currentYear;
      this.currentMonth = (this.currentMonth + 1) % 12;
      this.showCalendar(this.currentMonth, this.currentYear);
    };
    this.previous = () => {
      this.currentYear = (this.currentMonth === 0) ? this.currentYear - 1 : this.currentYear;
      this.currentMonth = (this.currentMonth === 0) ? 11 : this.currentMonth - 1;
      this.showCalendar(this.currentMonth, this.currentYear);
    };
    this.jump = () => {
      this.currentYear = parseInt(this.selectYear.value);
      this.currentMonth = parseInt(this.selectMonth.value);
      this.showCalendar(this.currentMonth, this.currentYear);
    };
    this.showCalendar = (month, year) => {
      const firstDay = (new Date(year, month)).getDay();
      const tbl = this.hostElement.querySelector('calendar-body');
      tbl.innerHTML = "";
      this.monthAndYear.innerHTML = this.months[month] + " " + year;
      this.selectYear.value = year;
      this.selectMonth.value = month;
      // creating all cells
      let date = 1;
      for (var i = 0; i < 6; i++) {
        const row = document.createElement("tr");
        let cell, cellText;
        for (var j = 0; j < 7; j++) {
          if (i === 0 && j < firstDay) {
            cell = document.createElement("td");
            cellText = document.createTextNode("");
            cell.appendChild(cellText);
            row.appendChild(cell);
          }
          else if (date > this.daysInMonth(month, year)) {
            break;
          }
          else {
            cell = document.createElement("td");
            cell.setAttribute("data-date", `${date}`);
            cell.setAttribute("data-month", month + 1);
            cell.setAttribute("data-year", year);
            cell.setAttribute("data-month_name", this.months[month]);
            cell.className = "date-picker";
            cell.innerHTML = "<span>" + date + "</span>";
            if (date === this.today.getDate() && year === this.today.getFullYear() && month === this.today.getMonth()) {
              cell.className = "date-picker selected";
            }
            row.appendChild(cell);
            date++;
          }
        }
        tbl.appendChild(row);
      }
    };
    this.daysInMonth = (iMonth, iYear) => {
      return 32 - new Date(iYear, iMonth, 32).getDate();
    };
  }
  componentDidLoad() {
    this.selectYear = this.hostElement.querySelector('.year');
    this.selectMonth = this.hostElement.querySelector('.month');
    // this.createYear = generate_year_range( 1970, currentYear );
    this.createYear = this.generate_year_range(1970, 2050);
    this.selectYear.innerHTML = this.createYear;
    // const calendar = this.hostElement.querySelector(".calendar");
    // const lang = calendar?.getAttribute('data-lang');
    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let $dataHead = '<tr>';
    for (const dhead in this.days) {
      $dataHead += "<th data-days='" + this.days[dhead] + "'>" + this.days[dhead] + "</th>";
    }
    $dataHead += "</tr>";
    //alert($dataHead);
    this.hostElement.querySelector('thead-month').innerHTML = $dataHead;
    this.monthAndYear = this.hostElement.querySelector('.monthAndYear');
    this.showCalendar(this.currentMonth, this.currentYear);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "wrapper" }, index.h("div", { class: "container-calendar" }, index.h("h3", { id: "monthAndYear", class: "monthAndYear" }), index.h("div", { class: "button-container-calendar" }, index.h("button", { id: "previous", onClick: () => this.previous() }, "\u2039"), index.h("button", { id: "next", onClick: () => this.next() }, "\u203A")), index.h("table", { class: "table-calendar", id: "calendar", "data-lang": "en" }, index.h("thead", { class: "thead-month", id: "thead-month" }), index.h("tbody", { class: "calendar-body", id: "calendar-body" })), index.h("div", { class: "footer-container-calendar" }, index.h("label", { htmlFor: "month" }, "Jump To: "), index.h("select", { id: "month", class: "month", onChange: () => this.jump() }, index.h("option", { value: "0" }, "Jan"), index.h("option", { value: "1" }, "Feb"), index.h("option", { value: "2" }, "Mar"), index.h("option", { value: "3" }, "Apr"), index.h("option", { value: "4" }, "May"), index.h("option", { value: "5" }, "Jun"), index.h("option", { value: "6" }, "Jul"), index.h("option", { value: "7" }, "Aug"), index.h("option", { value: "8" }, "Sep"), index.h("option", { value: "9" }, "Oct"), index.h("option", { value: "10" }, "Nov"), index.h("option", { value: "11" }, "Dec")), index.h("select", { id: "year", class: "year", onChange: () => this.jump() }))))));
  }
  get hostElement() { return index.getElement(this); }
};
MedCalendar.style = medCalendarCss;

exports.med_calendar = MedCalendar;
