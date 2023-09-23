/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Takaedza Godfrey Mandinyenya";
let currentYear = new Date().getFullYear();
let profilePicture = "images/image.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const yearElement = document.querySelector("#year");
const foodElement = document.getElementById("food");
const imageElement = document.querySelector('#home picture img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile picture of ${fullName}`);




/* Step 5 - Array */
const favFoods = ["Rice and chicken", "Sadza", "Macaroni and mincemeat", "Cottage pie", "Spinach pie"];

foodElement.textContent = favFoods.join(",");

const singleFavFood = "Cheese cake";

favFoods.push(singleFavFood);

foodElement.textContent = favFoods.join(",");

favFoods.shift();

foodElement.innerHTML += "<br>" + favFoods.join("<br>");

favFoods.pop();

foodElement.innerHTML += "<br>" + favFoods.join("<br>");