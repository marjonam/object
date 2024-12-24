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
