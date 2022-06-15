let cities = [
    { name: 'UB', population: 3792621 },
    { name: 'Dalanzadgad', population: 8175133 },
    { name: 'Ulaan Ud', population: 2695598 },
    { name: 'Choibalsan', population: 2099451 },
    { name: 'Zuunmod', population: 1526006 }
];
/**let bigCities = [];
for (let i = 0; i < cities.length; i++) {
    if (cities[i].population > 3000000) {
        bigCities.push(cities[i]);
    }
}*/
let bigCities = cities.filter(city => city.population > 3000000);
console.log(bigCities);