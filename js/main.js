let user = "John Doe";
let student;

console.log(user); //"John Doe"
console.log(student); //"Undefined"

let student = "Oleg";

user = student;
console.log(user); //undefined

let test = 1;

++test;
console.log(test); // 2

test += "1";
console.log(test); // 3(21 получилось, т.к. прибавили строку)

test -= 1;
console.log(test); // 20 (т.к. оператор - приводит наше значение к Number)

test = Boolean(test);
console.log(test); // True

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let result = 0;

for (let i = 0; arr.length > i; i++) {
	if (arr[i] === 0) {
		++result; //на 0 умножать нельзя
	} else {
		result *= arr[i];
	}
}

console.log(result);

for (let i = 0; arr.length > i; i++) {
	if (arr[i] > 5 && arr[i] < 10) {
		console.log(arr[i]);
	}
}

for (let i = 0; arr.length > i; i++) {
	if (arr[i] % 2 === 0 && arr[i] != 0) {
		console.log(arr[i]);
	}
}
