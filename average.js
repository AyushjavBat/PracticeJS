let nums = [-1, 3.0, 12, 15, -4, 1, -12.5, 1, 8];

function average() {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    return (sum / nums.length);

}
console.log(average());
//adding a new feature
console.log('I love coding');