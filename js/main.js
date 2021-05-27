// let user = "John Doe";
// let student;

// console.log(user); //"John Doe"
// console.log(student); //"Undefined"

// student = "Oleg";

// user = student;
// console.log(user); //undefined

// let test = 1;

// ++test;
// console.log(test); // 2

// test += "1";
// console.log(test); // 3(21 получилось, т.к. прибавили строку)

// test -= 1;
// console.log(test); // 20 (т.к. оператор - приводит наше значение к Number)

// test = Boolean(test);
// console.log(test); // True

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// let result = 0;

// for (let i = 0; arr.length > i; i++) {
// 	if (arr[i] === 0) {
// 		++result; //на 0 умножать нельзя
// 	} else {
// 		result *= arr[i];
// 	}
// }

// console.log(result);

// for (let i = 0; arr.length > i; i++) {
// 	if (arr[i] > 5 && arr[i] < 10) {
// 		console.log(arr[i]);
// 	}
// }

// for (let i = 0; arr.length > i; i++) {
// 	if (arr[i] % 2 === 0) {
// 		console.log(arr[i]);
// 	}
// }
//////////////////////////////////////////////////////////////
////////////////////lesson-3//////////////////////////////////
//////////////////////////////////////////////////////////////

// const min = (a, x) => {
// 	if (a > x) {
// 		minResult = x;
// 		return minResult;
// 	} else if (a < x) {
// 		minResult = a;
// 		return minResult;
// 	} else a == x;
// 	minResult = "are equal";
// 	return minResult;
// };

// const max = (a, x) => {
// 	if (a < x) {
// 		maxResult = x;
// 		return maxResult;
// 	} else if (a > x) {
// 		maxResult = a;
// 		return maxResult;
// 	} else a == x;
// 	maxResult = "are equal";
// 	return maxResult;
// };

// console.log(min(111, -111));
// console.log(max(333, -333));

//////////////////////////////
/////////PALINDROM////////////
//////////////////////////////

// const word1 = "ABba";
// const word2 = "maMam";
// const word3 = "USA";
// const word4 = "caRarac";
// const word5 = "RussIa";

// const palindrome = (someWord) => {
// 	return someWord.toLowerCase() === someWord.toLowerCase().split("").reverse().join("");
// };

// console.log(palindrome(`${word1}`));
// console.log(palindrome(`${word2}`));
// console.log(palindrome(`${word3}`));
// console.log(palindrome(`${word4}`));
// console.log(palindrome(`${word5}`));

///////////////////////////////////////
///////////REPLACEMENT/////////////////
///////////////////////////////////////

const arr = [1, 17, 20, 31, 40, 68, 99, 100, 6, 10];
const replaceTo = 'zero';

const replaceNulltoZero = (array, word) => {
	array.sort((a, b) => a - b);
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		let str = arr[i].toString();
		let newStr = str.replace(/0/g, word);
		arr[i] = newStr;
		result.push(newStr);
	}

	return result;
};

console.log(replaceNulltoZero(arr, replaceTo));
