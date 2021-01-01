import data from "./data.js"
import {createTableElements} from "./main.js";

/*
  ALWAYS USE IMPORTED data ARRAY TO MAKE MANIPULATIONS

  ID for allcities table is #allcities
  ID for singlecity table is #singlecity
/*

/*
* PASS ARRAY TO createTableElements function to fill tables
* first argument - data
* second argument - tableId
* Example createTableElements([{name: "Istanbul"}], "allcities");
*/

/*
    ids for buttons and select

    Population - bigger than 500.000 => #populationBigger
    land area - less than 1000 => #landAreaLess
    Does any city has population less than 100.000? => #isPopulationLess
    Does every city has land area bigger than 100? => #isLandBigger
    city select => #selectcity
*/

/* RESET ACTION */
document.querySelector("#reset").addEventListener("click", () => {
    createTableElements(data, "allcities");
    createTableElements([], "singlecity");
  
});

/* START CODING HERE */

var selectBox = document.querySelector(".custom-select")
data.forEach(element => {
  var option = document.createElement("option");
  option.text=element.name;
  option.value=element.name;
  selectBox.add(option);
  selectBox.appendChild(option);
});

selectBox.addEventListener("change", (element) => {
  const printCities = data.filter(cities => element.target.value === cities.name);
  createTableElements(printCities, "singlecity");
});

document.querySelector("#isLandBigger").addEventListener("click", () => {
  const areaBiggerControl = data.every(city => city.landArea > 100);
  areaBiggerControl ? alert('YES') : alert('NO');
});

document.querySelector("#isPopulationLess").addEventListener("click", () => {
  const populationLessControl = data.some(city => city.population < 100000);
  populationLessControl ? alert('YES') : alert('NO');
});
//Population bigger than 500.000 button
document.querySelector("#populationBigger").addEventListener("click", () => {
    let populationBigger = data.filter(city => city.population > 500000);
    createTableElements(populationBigger, "allcities");
});

//Land area less than 1.000 button
document.querySelector("#landAreaLess").addEventListener("click", () => {
    let landAreaLess = data.filter(city => city.landArea < 1000);
    createTableElements(landAreaLess, "allcities");
});

