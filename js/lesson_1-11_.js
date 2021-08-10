// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// let result = 0;

// for (let i = 0; arr.length > i; i += 1)
// {
//   if (arr[i] === 0)
//   {
//     result += 1;
//   } else
//   {
//     result *= arr[i];
//   }
// }

// for (let i = 0; arr.length > i; i += 1) {
//   if (arr[i] > 5 && arr[i] < 10) {
//     console.log(arr[i]);
//   }
// }

// for (let i = 0; arr.length > i; i += 1) {
//   if (arr[i] % 2 === 0) {
//     console.log(arr[i]);
//   }
// }

// const min = (a, x) => {
//   if (a > x) {
//     minResult = x;
//     return minResult;
//   } if (a < x) {
//     minResult = a;
//     return minResult;
//   }
//   minResult = 'are equal';
//   return minResult;
// };

// const max = (a, x) => {
//   if (a < x) {
//     maxResult = x;
//     return maxResult;
//   } if (a > x) {
//     maxResult = a;
//     return maxResult;
//   }
//   maxResult = 'are equal';
//   return maxResult;
// };

// const min1 = (a, b) => (a > b ? a : b);
// const max1 = (a, b) => (a < b ? b : a);

// console.log(min(111, -111));
// console.log(max(333, -333));

// console.log(min1(111, -111));
// console.log(max1(333, -333));

// const word1 = 'ABba';
// const word2 = 'maMam';
// const word3 = 'USA';
// const word4 = 'caRarac';
// const word5 = 'RussIa';

// const palindrome = (someWord) => someWord.toLowerCase()
//   === someWord.toLowerCase().split('').reverse().join('');

// console.log(palindrome(`${word1}`));
// console.log(palindrome(`${word2}`));
// console.log(palindrome(`${word3}`));
// console.log(palindrome(`${word4}`));
// console.log(palindrome(`${word5}`));

// const arr1 = [1, 17, 20, 31, 40, 68, 99, 100, 6, 10];
// const replaceTo = 'zero';

// const replaceNulltoZero = (array, word) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     const str = arr[i].toString();
//     const newStr = str.replace(/0/g, word);
//     arr[i] = newStr;

//     if (newStr / 1) {
//       result.push(+newStr);
//     } else result.push(newStr);
//   }

//   return result;
// };

// console.log(replaceNulltoZero(arr, replaceTo));

// function sum(a) {
//   return (b) => a + b;
// }
// console.log(sum(2)(5));

// const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
// const element = document.getElementsByClassName('text');

// const colorChange = function () {
//   let i = 0;
//   return function (e) {
//     e.currentTarget.style.color = colors[i];
//     console.log(this);
//     i += 1;
//     if (i === colors.length) {
//       i = 0;
//     }
//   };
// };

// const colorChanged = colorChange;

// for (let i = 0; i < element.length; i += 1) {
//   element[i].addEventListener('click', colorChanged());
// }

// const date = '2020-08-10';
// const date1 = '2021-11-26';

// const datetransform = (str) => {
//   const arr = str.split('-').reverse();
//   console.log(arr);
//   if (arr[0] > 0 && arr[0] <= 31 && arr[1] >= 1 && arr[1] <= 12) {
//     return arr.join('.');
//   } return 'invalid date';
// };

// const s = datetransform;
// console.log(s(date1));

// const data = [
//   { country: 'Russia', city: 'Saint Petersburg', hotel: 'Hotel Leopold' },
//   { country: 'Spain', city: 'Santa Cruz de Tenerife', hotel: 'Apartment Sunshine' },
//   { country: 'Slowakia', city: 'Vysokie Tatry', hotel: 'Villa Kunerad' },
//   { country: 'Germany', city: 'Berlin', hotel: 'Hostel Friendship' },
//   { country: 'Indonesia', city: 'Bali', hotel: 'Ubud Bali Resort&SPA' },
//   { country: 'Netherlands', city: 'Rotterdam', hotel: 'King Kong Hostel' },
//   { country: 'Marocco', city: 'Ourika', hotel: 'Rokoko Hotel' },
//   { country: 'Germany', city: 'Berlin', hotel: 'Hotel Rehberge Berlin Mitte' },
// ];

// const findPlace1 = findPlace;
// console.log(findPlace1(data, 'russia'));
// console.log(findPlace(data, 'Germany'));

