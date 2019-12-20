// Write a function that takes in a string of the time and returns the time in military format.
//Ex: militaryTime('7:47pm') returns '19:47'


// Understanding The Problem:
    // The problem is saying that the function takes a string, which is the time, and formats that time into miltary time.

// Devise A Strategy:
    // As I'm not sure how to go about this problem just by looking at it, the best thing to do would be to do research.
    // Mainly on how to format time in JS.

  // Psuedo Code:
    // Function that takes a parameter that is a string.
    // String is 'Time'
    // Format string of time into a military time format
    // AM & PM


function militaryTime(timeStr) {

  let hour = timeStr.substring(0, 2) * 1;
  let timeFormat = timeStr.substring();

// if midnight
  if (hour === 12 && s.indexOf("AM") !== -1) {
    return ("00" + timeFormat);
}
// if afternoon
if (hour === 12 && s.indexOf("PM") !== -1) {
    return (time + timeFormat);
}
  //write code here
}
