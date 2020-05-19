import AbstractView from './abstract-view.js';

export default class ScoreLoading extends AbstractView {
  constructor() {
    super();
    this.text = `Таблица результатов загружается`;
    this.symbol = `.`;
    this.element.firstElementChild.textContent = this.text;
    this.counter = 0;
  }


  get template() {
    return `<div style="width: 680px; margin: 200px 0; font-size: 40px"></div>`;
  }

  start() {
    if (this.counter < 3) {
      this.element.firstElementChild.textContent += this.symbol;
      this.counter++;
    } else {
      this.element.firstElementChild.textContent = this.text;
      this.counter = 0;
    }

    this.timeout = setTimeout(() => this.start(), 800);
  }

  stop() {
    clearTimeout(this.timeout);
  }
}
