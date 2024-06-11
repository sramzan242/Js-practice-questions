// React Practical Test
const departments = [
  { id: 1, name: "React" },
  { id: 2, name: "DotNet" },
  { id: 3, name: "Node" },
];
const projects = [
  { id: 1, name: "abc", startDate: "10/10/2010", endDate: "10/11/2012" },
  { id: 2, name: "xyz", startDate: "12/03/2013", endDate: null },
  { id: 3, name: "pqr", startDate: "06/22/2014", endDate: "05/21/2020" },
];
const employees = [
  {
    id: 1,
    name: "Barney Stinson",
    designation: "Manager",
    departmentId: 2,
    projects: [1, 3],
  },
  {
    id: 2,
    name: "Ross Geller",
    designation: "Developer",
    departmentId: 1,
    projects: [],
  },
  {
    id: 3,
    name: "Michael Scott",
    designation: "Developer",
    departmentId: 2,
    projects: [3],
  },
  {
    id: 4,
    name: "Ted Mosby",
    designation: "Developer",
    departmentId: 1,
    projects: [2, 3],
  },
  {
    id: 5,
    name: "Chandler Bing",
    designation: "Manager",
    departmentId: 3,
    projects: [1, 2, 3],
  },
];
// 1. Create a function which accepts array and callback function as input
// and return new array containing the result of applying the callback
// function to each item in the given array
// Example:
// getNewValues(array, (x) => `${x.name} ${x.designation}`)
// Output:
// [‘Barney Stinson Manager’, …]
// 2. From the output of question 1, Join the output and replace each vowel
// with '_' and then display the count of each unique character in an object
// Example Output:
// { j: 1, _: 10, h: 2, n: 1, d: 1, m: 1, c: 2, l: 3, s: 2, t: 3, b: 1, g: 1 }
// 3. Create a function which takes an array and a string and
// return new array of string (as per output format) for given project name
// Example:
// findEmployeesWithProject(employees, 'abc')
// Output (format):
// ["Barney Stinson - DotNet - Manager - abc, pqr", ...]

// solutions:

// aaj nu solution

const func1 = (array, callBackFunc = () => {}) => array.map(callBackFunc);
console.log(func1(employees, (x) => `${x.name} ${x.designation}`));

const func2 = () => {
  console.log(
    func1(employees, (x) => `${x.name} ${x.designation}`)
      .join("")
      .split(" ")
      .join("")
      .split("")
      .reduce((acc, curr) => {
        const abc = /^[aeiou]$/.test(curr.toLowerCase())
          ? "_"
          : curr.toLowerCase();
        if (!acc[abc]) {
          acc[abc] = 0;
        }
        acc[abc] += 1;
        return acc;
      }, {})
  );
};

func2();

const func3 = (employees, projectName) => {
  const projectId = projects.find(({ name }) => name === projectName)?.id;
  if (projectId) {
    return employees
      .filter(({ projects }) => projects.includes(projectId))
      .map(
        ({ name, designation, departmentId, projects }) =>
          `${name}-${
            departments.find(({ id }) => id === departmentId).name
          }-${designation}-${projects
            .filter(({ id }) => projects.includes(id))
            .map(({ name }) => name)
            .join(",")}`
      );
  }
  return "enter proper project name or employee data";
};

console.log(func3(employees, "abc"));

//1. You are given an array of integers. Write a function that returns the largest product that can be made by multiplying any three integers from the array.

function maxProductOfThree(nums) {
  nums.sort((a, b) => a - b);

  const n = nums.length;

  // The maximum product is either the product of the three largest integers
  // or the product of the two smallest integers (if they are negative) and the largest integer.
  return Math.max(
    nums[n - 1] * nums[n - 2] * nums[n - 3],
    nums[0] * nums[1] * nums[n - 1]
  );
}

// Test the function
const nums = [-10, -3, 5, 6, -20];
console.log(maxProductOfThree(nums)); // Output: 1200

//2. Given an array of integers, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

function moveZeros(nums) {
  return nums.filter((num) => num !== 0).concat(nums.filter((num) => num === 0));
}

let number = [0, 1, 0, 3, 12, 0, 9, 4, 3];
console.log(moveZeros(number));



//3. validate email by regular expression..........

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
    return emailRegex.test(email);
}

console.log(validateEmail("user@example.com")); // true
console.log(validateEmail("user123@example.com")); // true
console.log(validateEmail("user@123example.com")); // true
console.log(validateEmail("123user@example.com")); // true
console.log(validateEmail("user@eXample.COM")); // true
console.log(validateEmail("user@Example1.com")); // true
console.log(validateEmail("user@example.")); // false
console.log(validateEmail("user@.com")); // false
console.log(validateEmail("@example.com")); // false
console.log(validateEmail("user@@example.com")); // false



//4. Write a function calculator that can perform basic arithmetic operations and supports function chaining.

function calculator() {
    let value = 0;

    const add = num => {
        value += num;
        return { add, subtract, multiply, result };
    };

    const subtract = num => {
        value -= num;
        return { add, subtract, multiply, result };
    };

    const multiply = num => {
        value *= num;
        return { add, subtract, multiply, result };
    };

    const result = () => value;

    return { add, subtract, multiply, result };
}

console.log(calculator().add(5).multiply(2).subtract(3).result());


//5. Write a function stringModifier that can modify a string using various methods and supports function chaining.

function stringModifier(str) {
    let value = str;

    const capitalize = () => {
        value = value.toUpperCase();
        return { capitalize, reverse, result };
    };

    const reverse = () => {
        value = value.split("").reverse().join("");
        return { capitalize, reverse, result };
    };

    const result = () => value;

    return { capitalize, reverse, result };
}

console.log(stringModifier("Ramzan").reverse().capitalize().result());

//6. Write a function arrayProcessor that can process an array using various methods and supports function chaining.

function arrayProcessor(arr) {
    let array = arr;

    const double = () => {
        array = array.map(num => num * 2);
        return { double, filterEven, sum };
    };

    const filterEven = () => {
        array = array.filter(num => num % 2 === 0);
        return { double, filterEven, sum };
    };

    const sum = () => array.reduce((acc, curr) => acc + curr, 0);

    return { double, filterEven, sum };
}



console.log(arrayProcessor([1,2,3,4]).double().filterEven().sum());


// 7. Write a function formatter that can format a string using various methods and supports function chaining.


function formatter(str) {
    let value = str;

    const capitalize = () => {
        value = value.charAt(0).toUpperCase() + value.slice(1);
        return { capitalize, truncate, result };
    };

    const truncate = length => {
        if (value.length > length) {
            value = value.slice(0, length) + "...";
        }
        return { capitalize, truncate, result };
    };

    const result = () => value;

    return { capitalize, truncate, result };
}

console.log(formatter("hello eera").capitalize().truncate(4).result());