// function searchStr(str, arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (Object.values(arr[i]).includes(str)) {
//       return Object.values(arr[i]);
//     }
//   }
//   return 'пусто';
// }

// console.log(searchStr('France', data));
// console.log(searchStr('Germany', data));

// const palindrome1 = (someWord) => someWord.toLowerCase()
//   === someWord.toLowerCase().split('').reverse().join('');

// console.log(palindrome('SaSsSaS'));

// const hotels = [
//   { name: 'Hotel Leopold', city: 'Saint Petersburg', country: 'Russia' },
//   { name: 'Apartment Sunshine', city: 'Santa Cruz de Tenerife', country: 'Spain' },
//   { name: 'Villa Kunerad', city: 'Vysokie Tatry', country: 'Slowakia' },
//   { name: 'Hostel Friendship', city: 'Berlin', country: 'Germany' },
//   { name: 'Radisson Blu Hotel', city: 'Kyiv', country: 'Ukraine' },
//   { name: 'Paradise Hotel', city: 'Guadalupe', country: 'Mexico' },
//   { name: 'Hotel Grindewald', city: 'Interlaken', country: 'Switzerland' },
//   { name: 'The Andaman Resort', city: 'Port Dickson', country: 'Malaysia' },
//   { name: 'Virgin Hotel', city: 'Chicago', country: 'USA' },
//   { name: 'Grand Beach Resort', city: 'Dubai', country: 'United Arab Emirates' },
//   { name: 'Shilla Stay', city: 'Seoul', country: 'South Korea' },
//   { name: 'San Firenze Suites', city: 'Florence', country: 'Italy' },
//   { name: 'The Andaman Resort', city: 'Port Dickson', country: 'Malaysia' },
//   { name: 'Black Penny Villas', city: 'BTDC, Nuca Dua', country: 'Indonesia' },
//   { name: 'Koko Hotel', city: 'Tokyo', country: 'Japan' },
//   { name: 'Ramada Plaza', city: 'Istanbul', country: 'Turkey' },
//   { name: 'Waikiki Resort Hotel', city: 'Hawaii', country: 'USA' },
//   { name: 'Puro Hotel', city: 'Krakow', country: 'Poland' },
//   { name: 'Asma Suites', city: 'Santorini', country: 'Greece' },
//   { name: 'Waikiki Resort Hotel', city: 'Hawaii', country: 'USA' },
//   { name: 'Cityden Apartments', city: 'Amsterdam', country: 'Netherlands' },
//   { name: 'Mandarin Oriental', city: 'Miami', country: 'USA' },
//   { name: 'Concept Terrace Hotel', city: 'Rome', country: 'Italy' },
//   { name: 'Ponta Mar Hotel', city: 'Fortaleza', country: 'Brazil' },
//   { name: 'Four Seasons Hotel', city: 'Sydney', country: 'Australia' },
//   { name: 'Le Meridien', city: 'Nice', country: 'France' },
//   { name: 'Apart Neptun', city: 'Gdansk', country: 'Poland' },
//   { name: 'Lux Isla', city: 'Ibiza', country: 'Spain' },
//   { name: 'Nox Hostel', city: 'London', country: 'UK' },
//   { name: 'Leonardo Vienna', city: 'Vienna', country: 'Austria' },
//   { name: 'Adagio Aparthotel', city: 'Edinburgh', country: 'UK' },
//   { name: 'Steigenberger Hotel', city: 'Hamburg', country: 'Germany' },
//   { name: 'Waikiki Resort Hotel', city: 'Hawaii', country: 'USA' },
// ];

// const search = (arr, find) => (result = arr.filter((item) => item.country === find
//   || item.city === find
//   || item.name === find));

// console.log(search(hotels, 'UK'));

// const sorter = (arr) => {
//   const map = new Object();
//   for (const k in arr) {
//     if (map[arr[k].country] === undefined) {
//       map[arr[k].country] = new Array(arr[k].city);
//     } else {
//       map[arr[k].country] = [`${map[arr[k].country]}, ${arr[k].city}`];
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

// / //// /////////////////////////////
//   / /// ////////lesson-7//////////////
//   / /;/// /////////////////////////////

// const obj1 = {
//   a: 'a',
//   b: {
//     a: 'a',
//     b: 'b',
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
//     b: 'b',
//     a: 'a',
//   },
//   a: 'a',
// };
// const obj3 = {
//   a: {
//     c: {
//       a: 'a',
//     },
//     b: 'b',
//     a: 'a',
//   },
//   b: 'b',
// };

