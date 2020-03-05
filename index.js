/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(string) {
  const hours = string.split(":")
  if (parseInt(hours[0]) < 12) {
    return "Good Morning"
  }
  else if (parseInt(hours[0] >= 12) && parseInt(hours[0] < 18)) {
    return "Good Afternoon."
  }
  else {
    return "Good Evening"
  }
}

function displayMessage() {
  
}

