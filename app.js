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


giveaway.textContent = `Giveaway ends on ${weekday}, ${date} ${month} ${year} at ${hrs}:${mins}:${secs}`;

// Giveaway ends on Sunday, 1 November 2020 at 17:00:00!