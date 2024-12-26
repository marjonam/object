//class works
//misol-1
//Quyidagi massivdagi barcha odamlarni yoshlarining o’rtacha qiymatini chiqaruvchi getAverageAge(arr) nomli funksiya yozing.
/*
function getAverageAge(arr) {
  let ages = 0;
  for (let i = 0; i < arr.length; i++) {
    ages += arr[i].age;
  }
  return ages / arr.length;
}
const people = [
  { name: "Abdulaziz", age: 33 },
  { name: "Erkin", age: 22 },
  { name: "Temur", age: 34 },
  { name: "Sardor", age: 20 },
];

console.log(getAverageAge(people));
*/

//misol-2
//Massiv ichidagi har bir objectga isMarried nomli property qo’shilsin. Agar object yoshi 25 dan kichi bo’lsa isMarried ga false, aks holda true qiymat o’zlashtirilsin.
/*
function getAverageAge(arr, age) {
  const obj = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i].age > age ? (arr[i].isMarried = true) : (arr[i].isMarried = false);
    obj.push(arr[i]);
  }
  return obj;
}
const people = [
  { name: "Abdulaziz", age: 33 },
  { name: "Erkin", age: 22 },
  { name: "Temur", age: 34 },
  { name: "Sardor", age: 20 },
];

console.log(getAverageAge(people, 25));
*/

//misol-3
//Quyidagi objectlardan tuzilgan massiv ichidagi yoshi eng katta va yoshi eng kichik bo’lgan insonning ismlarini qaytaruvchi getNameMaxMinAge(arr) nomli funksiya yozing. (for)
/*
function getNameMaxMinAge(arr) {
  let minName = arr[0].name;
  let minAge = arr[0].age;
  let maxName = arr[0].name;
  let MaxAge = arr[0].age;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].age < minAge) {
      minAge = arr[i].age;
      minName = arr[i].name;
    }
    if (arr[i].age > MaxAge) {
      MaxAge = arr[i].age;
      maxName = arr[i].name;
    }
  }
  return [minName, maxName];
}
const people = [
  { name: "Abdulaziz", age: 33 },
  { name: "Erkin", age: 22 },
  { name: "Temur", age: 34 },
  { name: "Sardor", age: 20 },
];

console.log(getNameMaxMinAge(people));
*/

//misol-4
//Objectda turli xil kalitlar bir xil qiymatlarga ega, kalitlari o'sha qiymatlardan iborat shunday object tuzingki, bu objectning qiymatlari massiv ko'rinishidagi eski objectning kalitlarlaridan iborat bo'lsin.
/*
const obj = { 1: 20, 2: 30, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20 };
const keyObj = {};

for (let key in obj) {
  if (!keyObj[obj[key]]) {
    keyObj[obj[key]] = [key];
  } else {
    keyObj[obj[key]].push(key);
  }
}

console.log(keyObj);
*/
//misol-5
//Ikkita object berilgan ularning ba'zi kalitlari bir xil. Bir xil kalitlaridan iborat bo'lmagan yangi object hosil qiling.
/*
const obj1 = { a: 3, b: 10, c: 5, d: 7 };
const obj2 = { a: 10, d: 4, e: 6, f: 15 };
const answer = [];

for (let i in obj1) {
  answer[i] = obj1[i];
}
for (let i in obj2) {
  if (!(i in answer)) {
    answer[i] = obj2[i];
  }
}
console.log(answer);
//Output: obj = {b: 10, c: 5, e: 6, f: 15};
*/
//misol-6
/*
const me = {
  firstName: '"Abdulaziz"',
  lastName: '"Toshpulatov"',
  age: 23,
  languages: ['"js"', '"python"', '"c++"', '"nodejs"'],
  friends: ['"Jamshid"', '"Abbos"', '"Jalol"', '"Maruf"'],
};

*/

//misol-7
//Kalitlari 1 dan n gacha bo’lganlar sonlarga, qiymatlari esa o’sha sonlarning kvatratiga teng object hosil qiling. (for)
/*
let n = 5;
let obj = {};

for (let i = 1; i <= n; i++) {
  obj[i] = i * i;
}
console.log(obj);
*/

//misol-8
//2-misoldan hosil bo’lgan objectning kalitlari va qiymatlari yig’indisini toping. (Object.keys(), Object.values())
//let obj = {1: 1, 2: 4, 3: 9, 4: 16, 5: 25};

//misol-9
//Stringlar massivi berilgan. Shunday object hosil qilingki, o’sha objectning kalitlari massiv elementlaridan va qiymatlari esa ularning uzunligidan iborat bo’lsin. (for)
/*
let names = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];
let obj = {};
for (let name of names) {
  obj[name] = name.length;
}

console.log(obj);
*/

