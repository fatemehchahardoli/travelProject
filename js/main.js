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
   displayUesrsList(mydata, boxListContainer, rowsCount, currentPage);
   setupPagination(mydata, paginationContainer, rowsCount);
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
     <div class="box-content-text"  style="display: flex;justify-content:space-around;">
        <span style="color: #000a5d; font-size:1.4em">${toor.name}</span><br>
        <span style="color: #6fa1ff;font-size:1.2em" >$${toor.price}</span>
     </div>
     <div class="box-content-date">
        <a>${toor.TicketType}</a>
        <div class="con-like">
  <input title="like" type="checkbox" class="like">
  <div class="checkmark">
    <svg viewBox="0 0 24 24" class="outline" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
    </svg>
    <svg viewBox="0 0 24 24" class="filled" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
    </svg>
    <svg class="celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <polygon points="10,10 20,20" class="poly"></polygon>
      <polygon points="10,50 20,50" class="poly"></polygon>
      <polygon points="20,80 30,70" class="poly"></polygon>
      <polygon points="90,10 80,20" class="poly"></polygon>
      <polygon points="90,50 80,50" class="poly"></polygon>
      <polygon points="80,80 70,70" class="poly"></polygon>
    </svg>
  </div>
</div>
    
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

//hambarger menu----------------------------

let hamber = document.querySelector(".fa-bars");
let section = document.querySelector(".section-right");
hamber.addEventListener("click", function () {
   section.style.display = "block ";
});

//-------pagination

let boxListContainer = document.querySelector("#boxes");
let paginationContainer = document.querySelector(".pagination");

let currentPage = 1;
let rowsCount = 6;

function displayUesrsList(allUesrsArray, boxContainer, rowsCount, currentPage) {
   boxContainer.innerHTML = "";

   let endIndex = rowsCount * currentPage;
   let startIndex = endIndex - rowsCount;

   let paginatedBox = allUesrsArray.slice(startIndex, endIndex);

   creatBoxEvent(paginatedBox);
}

function setupPagination(allUesrsArray, pagesContainer, rowsCount) {
   // Codes

   pagesContainer.innerHTML = "";

   let pageCount = Math.ceil(allUesrsArray.length / rowsCount);

   for (let i = 1; i < pageCount + 1; i++) {
      let btn = paginationButtonGenerator(i, allUesrsArray);
      pagesContainer.appendChild(btn);
   }
}

function paginationButtonGenerator(page, allUesrsArray) {
   let button = document.createElement("button");
   button.innerHTML = page;

   if (page === currentPage) {
      button.classList.add("active");
   }

   button.addEventListener("click", function () {
      currentPage = page;
      displayUesrsList(allUesrsArray, boxListContainer, rowsCount, currentPage);

      let prevPage = document.querySelector("button.active");
      prevPage.classList.remove("active");

      button.classList.add("active");
   });

   return button;
}
