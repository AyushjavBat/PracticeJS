/**Syntax
 * lastIndexOf(searchElement)
lastIndexOf(searchElement, fromIndex)
The lastIndexOf() method returns the last index at which a given element can be found in the 
array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

*/
let animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// expected output: 1