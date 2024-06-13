//Q1. Count the occurrences of distinct elements in the given 2D array. The given input is an array, the elements of which are arrays of strings. The result is an object whose property names are the values from the arrays and their value is the number of their occurrences.

const input = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];

const res = input.flat().reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr] += 1;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});

console.log("Q1.", res);

//Q2. You are given an array of objects representing a collection of employees, each with a name, salary, and department. Your task is to use map, filter, and reduce to calculate the average salary for each department and then return an array of objects containing only the departments that have an average salary above 65000.

const employees = [
  { name: "Alice", salary: 70000, department: "Engineering" },
  { name: "Bob", salary: 60000, department: "Engineering" },
  { name: "Charlie", salary: 80000, department: "Marketing" },
  { name: "David", salary: 50000, department: "Marketing" },
  { name: "Eve", salary: 75000, department: "Sales" },
  { name: "Frank", salary: 62000, department: "Sales" },
];

const groupedByDepartment = employees.reduce((acc, employee) => {
  const { department, salary } = employee;
  if (!acc[department]) {
    acc[department] = { totalSalary: 0, count: 0 };
  }
  acc[department].totalSalary += salary;
  acc[department].count += 1;
  return acc;
}, {});

//   console.log('Grouped by department:', groupedByDepartment);

const averageSalaries = Object.keys(groupedByDepartment).map((department) => {
  const { totalSalary, count } = groupedByDepartment[department];
  const averageSalary = totalSalary / count;
  return {
    department,
    averageSalary,
  };
});
//   console.log('Average salaries:', averageSalaries);

const result = averageSalaries.filter((dept) => {
  return dept.averageSalary > 65000;
});

console.log("Q2. " + "Result:", result);

//Q3. Given an array of objects representing employees with their salaries, write a function increaseSalariesByPercentage(employees, percentage) that takes in the array of employees and a percentage value. The function should increase the salaries of all employees by the given percentage and return a new array with the updated employee objects.

const employeesData = [
  { name: "John", salary: 50000 },
  { name: "Alice", salary: 60000 },
  { name: "Bob", salary: 70000 },
];

function increaseSalariesByPercentage(arr, percentage) {
  return arr.map((employee) => {
    return {
      name: employee.name,
      salary: employee.salary + employee.salary * (percentage / 100),
    };
  });
}

console.log(increaseSalariesByPercentage(employeesData, 10));

//Q4. Assuming you have an array of products, each with a price property, you can filter out the products whose price is less than $20 like this?

const products = [
  { name: "Product 1", price: 15 },
  { name: "Product 2", price: 25 },
  { name: "Product 3", price: 10 },
  { name: "Product 4", price: 30 },
];

const filterPrice = (arr) => {
  return arr.filter((product) => product.price < 20);
};

console.log(filterPrice(products));

// Q5. Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr) {
  return arr.reduce((acc, curr) => {
    return acc + curr;
  }, "");
}

console.log(stringConcat([1, 2, 3])); // "123"

//Q6.Turn an array of voter objects into a count of how many people voted.

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];
const totalVotes = (arr) => {
  return arr.filter((voter) => voter.voted === true);
};

const total = totalVotes(voters).reduce((acc, curr) => acc + 1, 0);
console.log(total);

//Q7. Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

function shoppingSpree(arr) {
  return arr.reduce((acc, curr) => acc + curr.price, 0);
}

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

console.log(shoppingSpree(wishlist));

//Q8. Given an array of arrays, flatten them into a single array

function flatten(arr) {
  return arr.flat();
}

var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

console.log(flatten(arrays));

//Q9.  Take an array of numbers and make them strings

function stringItUp(arr) {
  return arr.map((elem) => elem + "");
}

console.log(stringItUp([2, 5, 100]));

//Q10.  Make an array of strings of the names saying whether or not they can go to The Matrix

function makeStrings(arr) {
  return arr.map((elem) => {
    if (elem.age >= 18) {
      return elem.name + " can go to The Matrix ";
    } else return elem.name + " is under age!! ";
  });
}

console.log(
  makeStrings([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]
