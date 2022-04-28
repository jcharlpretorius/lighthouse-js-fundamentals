
const raining = false;
const temperature = 33;

// Reminder to take umbrella with if it is raining
if (raining) {
  console.log("Don't forget an umbrella!");
}
// use ! operator, tells you to leave umbrella at home when not raining
if (!raining) {
  console.log("Leave your umbrella at home!");
}

// Gives advice on what to wear outside depending on the weather
if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}
console.log("Now you're ready to go outside!");

const isCitizen = true;
const age = 26;
// Checks your eligibility to vote
if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

// Advice to not go outside it temperatures are extreme
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a good idea...");
}

