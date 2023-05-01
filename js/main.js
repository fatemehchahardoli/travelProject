// var mydata=[];

//   function loadData() {
// fetch('../json/myJson.json').then(res=>(res.json)).then(data=>mydata=data)
//     // var xhttp = new XMLHttpRequest();
//     //  xhttp.open("GET", );
//     // xhttp.onreadystatechange = function () {
//     //    if ( xhttp.readyState == 4 && xhttp.status == 200) {
//     //         var jsObject = JSON.parse(xhttp.responseText);
//     //         mydata = jsObject;

//     //     }
//     // };

//     //  xhttp.send();
// }

//  console.log(mydata)
// loadData();

async function loaddata() {
   var mydata = await fetch("../json/myJson.json")
      .then((res) => res.json())
      .then((res) => res.toorInfo);
   creatBoxEvent(mydata);
}
loaddata();

let boxes = document.querySelector(".boxes");
function creatBoxEvent(data) {
   data.forEach((toor) => {
      boxes.insertAdjacentHTML(
         "beforeend",
         `  <div class="box">
     <img
        src=${toor.image}
        alt=""
        class="box-content-img"
     />
     <div class="box-content-text">
        <span>${toor.name}</span>
        <span>$${toor.price}</span>
     </div>
     <div class="box-content-date">
        <a>${toor.TicketType}</a><br>
        <span style="color:red">Capacity:${toor.Capacity}</span>
     </div>
     </div>`
      );
   });
}

function creats(data) {
   console.log(data);
}

//preloader
let loader = document.querySelector(".loader");

window.addEventListener("load", function () {
   loader.classList.add("hidden");
});

let searchIcon = document.getElementById("search");
let searchForm = document.querySelector(".search-form");
let closeSearch = document.querySelector("#close-search");
searchIcon.addEventListener("click", function () {
   searchForm.style.display = "flex";
});
closeSearch.addEventListener("click", function () {
   searchForm.style.display = "none";
});

//scroll bar
let customScroll = document.querySelector("#scroll");

window.addEventListener("scroll", function () {
   let scrollTop = window.scrollY;

   let documentHeight = document.body.clientHeight;

   let windowHeight = window.innerHeight;

   let scrollPercent = scrollTop / (documentHeight - windowHeight);

   let scrollPercentRounded = Math.round(scrollPercent * 100);

   customScroll.style.width = scrollPercentRounded + "%";

   console.log(scrollPercentRounded);
});

///////////////accordian
const $ = document;
const tabs = $.querySelectorAll(".wrapper");

const contents = $.querySelectorAll(".content");
const icons = $.querySelectorAll(".icon");
const toggles = $.querySelectorAll(".toggle");

let contentElem, toggleElem, iconElem;
console.log(toggles);

function closeAllTabs() {
   for (let i = 0; i < 3; i++) {
      contents[i].style.height = "0";
      toggles[i].style.color = "#111130";
      icons[i].classList.remove("fa-minus");
      icons[i].classList.add("fa-plus");
   }
}

tabs.forEach((tab) => {
   tab.addEventListener("click", (event) => {
      closeAllTabs();

      contentElem = tab.querySelector(".content");
      toggleElem = tab.querySelector(".toggle");
      iconElem = tab.querySelector(".icon");

      contentElem.style.height = contentElem.scrollHeight + "px";
      toggleElem.style.color = "#0084e9";
      iconElem.classList.add("fa-minus");
      iconElem.classList.remove("fa-plus");
   });
});

//sticky navbar
let mainNav = document.getElementById("navbar");
let nav = document.querySelector("nav");
document.addEventListener("scroll", function () {
   if (document.documentElement.scrollTop > 0) {
      nav.classList.add("textshadow");
      mainNav.classList.add("textshadow");
   } else {
      nav.classList.remove("textshadow");
      mainNav.classList.remove("textshadow");
   }
});
// $(document).ready(function(){
//     $("#aboutImg").fadeOut(2000);
// })

//timer
let countDownDate = new Date(2023, 5, 5, 0, 0, 0);
let dayElm = document.getElementById("day");
let hoursElm = document.getElementById("hours");
let minuteElm = document.getElementById("minute");
let secondElem = document.getElementById("second");
let countdown = document.getElementById("countdown");

let x = setInterval(function () {
   const d = new Date();
   let time = d.getTime();
   let distance = countDownDate - time;
   if (distance > 0) {
      let dayTime = 1000 * 60 * 60 * 24;
      let hourTime = 1000 * 60 * 60;
      let minuteTime = 1000 * 60;
      let day = Math.floor(distance / dayTime);
      let hours = Math.floor((distance % dayTime) / hourTime);
      let minutes = Math.floor((distance % hourTime) / minuteTime);
      let seconds = Math.floor((distance % minuteTime) / 1000);
      dayElm.innerHTML = day < 10 ? "0" + day : day;
      hoursElm.innerHTML = hours < 10 ? "0" + hours : hours;
      minuteElm.innerHTML = minutes < 10 ? "0" + minutes : minutes;
      secondElem.innerHTML = seconds < 10 ? "0" + seconds : seconds;
   } else {
      clearInterval(x);
      countdown.innerHTML = "finish discount time";
   }
}, 1000);
