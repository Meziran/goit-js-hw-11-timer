class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.daysEl = document.querySelector('[data-value="days"]');
    this.hoursEl = document.querySelector('[data-value="hours"]');
    this.minsEl = document.querySelector('[data-value="mins"]');
    this.secsEl = document.querySelector('[data-value="secs"]');

    setInterval(() => {
      const time = this.targetDate - Date.now();
      this.daysEl.textContent = getTime(time).days;
      this.hoursEl.textContent = getTime(time).hours;
      this.minsEl.textContent = getTime(time).mins;
      this.secsEl.textContent = getTime(time).secs;
    }, 1000);

    function getTime(time) {
      const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
      return { days, hours, mins, secs };
    }

    function pad(value) {
      return String(value).padStart(2, "0");
    }
  }
}
const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jan 01, 2022"),
});
