let mydata = {
    Iran: ['tehtan', 'hamedan', 'esfahan'],
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