// const studentsData = [
//   {
//     firstName: 'Василий',
//     lastName: 'Петров',
//     admissionYear: 2019,
//     courseName: 'Java',
//   },
//   {
//     firstName: 'Иван',
//     lastName: 'Иванов',
//     admissionYear: 2020,
//     courseName: 'JavaScript',
//   },
//   {
//     firstName: 'Александр',
//     lastName: 'Федоров',
//     admissionYear: 2017,
//     courseName: 'Python',
//   },
//   {
//     firstName: 'Николай',
//     lastName: 'Петров',
//     admissionYear: 2020,
//     courseName: 'Android',
//   },
// ];

// class User
// {
//   constructor (firstName, lastName)
//   {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   get fullName()
//   {
//     //геттер
//     return this.firstName + " " + this.lastName;
//   }
// }

// class Student extends User
// {
//   admissionYear = 0;
//   constructor (firstName, lastName, admissionYear, courseName)
//   {
//     super(firstName, lastName);
//     this.admissionYear = admissionYear;
//     this.courseName = courseName;
//   }
//   //геттер
//   get courseNumber()
//   {
//     let result = "0";
//     let course = new Date().getFullYear() - this.admissionYear;
//     if (course < 1)
//     {
//       return (result = "1 курс");
//     }
//     return (result = `${course} курс`);
//   }
// }

// class Students
// {
//   data = new Array();

//   constructor (students)
//   {
//     students.forEach((element) =>
//     {
//       this.data.push(new Student(element.firstName,
//         element.lastName,
//         element.admissionYear,
//         element.courseName));
//     });
//   }

//   sortByCourseNumber(data)
//   {
//     let currentYear = new Date().getFullYear();
//     return data.sort((a, b) =>
//     (currentYear - a.admissionYear >
//       currentYear - b.admissionYear ?
//       1 : -1));
//   }

//   get getInfo()
//   {
//     const data = this.sortByCourseNumber(this.data);
//     let result = [];

//     data.forEach((el) =>
//     {
//       result.push(`${el.fullName} - ${el.courseName}, ${el.courseNumber}`);
//     });

//     return result;
//   }
// }

// const students = new Students(studentsData);
// console.log(students.getInfo);

// const colors1 = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
// const element1 = document.getElementsByClassName('text');

// const colorChange1 = function () {
//   let i = 0;
//   return function (e) {
//     e.currentTarget.style.color = colors1[i];
//     i += 1;
//     if (i === colors1.length) {
//       i = 0;
//     }
//   };
// };

// const colorChanged1 = colorChange1;

// for (let i = 0; i < element1.length; i += 1) {
//   element1[i].addEventListener('click', colorChanged1());
// }

// const colors2 = {
//   data: ['magenta', 'cyan', 'firebrick', 'blue'],
//   [Symbol.iterator]() {
//     return {
//       current: 0,
//       data: this.data,

//       next() {
//         this.current += 1;

//         return {
//           done: this.current === this.data.length,
//           value: { color: this.data[this.current], index: this.current },
//         };
//       },
//     };
//   },
// };

// for (const k of colors2) {
//   console.log(k);
// }

// const colors3 = {
//   data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
// };

// colors3[Symbol.iterator] = function () {
//   let index = 0;
//   const { data } = this;
//   const last = this.data.length;
//   return {
//     next() {
//       if (index < last) {
//         return { done: false, value: data[index += 1] };
//       }
//       index = 0;
//       return {
//         done: false,
//         value: data[index += 1],
//       };
//     },
//   };
// };

// const changeColorP = (item) => (e) => {
//   e.target.style.color = item.next().value;
// };

// const p = document.querySelectorAll('p');

// p.forEach((item) => {
//   const i = colors3[Symbol.iterator]();
//   item.addEventListener('click', changeColorP(i));
// });

