//Merge and sorted two arrays:
//mergeSortedArrays([0,3,4,31], [4,6,30]);
//result: [0, 3, 4, 4, 6, 30, 31]


function myMergeSortedArrays(array1, array2){
	//check the input
	if(!Array.isArray(array1) || !Array.isArray(array2)){
		return 'It\'s not an array!'
	}

	let newArray = [];

	newArray.push(...array1);
	newArray.push(...array2);	

	return newArray.sort((a, b) => a-b).join()
}


function mergeSortedArrays(array1, array2){
	const mergedArray = [];
	let array1Item = array1[0];
	let array2Item = array2[0];
	let i = 1;
	let y = 1;

	//check input
	if(array1.length === 0){
		return array2;
	}
	if(array2.length === 0){
		return array1;
	}

	while(array1Item || array2Item){

		//console.log(array1Item, array2Item);

		//Using !array2Item ensures that all items 
		//in array2 have been processed, allowing the 
		//loop to continue inserting only array2 items.

		if(!array2Item || array1Item < array2Item){
			mergedArray.push(array1Item);
			array1Item = array1[i];
			i++
		}else{
			mergedArray.push(array2Item);
			array2Item = array2[y];
			y++
		}		
	}

	return mergedArray.join(',');
}


function mergeSortedArrays1(array1, array2){
	const mergeArray = [...array1, ...array2].sort((a,b) => a-b).join(',');
	return mergeArray;
}




//console.log(myMergeSortedArrays([0,3,4,31,50,56], [4,6,30,60]))
//console.log(mergeSortedArrays([0,3,4,31], [4,6,30]))
console.log(mergeSortedArrays1([0,3,4,31], [4,6,30]))