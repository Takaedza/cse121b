/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Takaedza Godfrey Mandinyenya",
    photo: "images/image.png",
    favoriteFoods: [
        'Sadza',
        'Rice',
        'Cottage Pie',
        'Spinach Pie',
        'Mashroom sour'
    ],
    hobbies: [
        'Reading Books',
        'Writing Poems',
        'Going to poetry events',
        'Traveling',
        'Hanging with friends',
        'Going to poetry slams'
    ],
    placesLived: [

    ]
}


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Harare',
        length: '10 years'
    },
    {
        place: 'Shurugwi',
        length: '3 years'
    },
    {
        place: 'Gweru',
        length: '12 years'
    },
    {
        place: 'Marondera',
        length: '6 months'
    }
);



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', `Profile photo of ${myProfile.name}`);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.innerHTML = `<strong>${place.place}</strong>`;
    document.querySelector('#places-lived').appendChild(dt);

    let dd = document.createElement('dd');
    dd.innerHTML = place.length;
    document.querySelector('#places-lived').appendChild(dd);

    let br = document.createElement('br');
    document.getElementById('places-lived').appendChild(br);
})
