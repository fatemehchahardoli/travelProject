let mydata = {
    Iran: ['tehran', 'hamedan', 'esfahan'],
    Canada: ['sangapor', 'turkye'],
    US: ['losonjeles','us']
}
let State = document.getElementById("countrySelect");
let city = document.getElementById("citySelect");


function countrySelectFunction() {
    let valueState = State.value;
    if(valueState=='Please Select'){
        city.innerHTML = '';
        city.innerHTML= '<Option>Please City...</Option>';
    }
    else{
     city.innerHTML = '';
        mydata[valueState].forEach(item => {
            city.innerHTML += '<Option>' + item + '</Option>';
        });
    }
       


}

let apiData = {
    url: 'https://api.openweathermap.org/data/2.5/weather?q=',
    key: '26c4d8ad14b57209671494df9bd9fcb9'
}

function fetchData () {
    let countryValue = city.value

    fetch(`${apiData.url}${countryValue}&&appid=${apiData.key}`).
        then(res => res.json())
        .then(data => {
            console.log(data);

            showData(data)
        })
}
function showData (data) {
    let cityElem = document.querySelector('.city')
    cityElem.innerHTML = `${data.name}, ${data.sys.country}`

    let dateElem = document.querySelector('.date')
    dateElem.innerHTML = showDate()

    let tempElem = document.querySelector('.temp')
    tempElem.innerHTML = `${Math.floor(data.main.temp - 273.15)}°c`

    let weatherElem = document.querySelector('.weather')
    weatherElem.innerHTML = `${data.weather[0].main}`


}
function showDate () {


    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let now = new Date()

    let day = days[now.getDay()]
    let month = months[now.getMonth()]
    let year = now.getFullYear()
    let date = now.getDate()
    
    return `${day} ${date} ${month} ${year}`

}
city.addEventListener('change',function(){
  fetchData()
  }) 