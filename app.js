const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2020, 10, 1, 17, 0, 0);
// console.log(futureDate);

const year = futureDate.getFullYear();
const hrs = futureDate.getHours();
const mins = futureDate.getMinutes();

let month = futureDate.getMonth();
// console.log(months[month]);
month = months[month];

const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
// console.log(weekday);

giveaway.textContent = `Giveaway ends on ${weekday}, ${date} ${month} ${year} at ${hrs}:${mins}`;

const futureTime = futureDate.getTime();
// console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  // console.log(today);
  const t = futureTime - today;
  console.log(t);

  // 1 s = 1000 ms
  // 1 m = 60 s
  // 1 hr = 60 min
  // 1 day = 24 hrs

  const oneDay = 24*60*60*1000;
  // console.log(oneDay);
  const oneHour = 60*60*1000;
  const oneMin = 60*1000;
  let days = t / oneDay;
  // console.log(days);
  days = Math.floor(days);
  let hrs = Math.floor((t % oneDay) / oneHour);
  console.log(hrs);
}

getRemainingTime();