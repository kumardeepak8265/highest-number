let highest;

for (let i = 1; i > 0; i++) {
  let number = prompt(`next number`);
  console.log("number", number, "typeof number", typeof number);
  if (number === null) {
    if (i === 1) {
      alert("Please First time not  press Enter Cancle button ");
    }
    break;
  }
  if (number === ``) {
    alert("Please no Enter empty OK Button ");
    continue;
  }

  number = +number;
  if (highest === undefined || number > highest) {
    highest = number;
  }
  document.getElementById("data").innerHTML = highest;
}
