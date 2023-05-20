let mydata = {
   Iran: ["tehran", "hamedan", "esfahan", "shiraz"],
   Canada: ["Toronto", "Vancouver", "Montreal", "Ottawa", "Calgary"],
   US: ["New York", "Los Angles", "Chicago"],
};
let State = document.getElementById("countrySelect");
let city = document.getElementById("citySelect");

function countrySelectFunction() {
   let valueState = State.value;
   if (valueState == "Please Select") {
      city.innerHTML = "";
      city.innerHTML = "<Option>Please City...</Option>";
   } else {
      city.innerHTML = "";
      mydata[valueState].forEach((item) => {
         city.innerHTML += "<Option>" + item + "</Option>";
      });
   }
}

let apiData = {
   url: "https://api.openweathermap.org/data/2.5/weather?q=",
   key: "26c4d8ad14b57209671494df9bd9fcb9",
};

function fetchData() {
   let countryValue = city.value;

   fetch(`${apiData.url}${countryValue}&&appid=${apiData.key}`)
      .then((res) => res.json())
      .then((data) => {
         console.log(data);

         showData(data);
      });
}
function showData(data) {
   let cityElem = document.querySelector(".city");
   cityElem.innerHTML = `${data.name}, ${data.sys.country}`;

   let dateElem = document.querySelector(".date");
   dateElem.innerHTML = showDate();

   let tempElem = document.querySelector(".temp");
   tempElem.innerHTML = `${Math.floor(data.main.temp - 273.15)}°c`;

   let weatherElem = document.querySelector(".weather");
   weatherElem.innerHTML = `${data.weather[0].main}`;
}
function showDate() {
   let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
   ];

   let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
   ];

   let now = new Date();

   let day = days[now.getDay()];
   let month = months[now.getMonth()];
   let year = now.getFullYear();
   let date = now.getDate();

   return `${day} ${date} ${month} ${year}`;
}
city.addEventListener("change", function () {
   fetchData();
});
//-----------------------------------------------------

//--------form validation
class FormValidator {
   constructor(myform) {
      this.__myForm = myform;
      this.submitHandler();
      this.focusHandler();
   }

   submitHandler() {
      this.__myForm.addEventListener("submit", (event) => {
         event.preventDefault();
      });
   }
   focusHandler() {
      this.__myForm.addEventListener("focusin", (event) => {});
      this.__myForm.addEventListener("focusout", (event) => {
         var datasetValidations = event.target.dataset.validation;
         if (datasetValidations) {
            let validatArray = datasetValidations.split(" ");
            for (let i = 0; i < validatArray.length; i++) {
               const func = validatArray[i];
               var message = this[func](event.target);
               let sibling = event.target.previousElementSibling;
               sibling.innerHTML = message;
               if (message.length > 0) {
                  sibling.style.display = "inline";
                  event.target.style.border = "2px solid red";
               } else {
                  sibling.style.display = "none";
                  event.target.style.border = "none";
               }
            }
         }
      });
   }

   notEmpty(element) {
      if (element.value === "") {
         return "این فیلد نباید خالی باشد";
      }
      return "";
   }

   isMobile(element) {
      const re = /^09[0|1|2|3][0-9]{8}$/;
      if (!re.test(element.value)) {
         return "قالب موبایل نادرست است";
      }
      return "";
   }

   isEmail(element) {
      const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      if (!re.test(element.value)) {
         return "قالب ایمیل نادرست است";
      }
      return "";
   }
}
let registerForm = document.getElementById("register-form");
new FormValidator(registerForm);
