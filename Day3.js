//Q1. Double the price of every element of the given object and print the double of meat...

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  Object.entries(prices).map((entry) => [entry[0], entry[1] * 2])
);

console.log(doublePrices.meat);

//Q2. GroupBy method for object..... Group the element of this array of object on the basis of quantity is greater than 200 is "ok" else "Low".

// const fruits = [
//   { name: "apples", quantity: 300 },
//   { name: "bananas", quantity: 500 },
//   { name: "oranges", quantity: 200 },
//   { name: "kiwi", quantity: 150 },
// ];

// function callBack({ quantity }) {
//   return quantity > 200 ? "ok" : "Low";
// }

// const result = Object.groupBy(fruits, callBack);
// console.log(result);

//Q3. GroupBy new method launched in 2024 march.

// function callBack2({ name }) {
//   return name.includes("a") ? "A" : "Not A";
// }

// const result2 = Object.groupBy(fruits, callBack2);
// console.log(result2);

//Q4. Find the longest string... which contains 'e' in it..."Hello My name is Ramzaaan sheikh"

const str = "Hello My name is Ramzaaan sheikh";
const longestStr = (str) => {
  let newStr = str.split(" ").sort((a, b) => b.length - a.length);
  return newStr[0];
};

const longestStrWithE = (str) => {
  let newStr = str.split(" ").sort((a, b) => b.length - a.length);
  const newStrArr = newStr.filter((elem) => elem.includes("e"));
  return newStrArr[0];
};

console.log(longestStr(str));
console.log(longestStrWithE(str));

//Q5. top student with avg greatest marks....

const students = [
  { name: "Alice", marks: [90, 97, 100] },
  { name: "Bob", marks: [85, 88, 92] },
  { name: "Charlie", marks: [78, 82, 75] },
];

const topStudent = (arr) => {
  let studentsAvg = arr.map((student) => {
    let total = student.marks.reduce((a, c) => a + c);
    let avg = total / student.marks.length;

    return { name: student.name, avgMark: avg };
  });

  let top = studentsAvg.sort((a,b)=> b-a)
  return top[0];
};
console.log(topStudent(students));

//Q6.
