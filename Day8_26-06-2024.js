//Q1. Write a function that finds the fruit with the highest quantity in the array and returns its name.

const fruits = [
  { name: "apple", quantity: 150 },
  { name: "banana", quantity: 80 },
  { name: "orange", quantity: 200 },
  { name: "grape", quantity: 50 },
];

const fruitWithHighestQuantity = (fruits) => {
  const highestQuantity = Math.max(...fruits.map((fruit) => fruit.quantity));
  const arr = fruits.filter((fruit) => {
    return fruit.quantity === highestQuantity;
  });
  return arr.map((e) => e.name).join();
};

console.log(fruitWithHighestQuantity(fruits));

//Q2. Create a function that groups the array of fruits by their name and returns an object where each key is a fruit name and the value is the total quantity of that fruit across all objects.

const fruits2 = [
  { name: "apple", quantity: 150 },
  { name: "banana", quantity: 80 },
  { name: "orange", quantity: 200 },
  { name: "apple", quantity: 50 },
];

const groupedByName = (fruits) => {
  const groupedFruits = {};
  fruits.map((fruit) => {
    if (groupedFruits[fruit.name]) {
      groupedFruits[fruit.name] += fruit.quantity;
    } else {
      groupedFruits[fruit.name] = fruit.quantity;
    }
  });
  return groupedFruits;
};

console.log(groupedByName(fruits2));

//Q3. Given an array of order objects, calculate the total order value per customer.

const orders = [
  { orderId: 1, customerId: 1, amount: 250 },
  { orderId: 2, customerId: 2, amount: 150 },
  { orderId: 3, customerId: 1, amount: 200 },
  { orderId: 4, customerId: 3, amount: 400 },
  { orderId: 5, customerId: 2, amount: 300 },
];

const totalOrderValue = orders.reduce((acc, order) => {
  if (!acc[order.customerId]) {
    acc[order.customerId] = 0;
  }
  acc[order.customerId] += order.amount;
  return acc;
}, {});

const result = Object.keys(totalOrderValue).map((customerId) => ({
  customerId: parseInt(customerId),
  totalAmount: totalOrderValue[customerId],
}));

console.log(result);

//Q4. Given an array of product objects, count the number of products in each category.

const products = [
  { id: 1, name: "Laptop", category: "Electronics" },
  { id: 2, name: "Shirt", category: "Apparel" },
  { id: 3, name: "Phone", category: "Electronics" },
  { id: 4, name: "Pants", category: "Apparel" },
  { id: 5, name: "Watch", category: "Accessories" },
];

const productCountByCategory = products.reduce((acc, curr) => {
  if (!acc[curr.category]) {
    acc[curr.category] = 0;
  }
  acc[curr.category]++;
  return acc;
}, {});

console.log(productCountByCategory);

//Q5. iven an array of employee objects, get the top 3 highest paid employees.

const employees = [
    { id: 1, name: 'Alice', salary: 60000 },
    { id: 2, name: 'Bob', salary: 70000 },
    { id: 3, name: 'Charlie', salary: 50000 },
    { id: 4, name: 'David', salary: 90000 },
    { id: 5, name: 'Eve', salary: 80000 }
  ];

  const highestPaidEmploees = employees.sort((a,b)=>b.salary- a.salary).slice(0,3);
  const highestPaidEmploeesName = highestPaidEmploees.map(e=>e.name);

  console.log(highestPaidEmploeesName);