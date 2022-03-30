const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  /*
  const clickedClass = "active";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
*/

  // classList에서 특정 clsassName이 있나 확인 후, 제거 혹은 추가
  h1.classList.toggle("active");
}

h1.addEventListener("click", handleTitleClick);
