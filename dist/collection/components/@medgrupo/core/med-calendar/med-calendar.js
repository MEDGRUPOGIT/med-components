import { Component, Host, h, Element } from '@stencil/core';
export class MedCalendar {
  constructor() {
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
    return (h(Host, null,
      h("div", { class: "wrapper" },
        h("div", { class: "container-calendar" },
          h("h3", { id: "monthAndYear", class: "monthAndYear" }),
          h("div", { class: "button-container-calendar" },
            h("button", { id: "previous", onClick: () => this.previous() }, "\u2039"),
            h("button", { id: "next", onClick: () => this.next() }, "\u203A")),
          h("table", { class: "table-calendar", id: "calendar", "data-lang": "en" },
            h("thead", { class: "thead-month", id: "thead-month" }),
            h("tbody", { class: "calendar-body", id: "calendar-body" })),
          h("div", { class: "footer-container-calendar" },
            h("label", { htmlFor: "month" }, "Jump To: "),
            h("select", { id: "month", class: "month", onChange: () => this.jump() },
              h("option", { value: "0" }, "Jan"),
              h("option", { value: "1" }, "Feb"),
              h("option", { value: "2" }, "Mar"),
              h("option", { value: "3" }, "Apr"),
              h("option", { value: "4" }, "May"),
              h("option", { value: "5" }, "Jun"),
              h("option", { value: "6" }, "Jul"),
              h("option", { value: "7" }, "Aug"),
              h("option", { value: "8" }, "Sep"),
              h("option", { value: "9" }, "Oct"),
              h("option", { value: "10" }, "Nov"),
              h("option", { value: "11" }, "Dec")),
            h("select", { id: "year", class: "year", onChange: () => this.jump() }))))));
  }
  static get is() { return "med-calendar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-calendar.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-calendar.css"]
  }; }
  static get elementRef() { return "hostElement"; }
}
