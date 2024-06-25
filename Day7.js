//Q1. Filter Employees by Department
const employeesData = [
    { name: 'Alice', department: 'HR', age: 30 },
    { name: 'Bob', department: 'Engineering', age: 28 },
    { name: 'Charlie', department: 'HR', age: 35 },
    { name: 'David', department: 'Sales', age: 25 },
    { name: 'Eve', department: 'Engineering', age: 27 },
  ];
  
  function filterEmployeesByDepartment(employeesData, department) {
    return employeesData.filter((employee) => employee.department === department);
  }
  
  console.log(filterEmployeesByDepartment(employeesData, 'HR'));
  console.log(filterEmployeesByDepartment(employeesData, 'Engineering'));
  
  //Q2. Calculate Average Age by Department...
  
  const avgAgeByDepartment = (employeeData, department) => {
    const filterByDep = employeeData.filter(
      (employee) => employee.department === department
    );
    const totalAge = filterByDep.reduce((acc, employee) => {
      return (acc += employee.age);
    }, 0);
    return totalAge / filterByDep.length;
  };
  
  console.log(avgAgeByDepartment(employeesData, 'HR'));
  
  //Q3. Find Employees with Highest Salary..
  
  const employeesSalaryData = [
    { name: 'Alice', department: 'HR', salary: 60000 },
    { name: 'Bob', department: 'IT', salary: 80000 },
    { name: 'Charlie', department: 'HR', salary: 70000 },
    { name: 'David', department: 'IT', salary: 75000 },
    { name: 'Eve', department: 'Developer', salary: 90000 },
    { name: 'Dev', department: 'Developer', salary: 90000 },
  ];
  
  const findEmployeesWithHighestSalary = (employeesSalaryData) => {
    if (employeesSalaryData.length === 0) {
      return [];
    }
    const maxSalary = Math.max(
      ...employeesSalaryData.map((employee) => employee.salary)
    );
    const highestPaidSalary = employeesSalaryData.filter(
      (emp) => emp.salary === maxSalary
    );
    return highestPaidSalary.map((e) => e.name);
  };
  
  console.log(findEmployeesWithHighestSalary(employeesSalaryData));
  
  //Question 4: Group Employees by Age Range....
  
  function groupEmployeesByAgeRange(employeesData, rangeStart, rangeEnd) {
    const groupedEmployees = {};
  
    employeesData.forEach((e) => {
      if (e.age >= rangeStart && e.age <= rangeEnd) {
        const ageRange = `${rangeStart}-${rangeEnd}`;
        if (!groupedEmployees[ageRange]) {
          groupedEmployees[ageRange] = [];
        }
        groupedEmployees[ageRange].push(e);
      }
    });
  
    return groupedEmployees;
  }
  
  console.log(groupEmployeesByAgeRange(employeesData, 25, 30));
  
  //Q5. Calculate Total Sales Revenue..
  
  const salesData2 = [
    { product: 'Laptop', year: 2021, revenue: 120000 },
    { product: 'Phone', year: 2021, revenue: 80000 },
    { product: 'Tablet', year: 2022, revenue: 60000 },
    { product: 'Monitor', year: 2021, revenue: 30000 },
    { product: 'Monitor', year: 2022, revenue: 30000 },
  ];
  
  function calculateTotalSalesRevenue(salesData, year) {
    const ans = {};
    const filterRevenueByYear = salesData.filter((e) => e.year === year);
    const totalRev = filterRevenueByYear.reduce((a, c) => {
      return (a += c.revenue);
    }, 0);
  
    ans[year] = totalRev;
    return ans;
  }
  
  console.log(calculateTotalSalesRevenue(salesData2, 2021));
  console.log(calculateTotalSalesRevenue(salesData2, 2022));
  
  
  //Q6.  Grouping Products by Category...
  
  // Given product data in an array of objects:
  const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1200 },
    { id: 2, name: 'Phone', category: 'Electronics', price: 800 },
    { id: 3, name: 'Shirt', category: 'Clothing', price: 25 },
    { id: 4, name: 'Dress', category: 'Clothing', price: 50 },
    { id: 5, name: 'Desk', category: 'Furniture', price: 300 },
  ];
  
  
  // Write a function to group products by category and return an object
  // where each key is a category and the value is an array of products in that category.
  function groupProductsByCategory(products) {
    const groupedProducts = {};
  
    products.map((product) => {
      if (!groupedProducts[product.category]) {
        groupedProducts[product.category] = [];
      }
      groupedProducts[product.category].push(product);
    });
  
    return groupedProducts;
  }
  
  console.log(groupProductsByCategory(products));
  
  function solution2(products){
    // return Object.groupBy(products, ({category})=> category);
  }
  
  console.log(solution2(products))
  
  
  //Q7. Filter Employees by Department and Minimum Salary....
  
  // Given employee data (similar to Question 1):
  // Using the same 'employees' array from Question 1.
  
  // Write a function to filter employees by department and minimum salary,
  // and return an array of employee names who meet the criteria.
  function filterEmployeesByDepartmentAndSalary(employees, department, minSalary) {
    const filteredEmployees = employees.filter((employee) => {
      return employee.department === department && employee.salary >= minSalary;
    });
  
    return filteredEmployees.map((employee) => employee.name);
  }
  
  console.log(filterEmployeesByDepartmentAndSalary(employeesSalaryData, 'IT', 60000));
  // Expected output: [ 'Bob', 'David' ]
  
  
  
  
  
  