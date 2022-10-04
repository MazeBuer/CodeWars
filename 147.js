/* You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup taht you are organizing for the first time. Your task is to return thenumber of JS developers from Europe. your function should return a #. */

var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

function countDevelopers(list) {
    return list.filter(dev => dev.language === "JavaScript" && dev.continent === 'JavaScript').length
}

//we have an object, we want to filter in only part of the objects that contain JS and Europe. to do this in the filter use a param (dev) and dev.object gets you the specific object type you want. 