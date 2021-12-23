import { Component, Host, h, Element, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
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
      this.calendarBody.innerHTML = '';
      this.monthAndYear.innerHTML = this.months[month] + ' ' + year;
      this.selectYear.value = year;
      this.selectMonth.value = month;
      let date = 1;
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
          if (i === 0 && j < firstDay) {
          }
          else if (date > this.daysInMonth(month, year)) {
            break;
          }
          else {
            this.calendarBody.insertAdjacentHTML('afterbegin', `
            <div data-date="${date}" data-month="${month + 1}" data-year="${year}" data-month-name="${this.months[month]}" class="date">
              <med-type class="date__type">${date}</med-type>
            </div>
          `);
            if (date === this.today.getDate() && year === this.today.getFullYear() && month === this.today.getMonth()) {
              this.calendarBody.insertAdjacentHTML('afterbegin', `
              <div data-date="${date}" data-month="${month + 1}" data-year="${year}" data-month-name="${this.months[month]}" class="date">
                <div class="date__active">
                  <med-type class="date__type date__type--active">${date}</med-type>
                </div>
              </div>
            `);
            }
            date++;
          }
        }
      }
    };
    this.daysInMonth = (iMonth, iYear) => {
      return 32 - new Date(iYear, iMonth, 32).getDate();
    };
  }
  componentDidLoad() {
    this.createYear = this.generate_year_range(1970, 2050);
    this.selectYear.innerHTML = this.createYear;
    this.months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    this.days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];
    this.days.forEach((day) => {
      this.calendarHead.insertAdjacentHTML('afterbegin', `
        <div class="content__week-day">
          <med-type class="content__week-type" data-days="${day}">${day}</med-type>
        </div>
      `);
    });
    this.showCalendar(this.currentMonth, this.currentYear);
  }
  render() {
    const { dsColor } = this;
    return (h(Host, { class: generateMedColor(dsColor, { 'med-badge': true }) },
      h("div", { class: "header" },
        h("div", { class: "header__left" },
          h("ion-button", { "ds-name": "tertiary", onClick: () => this.previous() },
            h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-esquerda" })),
          h("med-type", { class: "header__type", token: "p16b", ref: (el) => this.monthAndYear = el }),
          h("ion-button", { "ds-name": "tertiary", onClick: () => this.next() },
            h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-direita" }))),
        h("div", { class: "header__right" },
          h("ion-button", { "ds-name": "tertiary" },
            h("med-type", { class: "choice__type" }, "M\u00EAs"),
            h("ion-icon", { slot: "end", class: "med-icon header__button-icon", name: "med-baixo" })),
          h("ion-icon", { class: "med-icon header__icon", name: "med-grafico" }))),
      h("div", { class: "content" },
        h("div", { class: "content__header", ref: (el) => this.calendarHead = el }),
        h("div", { class: "content__container", ref: (el) => this.calendarBody = el })),
      h("div", { class: "footer" },
        h("label", { htmlFor: "month" }, "Jump To: "),
        h("select", { onChange: () => this.jump(), ref: (el) => this.selectMonth = el },
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
        h("select", { onChange: () => this.jump(), ref: (el) => this.selectYear = el }))));
  }
  static get is() { return "med-calendar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-calendar.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-calendar.css"]
  }; }
  static get properties() { return {
    "dsColor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "MedColor",
        "resolved": "string | undefined",
        "references": {
          "MedColor": {
            "location": "import",
            "path": "../../../../interface"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define a cor do componente."
      },
      "attribute": "ds-color",
      "reflect": true
    }
  }; }
  static get elementRef() { return "hostElement"; }
}
