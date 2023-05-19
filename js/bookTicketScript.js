let mydata = {
   Iran: ["tehran", "hamedan", "esfahan"],
   Canada: ["sangapor", "turkye"],
   US: ["losonjeles", "us"],
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
class FormValidator {
   constructor(myform) {
      this.__myForm = myform;
      this.submitHandler();
   }

   submitHandler() {
      this.__myForm.addEventListener("submit", (event) => {
         event.preventDefault();
         var validationMessages = [];
         let formElements = this.__myForm.getElementsByTagName("input");
         for (let i = 0; i < formElements.length; i++) {
            const element = formElements[i];
            let elementValidations = element.dataset.validation;
            if (elementValidations) {
               let elementValidationArray = elementValidations.split(" ");
               for (let j = 0; j < elementValidationArray.length; j++) {
                  const func = elementValidationArray[j];
                  var message = this[func](element);
                  if (message.length > 0) {
                     validationMessages.push(message);
                  }
               }
            }
         }
         var summeryValidation = document.querySelector(".summery-validation");
         summeryValidation.innerHTML = "";
         for (let i = 0; i < validationMessages.length; i++) {
            const message = validationMessages[i];
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(message));
            summeryValidation.appendChild(li);
         }
      });
   }

   notEmpty(element) {
      let label = element.dataset.label;
      if (element.value === "") {
         return "فیلد" + " " + label + " " + "نباید خالی بماند";
      }
      return "";
   }

   isMobile(element) {
      let label = element.dataset.label;
      const re = /^09[0|1|2|3][0-9]{8}$/;
      if (!re.test(element.value)) {
         return "قالب" + " " + label + " " + "نادرست است";
      }
      return "";
   }
}

new FormValidator(document.getElementById("popup-form"));