//misol-10
//Shunday object berilganki, uning kalitlari mahsulotlardan va qiymatlari esa ularning narxlaridan tuzilgan. Barcha mahsulot qancha turishini toping. (Object.values())
/*
let fruits = { Apelsin: 10000, Olma: 12000, Mandarin: 8000, Banan: 20000 };
let price = 0;

for (let i in fruits) {
  price += fruits[i];
}
console.log(price);
*/

//new yangi obect(bosh obj)

//uy ishi -2
//misol-11
//Object kalitlarining barchasi string toifasidagi ma’lumotlardan tuzilgan bo’lsa true, aks holda false qiymat qaytaruvchi defineObject nomli funksiya hosil qiling. (Object.keys())
/*
const obj = { abc: 1, 123: 2, d: 5 };

function defineObject(obj) {
  for (let key in obj) {
  }
*/

//misol-12
//Agar object qiymatlari ichida falsy qiymatlar bo’lsa, ularni o’chirib yangi object hosil qiling. (Object.keys())
/*
const answer = {};
function falsyValue(obj) {
  for (let key in obj) {
    if (obj[key]) {
      answer[key] = obj[key];
    }
  }
  return answer;
}

console.log(falsyValue({ a: false, b: 12, c: true, d: 0 }));
*/

//misol-13
//Bir necha takrorlanuvchi sonlar ishtirok etgan massivdan shunday obyekt hosil qilingki, bu object kalitlari massivning takrorlanmas sonlaridan, qiymatlari esa o’sha sonlarning massivda necha marta ishtirok etganidan tuzilgan bo’lsin. (for)
//Input: [ 7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9 ]
//Output: { 7: 3, 8: 2, 4: 3, 5: 3, 9: 1 }

//misol-14
//Uzun sondan shunday obyekt hosil qilingki, bunda object kalitlari sinflardan, qiymatlari esa o’sha sonning mos ravishdagi o’sha sinfdagi qiymatlaridan tuzilgan bo’lsin. (for, slice)
//Input: 8945472985629;
//Output: { birlar: 629, minglar: 985, millionlar: 472, milliardlar: 945, trilionlar: 8 }

//misol-15
//Quyidagi ko'rinishda objectlarlardan tuzilgan massiv beriladi. Agar alreadyRead propertysi true bo'lsa o'sha kitob o'qigan deb chiqarilsin, aks holda o'qilmagan.
//Input: 8945472985629;
//Output: { birlar: 629, minglar: 985, millionlar: 472, milliardlar: 945, trilionlar: 8 }
/*
function book(read){
const answer = book.alreadyRead 
}
*/

//misol-16
//Mahsulotlar massividagi objectlarni sonini, chegirmasini hisobga olib, umumiy summani hisoblang.
/*
let overall = 0;
function calculator(product) {
  for (let i = 0; i < product.length; i++) {
    let;
  }
}
*/

//misol-17
//Objectning kalitlaridan va qiymatlaridan iborat bo'lgan massiv tuzing.
/*
const obj = {
  it: 20,
  mushuk: 10,
  sigir: 200,
  tovuq: 2,
};

const answer = [];
function array(obj) {
  for (let key in obj) {
    answer.push(key, obj[key]);
  }
  return answer;
}

console.log(array(obj));
*/

//misol-18
//GPA ni hisoblovchi dastur tuzing.
//GPA = (grade1 * kredit1 + grade2 * kredit2 + ...) / (kredit1 + kredit2 + ...)
/*
let grade = 0;
let krefdit = 0;

function calculator (gpa) {
for(let )
}

//output:
const grades = [
  { name: "Fizika", grade: 4, kredit: 6 },
  { name: "Matematika", grade: 5, kredit: 6 },
  { name: "Tarix", grade: 4, kredit: 4 },	
  { name: "Dasturlash", grade: 5, kredit: 8 },
  { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
];
console.log(calculator(gpa));
*/

//misol-19
//Abdulaziz Programmer nechta to'g'ri va noto'g'ri javob topganligini toping.

//misol-20
// Qiymatlari sonlardan iborat obj nomli object berilgan. Qiymatlarini n martaga oshiruvchi getMultipleValues(n) nomli funksiya yozing.
/*
let obj2 = { a: 2, b: 3, c: 4, d: 6 };
let answer = {};

function getMultipleValues(n, obj) {
  for (let key in obj) {
    answer[key] = obj[key] * n;
  }
  return answer;
}
console.log(getMultipleValues(3, obj2));
*/
