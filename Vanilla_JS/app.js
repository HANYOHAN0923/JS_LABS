// querySelector를 사용하면 id(#)인지, class(.)인지 명확하게 표시해줘야한다!
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");

const loginButton = document.querySelector("#login-form button");

function handleBtnClick() {
  const username = loginInput.username;
  console.log(username);
}

loginButton.addEventListener("click", handleBtnClick);
