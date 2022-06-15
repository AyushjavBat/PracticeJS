let msgArray = []
msgArray[0] = 'Hello'
msgArray[99] = 'world'

if (msgArray.length === 100) {
    console.log('The length is 100.')
}

function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return factorial(n - 1) * n;
    }
}
console.log(factorial(4));
let obj = {
    a: 'one',
    b: 'two',
    a: 'three'
}
console.log(obj);