console.log("runing");
let highest;
for (let i = 1; i > -99999; i++) {
  let number = prompt("enter the number");
  if (number === null) {
    break;
  }
  if (number === ``) {
    continue;
  }
  if (Object.is(number, NaN)) {
    continue;
  }
  number = +number;
  if (highest === undefined || number > highest) {
    highest = number;
  }
  console.log("highest", highest);
  document.getElementById("data").innerHTML = highest;
}
