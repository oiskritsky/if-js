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

// const date = "2020-08-10";
// const date1 = "2021-11-26";

// const datetransform = (str) => {
//   let arr = str.split("-").reverse();
//   console.log(arr);
//   if (arr[0] > 0 && arr[0] <= 31 && arr[1] >= 1 && arr[1] <= 12) {
//     return arr.join(".");
//   } else return "invalid date";
// };

// const s = datetransform;
// console.log(s(date1));

// Task - 2: Поиск объектов размещения//

// const data = [
//   { country: "Russia", city: "Saint Petersburg", hotel: "Hotel Leopold" },
//   { country: "Spain", city: "Santa Cruz de Tenerife", hotel: "Apartment Sunshine" },
//   { country: "Slowakia", city: "Vysokie Tatry", hotel: "Villa Kunerad" },
//   { country: "Germany", city: "Berlin", hotel: "Hostel Friendship" },
//   { country: "Indonesia", city: "Bali", hotel: "Ubud Bali Resort&SPA" },
//   { country: "Netherlands", city: "Rotterdam", hotel: "King Kong Hostel" },
//   { country: "Marocco", city: "Ourika", hotel: "Rokoko Hotel" },
//   { country: "Germany", city: "Berlin", hotel: "Hotel Rehberge Berlin Mitte" },
// ];

// const findPlace1 = findPlace;
// console.log(findPlace1(data, "russia"));
// console.log(findPlace(data, "Germany"));

// function searchStr(str, arr) {
//   for (let i = 0; i < arr.length; i++) {
//     // console.log(Object.values(arr[i]));
//     if (Object.values(arr[i]).includes(str)) {
//       return Object.values(arr[i]);
//     }
//   }
//   return "пусто";
// }

// console.log(searchStr("France", data));
// console.log(searchStr("Germany", data));

////////////////////////////////////
//////////////lesson-6//////////////
////////////////////////////////////

// 5.Функция palindrome (Слово палиндром может читаться справа-налево и слева-направо одинаково. Прим "шалаш".):
// создайте функцию palindrome, которая будет возвращать bool значение в зависимости от того, является ли переданное функции слово палиндромом или нет;
// теперь уже зная как работать со строками и массивами запишите реализацию этого метода в одну строку.

// const palindrome = (someWord) => someWord.toLowerCase() === someWord.toLowerCase().split("").reverse().join("");

// console.log(palindrome("SaSsSaS"));

// Поиск объектов размещения:
// дан массив;
// напишите функцию поиска, которая будет принимать строку;
// по полученной строке найдите все совпадения в массиве по любому из полей;
// верните масиив строк в формате: страна, город, отель;
// зная как работать с массивами, сократите вашу функцию избавившись от цикла for.

// const hotels = [
//   { name: "Hotel Leopold", city: "Saint Petersburg", country: "Russia" },
//   { name: "Apartment Sunshine", city: "Santa Cruz de Tenerife", country: "Spain" },
//   { name: "Villa Kunerad", city: "Vysokie Tatry", country: "Slowakia" },
//   { name: "Hostel Friendship", city: "Berlin", country: "Germany" },
//   { name: "Radisson Blu Hotel", city: "Kyiv", country: "Ukraine" },
//   { name: "Paradise Hotel", city: "Guadalupe", country: "Mexico" },
//   { name: "Hotel Grindewald", city: "Interlaken", country: "Switzerland" },
//   { name: "The Andaman Resort", city: "Port Dickson", country: "Malaysia" },
//   { name: "Virgin Hotel", city: "Chicago", country: "USA" },
//   { name: "Grand Beach Resort", city: "Dubai", country: "United Arab Emirates" },
//   { name: "Shilla Stay", city: "Seoul", country: "South Korea" },
//   { name: "San Firenze Suites", city: "Florence", country: "Italy" },
//   { name: "The Andaman Resort", city: "Port Dickson", country: "Malaysia" },
//   { name: "Black Penny Villas", city: "BTDC, Nuca Dua", country: "Indonesia" },
//   { name: "Koko Hotel", city: "Tokyo", country: "Japan" },
//   { name: "Ramada Plaza", city: "Istanbul", country: "Turkey" },
//   { name: "Waikiki Resort Hotel", city: "Hawaii", country: "USA" },
//   { name: "Puro Hotel", city: "Krakow", country: "Poland" },
//   { name: "Asma Suites", city: "Santorini", country: "Greece" },
//   { name: "Waikiki Resort Hotel", city: "Hawaii", country: "USA" },
//   { name: "Cityden Apartments", city: "Amsterdam", country: "Netherlands" },
//   { name: "Mandarin Oriental", city: "Miami", country: "USA" },
//   { name: "Concept Terrace Hotel", city: "Rome", country: "Italy" },
//   { name: "Ponta Mar Hotel", city: "Fortaleza", country: "Brazil" },
//   { name: "Four Seasons Hotel", city: "Sydney", country: "Australia" },
//   { name: "Le Meridien", city: "Nice", country: "France" },
//   { name: "Apart Neptun", city: "Gdansk", country: "Poland" },
//   { name: "Lux Isla", city: "Ibiza", country: "Spain" },
//   { name: "Nox Hostel", city: "London", country: "UK" },
//   { name: "Leonardo Vienna", city: "Vienna", country: "Austria" },
//   { name: "Adagio Aparthotel", city: "Edinburgh", country: "UK" },
//   { name: "Steigenberger Hotel", city: "Hamburg", country: "Germany" },
//   { name: "Waikiki Resort Hotel", city: "Hawaii", country: "USA" },
// ];

