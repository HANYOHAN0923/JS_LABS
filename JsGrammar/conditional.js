// 2.13 ~ 2.15

// prompt 웹에서 팝업창 호출
// parseInt 정수 값을 입력 받음
const age = parseInt(prompt("How old are you?"));

// isNaN (NaN = Not a Number)
if (isNaN(age) || age < 0) {
  alert("Please Write A Number!");
} else if (age < 18) {
  console.log("Denied");
} else {
  console.log("Permission");
}

console.log(true && false === false);

// while
let n = 0;

while (n < 3) {
  console.log(n);
  n++;
}
