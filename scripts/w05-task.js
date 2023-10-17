/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples").innerHTML;

const templeList = [

]

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3=textContent = temple.templeName + "Temple";
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
};



/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        const data = await response.json();
        templeList.appendChild(data);
        displayTemples(templeList)
    };
}

/* reset Function */
const reset = () => {
    templesElement =[];
}

/* sortBy Function */
let sortBy = async (templeList) => {
    reset();

    let filter = await document.getElementById("sortBy").value;

    switch (filter) {
        case "utah":
            const utahFilter = templeList.filter(templeList => templeList.location.includes("Utah, "));
            displayTemples(utahFilter)
            break;

        case "notutah":
            const notutahFilter = templeList.filter(templeList =>!templeList.location.includes("Utah"));
            displayTemples(notutahFilter);
            break;

        case "older":
            const olderFilter = templeList.filter(templeList => templeList.dedicated(new Date(1950, 0, 1)));
            displayTemples(olderFilter);
            break;

        case "all":
            const allFilter = templeList => templeList.temples;
            displayTemples(allFilter);
            break;

       
        default:
            break;
    }
}


getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});