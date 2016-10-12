export class CountdownClock {
  endDate: Date;
  total: number;
  seconds: number;
  minutes: number;
  hours: number;
  days: number;

  constructor(endDate: Date) {
    this.endDate = endDate;
  }

  tick() {
    this.total = this.endDate.valueOf() - new Date().valueOf();
    this.seconds = Math.floor((this.total / 1000) % 60);
    this.minutes = Math.floor((this.total / 1000 / 60) % 60);
    this.hours = Math.floor((this.total / (1000 * 60 * 60)) % 24);
    this.days = Math.floor(this.total / (1000 * 60 * 60 * 24));
  }
}
