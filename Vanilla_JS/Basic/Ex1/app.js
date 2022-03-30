/*
document.tagName으로 JS로 Html코드에 접근할 수 있다 (읽기와 쓰기 모두 가능하다).
document는 웹문저 자신을 의미한다. 추가적으로 읽을 때는 무조건 object형식으로 읽어온다

Ex => document.title, document.body, document.getElementById(),
*/
const title = document.getElementById("title");

title.innerText = "Got you!";

console.log(title.id);
console.log(title.className);

// class 이름이 같은 태그가 존재할 겨우, greet은 객체들을 원소로 담은 배열이 된다.
const greet = document.getElementsByClassName("greet");

console.log(greet);

const div_title = document.getElementsByTagName("h1");

// querySelector는 element를 CSS 방식으로 검색할 수 있다.
// 즉 ".클래스이름 태그"(아이디의 경우 #아이디)로 검색할 수 있다는 뜻이다.
// 그렇지만 querySelector는 첫번째 1개의 element만 갖을 수 있다

const div_h = document.querySelector(".hello h1");
// querySelector('div.hello:first-child h1');

// querySelector의 기능을 쓰고 싶은데 여러개의 element를 가져와야할 때는 querySelectorAll을 사용해야한다
const div_h_all = document.querySelectorAll(".hello h1");

// console.log(); => html 라인 출력
// console.dir(); => 해당 html 태그의 java script형식으로 저장된 object를 출력

// css selector 사용하기
const test_title = document.querySelector("div.hello:first-child h1");
console.log(test_title);

// css를 js를 통해서 수정하기
// 그렇지만 javascipt로는 하는 주요 역활은 event listening이다.
function handleTitleClick() {
  title.style.color = "blue";
}

function handleMoustEnter() {
  title.innerText = "Mouse is here!";
}

function handleMoustLeave() {
  title.innerText = "Mouse is gone!";
}

// addEventListner('특정 이벤트', 이벤트 발생 시에 실행할 함수)
// 하나의 html요소가 여러개의 이벤트 함수를 갖을 수 있다.
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMoustEnter);
title.addEventListener("mouseleave", handleMoustLeave);

// 이런식으로 이벤트 작성 가능 => greet.onclick = handleTitleClick;

// window 자바스크립트 기본제공 (현재 실행된 창을 말함)
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copy");
}

function handleWindowOffline() {
  alert("Off-Line");
}

function handleWindowOnline() {
  alert("On-Line");
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
