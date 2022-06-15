/*function reverse(arr) {
let rev_arr = [];
for (let i = 0; i < arr.length; i++) {
    rev_arr.push(arr[i]);
}
return rev_arr;

}
console.log(reverse([9, 3, 5, 6, 7, 8]));**/
function reverse(arr) {
    arr.reverse();
    return arr;
}
console.log(reverse([9, 3, 5, 6, 7, 8]));