function large(arr) {
    let largest = [];
    for (let i = 0; i < arr.length; i++) {

        if (largest < arr[i]) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log(large([3, 5, 6, 9, 12, 15, 14]));