// const search = (arr, find) => (result = arr.filter((item) => item.country === find || item.city === find || item.name === find));

// console.log(search(hotels, "UK"));

// Сопоставте страны с городами из массива:
// дан массив;
// напишите функцию, которая выберет все уникальные страны и сопоставит с ними города;
// в консоли должен быть выведен примерно такой результат:
// {
//    Australia: ['Sydney'],
//    Germany: ['Berlin', 'Hamburg'],
//    Italy: ['Florence', 'Rome'],
//    USA: ['Chicago', 'Hawaii', 'Miami'],
//    Ukraine: ['Kyiv']
// }

// const sorter = (arr) => {
//   let map = new Object();
//   for (let k in arr) {
//     if (map[arr[k].country] === undefined) {
//       map[arr[k].country] = new Array(arr[k].city);
//     } else {
//       map[arr[k].country] = [map[arr[k].country] + ", " + arr[k].city];
//     }
//   }
//   return map;
// };

// console.log(sorter(hotels));

// const countries = hotels.reduce((acc, item) => {
//   const result = { ...acc };

//   if (!result[item.country]) {
//     result[item.country] = [];
//     console.log(result);
//   }
//   if (!result[item.country].includes(item.city)) {
//     result[item.country].push(item.city);
//   }

//   return result;
// }, {});

////////////////////////////////////
//////////////lesson-7//////////////
////////////////////////////////////

// const obj1 = {
//   a: "a",
//   b: {
//     a: "a",
//     b: "b",
//     c: {
//       a: 1,
//     },
//   },
// };
// const obj2 = {
//   b: {
//     c: {
//       a: 1,
//     },
//     b: "b",
//     a: "a",
//   },
//   a: "a",
// };
// const obj3 = {
//   a: {
//     c: {
//       a: "a",
//     },
//     b: "b",
//     a: "a",
//   },
//   b: "b",
// };

// const deepEqual = (a, b) => {
//   ta = typeof a;
//   tb = typeof b;

//   return a && b && ta === "object" && ta === tb ? Object.keys(a).length === Object.keys(b).length && Object.keys(a).every((key) => deepEqual(a[key], b[key])) : a === b;
// };

// console.log(deepEqual(obj1, obj2)); // true
// console.log(deepEqual(obj1, obj3)); // false

const studentsData = [
  {
    firstName: "Василий",
    lastName: "Петров",
    admissionYear: 2019,
    courseName: "Java",
  },
  {
    firstName: "Иван",
    lastName: "Иванов",
    admissionYear: 2020,
    courseName: "JavaScript",
  },
  {
    firstName: "Александр",
    lastName: "Федоров",
    admissionYear: 2017,
    courseName: "Python",
  },
  {
    firstName: "Николай",
    lastName: "Петров",
    admissionYear: 2020,
    courseName: "Android",
  },
];

class User {
  firstName = "";
  lastName = "";
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    //геттер
    return this.firstName + " " + this.lastName;
  }
}

class Student extends User {
  admissionYear = 0;
  courseName = "";
  constructor(firstName, lastName, admissionYear, courseName) {
    super(firstName, lastName);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }
  //геттер
  get courseNumber() {
    let result = "0";
    let course = new Date().getFullYear() - this.admissionYear;
    if (course < 1) {
      return (result = "1 курс");
    }
    return (result = `${course} курс`);
  }
}

class Students {
  data = new Array();

  constructor(students) {
    //

    students.forEach((element) => {
      this.data.push(new Student(element.firstName, element.lastName, element.admissionYear, element.courseName));
    });
  }

  sortByCourseNumber(data) {
    let currentYear = new Date().getFullYear();
    return data.sort((a, b) => (currentYear - a.admissionYear > currentYear - b.admissionYear ? 1 : -1));
  }

  get getInfo() {
    const data = this.sortByCourseNumber(this.data);
    let result = [];

    data.forEach((el) => {
      result.push(`${el.fullName} - ${el.courseName}, ${el.courseNumber}`);
    });

    return result;
  }
}

const students = new Students(studentsData);
console.log(students.getInfo);
