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

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
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
// 	} else {
// 		minResult = 'are equal';
// 		return minResult;
// 	}
// };

// const max = (a, x) => {
// 	if (a < x) {
// 		maxResult = x;
// 		return maxResult;
// 	} else if (a > x) {
// 		maxResult = a;
// 		return maxResult;
// 	} else {
// 		maxResult = 'are equal';
// 		return maxResult;
// 	}
// };

// const min1 = (a, b) => (a > b ? a : b);
// const max1 = (a, b) => (a < b ? b : a);

// console.log(min(111, -111));
// console.log(max(333, -333));

// console.log(min1(111, -111));
// console.log(max1(333, -333));

// ////////////////////////////
// ///////PALINDROM////////////
// ////////////////////////////

// const word1 = 'ABba';
// const word2 = 'maMam';
// const word3 = 'USA';
// const word4 = 'caRarac';
// const word5 = 'RussIa';

// const palindrome = (someWord) => {
// 	return someWord.toLowerCase() === someWord.toLowerCase().split('').reverse().join('');
// };

// console.log(palindrome(`${word1}`));
// console.log(palindrome(`${word2}`));
// console.log(palindrome(`${word3}`));
// console.log(palindrome(`${word4}`));
// console.log(palindrome(`${word5}`));

/////////////////////////////////////
/////////REPLACEMENT/////////////////
/////////////////////////////////////

// const arr = [1, 17, 20, 31, 40, 68, 99, 100, 6, 10];
// const replaceTo = 'zero';

// const replaceNulltoZero = (array, word) => {
// 	let result = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		let str = arr[i].toString();
// 		let newStr = str.replace(/0/g, word);
// 		arr[i] = newStr;

// 		if (newStr / 1) {
// 			result.push(+newStr);
// 		} else result.push(newStr);
// 	}

// 	return result;
// };

// console.log(replaceNulltoZero(arr, replaceTo));

/////////////////////////////////////////////////
/////////////////lesson-4////////////////////////
/////////////////////////////////////////////////

///task - 1

// function sum(a) {
// 	return (b) => {
// 		return a + b;
// 	};
// }
// console.log(sum(2)(5));

///task - 2

// const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
// const element = document.getElementsByClassName('text');

// const colorChange = function () {
// 	let i = 0;
// 	return function (e) {
// 		e.currentTarget.style.color = colors[i];
// 		console.log(this);
// 		++i;
// 		if (i === colors.length) {
// 			i = 0;
// 		}
// 	};
// };

// const colorChanged = colorChange;

// for (let i = 0; i < element.length; i++) {
// 	element[i].addEventListener('click', colorChanged());
// }

////////////////////////////////////
//////////////lesson-5//////////////
////////////////////////////////////

// Task - 1: Преобразование формата даты//

const date = "2020-08-10";
const date1 = "2021-11-26";

const datetransform = (str) => {
  let arr = str.split("-").reverse();
  console.log(arr);
  if (arr[0] > 0 && arr[0] <= 31 && arr[1] >= 1 && arr[1] <= 12) {
    return arr.join(".");
  } else return "invalid date";
};

const s = datetransform;
console.log(s(date1));

// Task - 2: Поиск объектов размещения//

const data = [
  { country: "Russia", city: "Saint Petersburg", hotel: "Hotel Leopold" },
  { country: "Spain", city: "Santa Cruz de Tenerife", hotel: "Apartment Sunshine" },
  { country: "Slowakia", city: "Vysokie Tatry", hotel: "Villa Kunerad" },
  { country: "Germany", city: "Berlin", hotel: "Hostel Friendship" },
  { country: "Indonesia", city: "Bali", hotel: "Ubud Bali Resort&SPA" },
  { country: "Netherlands", city: "Rotterdam", hotel: "King Kong Hostel" },
  { country: "Marocco", city: "Ourika", hotel: "Rokoko Hotel" },
  { country: "Germany", city: "Berlin", hotel: "Hotel Rehberge Berlin Mitte" },
];

const findPlace = (arr, find) => {
  let result = [];
  arr.forEach((item) => {
    if (
      item.country.toLowerCase() === find.toLowerCase() ||
      item.city.toLowerCase() === find.toLowerCase() ||
      item.hotel.toLowerCase() === find.toLowerCase()
    ) {
      result.push(
        `Страна: ${item.country.toString()}`,
        `город: ${item.city.toString()}`,
        `отель: ${item.hotel.toString()}`
      );
    }
  });
  return result;
};

const findPlace1 = findPlace;
console.log(findPlace1(data, "russia"));
console.log(findPlace(data, "Germany"));