// const data1 = [
//   {
//     name: 'Hotel Leopold',
//     city: 'Saint Petersburg',
//     country: 'Russia',
//     imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
//   },
//   {
//     name: 'Apartment Sunshine',
//     city: 'Santa  Cruz de Tenerife',
//     country: 'Spain',
//     imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
//   },
//   {
//     name: 'Villa Kunerad',
//     city: 'Vysokie Tatry',
//     country: 'Slowakia',
//     imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
//   },
//   {
//     name: 'Hostel Friendship',
//     city: 'Berlin',
//     country: 'Germany',
//     imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
//   },
//   {
//     name: 'Radisson Blu Hotel',
//     city: 'Kyiv',
//     country: 'Ukraine',
//     imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
//   },
//   {
//     name: 'Paradise Hotel',
//     city: 'Guadalupe',
//     country: 'Mexico',
//     imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
//   },
//   {
//     name: 'Hotel Grindewald',
//     city: 'Interlaken',
//     country: 'Switzerland',
//     imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
//   },
//   {
//     name: 'The Andaman Resort',
//     city: 'Port Dickson',
//     country: 'Malaysia',
//     imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
//   },
// ];

// data1.forEach((el) =>
// {
//   // looking for an element in which we will insert the blocks
//   const recList = document.querySelector('.recommend__list');
//   // create block
//   const li = document.createElement('li'); // create tag "li"
//   li.classList.add('recommend__list-item');
//   const img = document.createElement('img'); // create tag "img"
//   const hotelName = document.createElement('a'); // create tag "a"
//   const hotelLocation = document.createElement('p'); // create tag "p"
//   // content block
//   img.src = el.imageUrl; // add image source from array "data"
//   hotelName.href = '#'; // add link
//   hotelName.textContent += el.name; // add content(hotel name)
//   hotelLocation.textContent += `${el.city}, ${el.country}`; // add content(location)
//   // build block
//   li.appendChild(img); // insert hotel's foto
//   li.appendChild(hotelName); // insert hotel's name
//   li.appendChild(hotelLocation); // insert hotel's location(city and country)

//   // insert block into DOM
//   recList.appendChild(li); /// insert into DOM hotels list with img, name and location});
/// /////////////////////
// const pickerForm = document.querySelector('.form-desktop-people__picker');
// const peoplePicker = document.querySelector('.people-picker');
// const childrenPicker = document.querySelector('.picker__children');
// const childrenAgePicker = document.querySelector('.picker__age');
// const childrenAgePickerSelect = document.querySelector('#age');
// const adultsInput = document.querySelector('#adults');
// const childrenInput = document.querySelector('#children');
// const roomsInput = document.querySelector('#rooms');
// /// ////////////////////
// const plusAdults = document.querySelector('.picker__adults button.plus');
// const plusChildren = document.querySelector('.picker__children button.plus');
// const plusRooms = document.querySelector('.picker__rooms button.plus');
// /// ////////////////////
// const minusAdults = document.querySelector('.picker__adults button.minus');
// const minusChildren = document.querySelector('.picker__children button.minus');
// const minusRooms = document.querySelector('.picker__rooms button.minus');
// /// ///////////////////
// const styleBorderDisable = '1px solid #CECECE';
// const styleColorDisable = '#CECECE';
// const styleBorderEnable = '1px solid #3077c6';
// const styleColorEnable = '#3077c6';
// /// ///////////////////////
// let adultsCount = 0;
// let childrenCount = 0;
// let roomsCount = 0;
// /// ////////////////////

// // Установка значений в placeholder
// const setValue = () => {
//   peoplePicker.setAttribute(
//     'placeholder',
//     `Adults - ${adultsCount} Child - ${childrenCount} Rooms - ${roomsCount}`
//   );
// };
// setValue();
// /// /////////////////////

// // присвоение класса нашему блоку picker при выполнении
// const setPickerVisibleClass = () => {
//   pickerForm.classList.toggle('visible');
// };

// // присвоение класса нашему блоку picker при клике
// peoplePicker.addEventListener('click', setPickerVisibleClass);
// /// ////////////////////////////////////////////////

