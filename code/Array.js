/*
Array:
lookup 0(1)
push   O(1)
insert O(n)
delete O(n)
*/

const staticArray = ['a', 'b', 'c', 'd']
const dynamicArray = 

const strings = ['a', 'b', 'c', 'd'];

//push - add an item at the end of array
strings.push('e'); //O(1)

//pop - remove the last item of array
strings.pop();
strings.pop();

//unshift - Add alements at the beggining of the array
strings.unshift('x'); //O(n) - Depending on the size of the array

//splice - Insert an item at a specific index and shift the remaining elements to accommodate the new item.
strings.splice(2, 0, 'alien'); //O(n/2) => O(n)


console.log(strings);
