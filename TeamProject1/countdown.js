runClock();
setInterval("runClock()", 1000);

function runClock() {

   // Store the current date and time
   var currentDay = new Date();
   var dateStr = currentDay.toLocaleDateString();
   var timeStr = currentDay.toLocaleTimeString();

   // Calculate the days until September 1st
   var newDate = new Date("September 1, 2018");
   var currentYear = currentDay.getFullYear();
   newDate.setFullYear(currentYear);
   var daysLeft = (newDate - currentDay)/(1000*60*60*24);

   // Calculate the the hours left in the current day
   var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

   // Calculate the minutes and seconds left in the current hour
   var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
   var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

   // Display the time left until the discount is up
   document.getElementById("days").textContent = Math.floor(daysLeft) + " :";
   document.getElementById("hrs").textContent = Math.floor(hrsLeft) + " :";
   document.getElementById("mins").textContent = Math.floor(minsLeft) + " :";
   document.getElementById("secs").textContent = Math.floor(secsLeft);
}


runClockTwo();
setInterval("runClockTwo()", 1000);

function runClockTwo() {

   // Store the current date and time
   var currentDayTwo = new Date();
   var dateStrTwo = currentDayTwo.toLocaleDateString();
   var timeStrTwo = currentDayTwo.toLocaleTimeString();

   // Calculate the days until September 1st
   var newDateTwo = new Date("September 1, 2018");
   var currentYearTwo = currentDayTwo.getFullYear();
   newDateTwo.setFullYear(currentYearTwo);
   var daysLeftTwo = (newDateTwo - currentDayTwo)/(1000*60*60*24);

   // Calculate the the hours left in the current day
   var hrsLeftTwo = (daysLeftTwo - Math.floor(daysLeftTwo)) * 24;

   // Calculate the minutes and seconds left in the current hour
   var minsLeftTwo = (hrsLeftTwo - Math.floor(hrsLeftTwo)) * 60;
   var secsLeftTwo = (minsLeftTwo - Math.floor(minsLeftTwo)) * 60;

   // Display the time left until the discount is up
   document.getElementById("days2").textContent = Math.floor(daysLeftTwo) + " days left!";
}