// const clickChildren = (e) => {
//   e.preventDefault(); // отключаем дефолтное поведение браузера при клике по button
//   /// /////////////////////////////
//   if (e.target.classList.contains('plus')) {
//     childrenCount += 1;
//     childrenInput.value = childrenCount;
//   } else if (e.target.classList.contains('minus')) {
//     childrenCount -= 1;
//     childrenInput.value = childrenCount;
//   }
//   /// /////////////////////////////
//   if (childrenInput.value <= 0) {
//     minusChildren.style.border = styleBorderDisable;
//     minusChildren.style.color = styleColorDisable;
//     minusChildren.disabled = true;
//     minusChildren.removeEventListener('click', clickChildren, true);
//   } else {
//     minusChildren.style.border = styleBorderEnable;
//     minusChildren.style.color = styleColorEnable;
//     minusChildren.disabled = false;
//   }
//   /// /////////////////////////////
//   if (childrenInput.value >= 10) {
//     plusChildren.style.border = styleBorderDisable;
//     plusChildren.style.color = styleColorDisable;
//     plusChildren.disabled = true;
//     plusChildren.removeEventListener('click', clickChildren, true);
//   } else {
//     plusChildren.style.border = styleBorderEnable;
//     plusChildren.style.color = styleColorEnable;
//     plusChildren.disabled = false;
//   }
//   /// //////////////////////////////
//   setValue();
// };

// plusChildren.addEventListener('click', clickChildren);
// minusChildren.addEventListener('click', clickChildren);

// /// /////////////////////////////////////////////////////////
// const childrenAgePickerShow = (e) => {
//   if (childrenInput.value >= 1) {
//     childrenAgePicker.style.display = 'block';
//     for (let i = childrenInput.value; i >= 2 && i < 11; i += 1) {
//       if (i < 11) {
//         const selectClone = childrenAgePickerSelect.cloneNode(true);
//         selectClone.id = '';
//         selectClone.classList = 'inner';
//         childrenAgePickerSelect.parentNode.insertBefore(
//           selectClone,
//           childrenAgePickerSelect.nextSibling
//         );
//       }
//     }
//   }
// };

// const childrenAgePickerHide = (e) => {
//   const removeLastSelect = document.querySelector('select.inner:last-child');
//   if (childrenInput.value < 1) {
//     childrenAgePicker.style.display = 'none';
//   } else if (childrenInput.value >= 1) {
//     removeLastSelect.remove();
//   }
// };

// plusChildren.addEventListener('click', childrenAgePickerShow);
// minusChildren.addEventListener('click', childrenAgePickerHide);

// /// /////////////////////////////////////////////////////////
// const clickAdults = (e) => {
//   e.preventDefault(); // отключаем дефолтное поведение браузера при клике по button

//   if (e.target.classList.contains('plus')) {
//     adultsCount += 1;
//     adultsInput.value = adultsCount;
//   } else if (e.target.classList.contains('minus')) {
//     adultsCount -= 1;
//     adultsInput.value = adultsCount;
//   }

//   if (adultsInput.value <= 0) {
//     minusAdults.style.border = styleBorderDisable;
//     minusAdults.style.color = styleColorDisable;
//     minusAdults.disabled = true;
//   } else {
//     minusAdults.style.border = styleBorderEnable;
//     minusAdults.style.color = styleColorEnable;
//     minusAdults.disabled = false;
//   }
//   if (adultsInput.value >= 30) {
//     plusAdults.style.border = styleBorderDisable;
//     plusAdults.style.color = styleColorDisable;
//     plusAdults.disabled = true;
//   } else {
//     plusAdults.style.border = styleBorderEnable;
//     plusAdults.style.color = styleColorEnable;
//     plusAdults.disabled = false;
//   }

//   setValue();
// };

// plusAdults.addEventListener('click', clickAdults);
// minusAdults.addEventListener('click', clickAdults);

// const clickRooms = (e) => {
//   e.preventDefault(); // отключаем дефолтное поведение браузера при клике по button

//   if (e.target.classList.contains('plus')) {
//     roomsCount += 1;
//     roomsInput.value = roomsCount;
//   } else if (e.target.classList.contains('minus')) {
//     roomsCount -= 1;
//     roomsInput.value = roomsCount;
//   }

//   if (roomsInput.value <= 0) {
//     minusRooms.style.border = styleBorderDisable;
//     minusRooms.style.color = styleColorDisable;
//     minusRooms.disabled = true;
//   } else {
//     minusRooms.style.border = styleBorderEnable;
//     minusRooms.style.color = styleColorEnable;
//     minusRooms.disabled = false;
//   }
//   if (roomsInput.value >= 30) {
//     plusRooms.style.border = styleBorderDisable;
//     plusRooms.style.color = styleColorDisable;
//     plusRooms.disabled = true;
//   } else {
//     plusRooms.style.border = styleBorderEnable;
//     plusRooms.style.color = styleColorEnable;
//     plusRooms.disabled = false;
//   }

//   setValue();
