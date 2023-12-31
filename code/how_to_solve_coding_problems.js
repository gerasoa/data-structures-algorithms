const array1 = ['a','b','c','x'];
const array2 = ['z', 'y', 'x'];

//0(a*b)
function containsCommonItem(array1, array2){ 
	for(let i=0; i<array1.length; i++){
		for(let j=0; j<array2.length; j++){ 
			if(array1[i]===array2[j]){
				return true;
			}
		}
	}
	return false;
}

//console.log(containsCommonItem(array1, array2));

//0(a+b)
function containsCommonItem2(arr1, arr2){
	// loop through first array and create object where properties === items in the array
	let map = {};
	for (let i = 0; i < arr1.length; i++) {
		if(!map[i]){
			const item = arr1[i];
			map[item] = true;
		}		
	}
	console.log(map);
	
	// loop through second array and check if item in second array exists on created object
	for(let j=0; j<arr2.length; j++){
		if(map[arr2[j]]){
			return true;
		}
	}
	return false;

}

//console.log(containsCommonItem2(array1, array2));

function containsCommonItem3(array1, array2){
	return array1.some(item => array2.includes(item));
}
console.log(containsCommonItem3(array1, array2));