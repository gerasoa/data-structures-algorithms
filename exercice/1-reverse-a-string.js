//create a function that reverses a string:
//'!dlrow olleH' should de: 
//'Hello world!'

/*
.push: Add an item at the end of the array
.join(''): The join method is used to concatenate the elements of the reversed array into a single string. 
*/

function reverse1(str){
	//check input
	if(!str || str.lenght < 2 || typeof str !== "string"){
		return 'It\'s not a string'
	}

	const backwards = [];
	const strLength = str.length - 1;

	for(let i=str.length; i>=0; i--){
		backwards.push(str[i]);
	}
	return backwards.join('');
}

/*
*/
function reverse2(str){
	//check input
	if(!str || str.lenght < 2 || typeof str !== "string"){
		return 'It\'s not a string'
	}

	return str.split('').reverse().join('');
}

/*
Solving with arrow function:
*/
const reverse3 = str => str.split('').reverse().join('');

/*
[...str] : The spread operator (...) is used to convert the string str into an array of characters.
*/
const reverse4 = str => [...str].reverse().join('');


console.log(reverse1('!dlrow olleH'));
console.log(reverse2('!dlrow olleH'));
console.log(reverse3('!dlrow olleH'));
console.log(reverse4('!dlrow olleH'));
