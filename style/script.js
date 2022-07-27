let city="";
let searchCity = $("#search-city");
let searchButton = $("#search-btn");
let clearButton = $("#clear-history");
let currentCity = $("#current-city");
let currentTemperature = $("#temperature");
let currentHumidty= $("#humidity");
let currentWSpeed=$("#wind-speed");
let sCity=[];

function find(c){
    for (i = 0; i < sCity.length; i++){
        if(c.toUpperCase()===sCity[i]){
            return -1;
        }
    }
    return 1;
}

const APIKey = "dbd52d050a44aafbfe01d482263d9cf0"

function displayWeather(event){
    event.preventDefault();

}