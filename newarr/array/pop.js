//removeslast element
let plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop()); //tomato
console.log(plants); //[ 'broccoli', 'cauliflower', 'cabbage', 'kale' ]
plants.pop(); //remove kale
console.log(plants); //[ 'broccoli', 'cauliflower', 'cabbage' ]

//removing last element
/**let myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

let popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'*/

let myFish = { 0: 'angel', 1: 'clown', 2: 'mandarin', 3: 'sturgeon', length: 4 };

let popped = myFish.pop(); //same syntax for using apply( )

console.log(myFish); // {0:'angel', 1:'clown', 2:'mandarin', length: 3}

console.log(popped); // 'sturgeon'