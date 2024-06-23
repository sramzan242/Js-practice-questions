// Q1. make a function which takes an arr and number and return the elements of the arr?

const retrieve = (arr, n = 1) => {
  if (n <= arr.length) {
    for (let i = 0; i < n; i++) {
      console.log(arr[i]);
    }
  } else {
    console.log(`${n} elements are not in arr`);
  }
};

retrieve([1, 2, 3, 4, 5, 6], 4);

//Q2. make a function which take an arr and number and devide the arr into chunks array of array.

const func = (arr, num) => {
  return arr.reduce((acc, _, index) => {
    if (index % num === 0) {
      acc.push(arr.slice(index, index + num));
    }
    return acc;
  }, []);
};

console.log(func([1, 2, 3, 4, 5, 6], 2));
console.log(func([1, 2, 3, 4, 5, 6], 3));
console.log(func([1, 2, 3, 4, 5, 6], 4));

//Q3. Array fill method question.....

function customFill(arraySize, start, end, value) {
  let arr2 = new Array(arraySize).fill(0);
  arr2.fill(value, start, end);
  return arr2;
}

console.log(customFill(10, 2, 6, 1));

//Q4. You have an array of objects representing books, each with a title and author. Use the reduce method to create an object where each key is an author's name and the value is an array of their book titles.

const books = [
  { title: "Book One", author: "Author A" },
  { title: "Book Two", author: "Author B" },
  { title: "Book Three", author: "Author A" },
  { title: "Book Four", author: "Author C" },
];

const booksByAuthor = books.reduce((acc, book) => {
  if (!acc[book.author]) {
    acc[book.author] = [];
  }
  acc[book.author].push(book.title);
  return acc;
}, {});

console.log(booksByAuthor);

//Q5. Given an array of objects representing students, each with a name and an array of scores for different subjects, calculate the average score for each subject across all students.

const students = [
  { name: "Alice", scores: { math: 85, english: 78, science: 92 } },
  { name: "Bob", scores: { math: 90, english: 88, science: 80 } },
  { name: "Charlie", scores: { math: 75, english: 70, science: 85 } },
];

const averageScores = students.reduce((acc, student) => {
  for (let subject in student.scores) {
    if (!acc[subject]) {
      acc[subject] = { total: 0, count: 0 };
    }
    acc[subject].total += student.scores[subject];
    acc[subject].count += 1;
  }
  return acc;
}, {});

for (let subject in averageScores) {
  averageScores[subject] =
    averageScores[subject].total / averageScores[subject].count;
}

console.log(averageScores);

//Q6  You have an array of sales records, each with a region, product, and amount. Group the sales records by region and calculate the total sales amount for each region.

const sales = [
  { region: "North", product: "A", amount: 120 },
  { region: "South", product: "B", amount: 200 },
  { region: "North", product: "C", amount: 150 },
  { region: "East", product: "A", amount: 100 },
  { region: "South", product: "A", amount: 250 },
  { region: "West", product: "B", amount: 300 },
];

const salesByRegion = sales.reduce((acc, sale) => {
  if (!acc[sale.region]) {
    acc[sale.region] = 0;
  }
  acc[sale.region] += sale.amount;
  return acc;
}, {});

console.log(salesByRegion);

//Q7. Given an array of products, each with a name, category, and price, find the most expensive product in each category.

const products = [
  { name: "Laptop", category: "Electronics", price: 999 },
  { name: "Phone", category: "Electronics", price: 799 },
  { name: "Tablet", category: "Electronics", price: 499 },
  { name: "Shampoo", category: "Personal Care", price: 10 },
  { name: "Conditioner", category: "Personal Care", price: 15 },
  { name: "Face Wash", category: "Personal Care", price: 12 },
];

const mostExpensiveByCategory = products.reduce((acc, product) => {
  if (!acc[product.category] || product.price > acc[product.category].price) {
    acc[product.category] = product;
  }
  return acc;
}, {});

console.log(mostExpensiveByCategory);

//Q8. You have an array of objects representing employees, each with a name, department, and role. Create a nested data structure that groups employees first by department, then by role.

const employees = [
  { name: "Alice", department: "Engineering", role: "Developer" },
  { name: "Bob", department: "Engineering", role: "Tester" },
  { name: "Charlie", department: "HR", role: "Recruiter" },
  { name: "David", department: "Engineering", role: "Developer" },
  { name: "Eve", department: "HR", role: "Manager" },
];

const groupedEmployees = employees.reduce((acc, employee) => {
  if (!acc[employee.department]) {
    acc[employee.department] = {};
  }
  if (!acc[employee.department][employee.role]) {
    acc[employee.department][employee.role] = [];
  }
  acc[employee.department][employee.role].push(employee.name);
  return acc;
}, {});

console.log(groupedEmployees);

//Q9. Given an array of transactions, each with a date, type, and amount, calculate the total income and expenses for each month.

const transactions = [
  { date: "2024-01-15", type: "income", amount: 1000 },
  { date: "2024-01-25", type: "expense", amount: 200 },
  { date: "2024-02-10", type: "income", amount: 1200 },
  { date: "2024-02-15", type: "expense", amount: 300 },
  { date: "2024-02-20", type: "expense", amount: 100 },
  { date: "2024-03-05", type: "income", amount: 1500 },
];

const monthlySummary = transactions.reduce((acc, transaction) => {
  const month = transaction.date.slice(0, 7);
  if (!acc[month]) {
    acc[month] = { income: 0, expense: 0 };
  }
  if (transaction.type === "income") {
    acc[month].income += transaction.amount;
  } else {
    acc[month].expense += transaction.amount;
  }
  return acc;
}, {});

console.log(monthlySummary);


