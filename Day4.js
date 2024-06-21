// Q1. Write a JavaScript function that takes a date string in the format "YYYY-MM-DD" and returns the day of the week (e.g., "Monday", "Tuesday", etc.) corresponding to that date.

function getDayOfWeek(dateString) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(dateString);
  const dayOfWeek = daysOfWeek[date.getDay()];
  return dayOfWeek;
}
const dayOfWeek = getDayOfWeek("2024-06-21");
console.log(`The day of the week for '2024-06-21'  is ${dayOfWeek}.`);

//Q2. Calculate same grade sudent.

const students = [
  { name: "Alice", age: 18, grade: 12 },
  { name: "Bob", age: 17, grade: 11 },
  { name: "Charlie", age: 18, grade: 12 },
  { name: "David", age: 17, grade: 10 },
  { name: "Eve", age: 18, grade: 11 },
];

function studentWithSameGrade(arr, grade) {
  return arr.filter((student) => student.grade === grade);
}

console.log(studentWithSameGrade(students, 12));

//Q3. You have an array of student objects, each representing a student with name, scores (an array of test scores), and attendance (an object where keys are dates and values are boolean indicating attendance). Write a function calculateStudentStats that takes this array as input and returns an array of objects containing each student's name, averageScore, and attendanceRate. The averageScore should be rounded to two decimal places, and attendanceRate should be a percentage rounded to the nearest whole number.

const students2 = [
  {
    name: "Alice",
    scores: [85, 90, 88, 92, 95],
    attendance: {
      "2024-06-01": true,
      "2024-06-02": true,
      "2024-06-03": false,
      "2024-06-04": true,
    },
  },
  {
    name: "Bob",
    scores: [78, 82, 85, 80, 88],
    attendance: {
      "2024-06-01": true,
      "2024-06-02": false,
      "2024-06-03": true,
      "2024-06-04": true,
    },
  },
  {
    name: "Bobby",
    scores: [78, 42, 55, 40, 48],
    attendance: {
      "2024-06-01": true,
      "2024-06-02": true,
      "2024-06-03": true,
      "2024-06-04": true,
    },
  },
  {
    name: "Martin",
    scores: [48, 52, 95, 60, 78],
    attendance: {
      "2024-06-01": true,
      "2024-06-02": false,
      "2024-06-03": true,
      "2024-06-04": false,
    },
  },
  {
    name: "Messy",
    scores: [70, 85, 85, 90, 88],
    attendance: {
      "2024-06-01": false,
      "2024-06-02": false,
      "2024-06-03": false,
      "2024-06-04": false,
      "2024-06-05": true,
    },
  },
];

const calculateStudentStats = (students2) => {
  return students2.map((student) => {
    let total = student.scores.reduce((a, c) => a + c);
    const avgScore = total / student.scores.length;

    const attendenceEntries = Object.values(student.attendance);
    const totalDays = attendenceEntries.length;
    const presentDays = attendenceEntries.filter(
      (status) => status === true
    ).length;
    const attendenceRate = (presentDays / totalDays) * 100;

    return {
      name: student.name,
      avgScore: parseFloat(avgScore.toFixed(2)),
      attendenceRate: Math.round(attendenceRate) + "%",
    };
  });
};

console.log(calculateStudentStats(students2));

//Q4. Get the current date and time in separate array.....

const date = new Date();
const [month, day, year] = [
  date.getDate(),
  date.getMonth() + 1,
  date.getFullYear(),
];
console.log([month, day, year]);

const [hour, minutes, seconds] = [
  date.getHours(),
  date.getMinutes(),
  date.getSeconds(),
];

console.log([hour, minutes, seconds]);

//Q5. Get how many days in months with getDayInMonth function...

function getDaysInMonth(mm, yyyy) {
  return new Date(yyyy, mm, 0).getDate();
}
console.log(getDaysInMonth(1, 2024));
console.log(getDaysInMonth(2, 2024));
console.log(getDaysInMonth(6, 2024));

//Q6. Calculate Total Salary by Department....

const employees = [
  { name: "Alice", department: "HR", salary: 50000 },
  { name: "Bob", department: "Engineering", salary: 70000 },
  { name: "Charlie", department: "Engineering", salary: 80000 },
  { name: "Dave", department: "HR", salary: 45000 },
  { name: "Eve", department: "Marketing", salary: 60000 },
  { name: "Frank", department: "Marketing", salary: 65000 },
];

const totalSalaryByDepartment = (emp) => {
  return emp.reduce((acc, employee) => {
    const { department, salary } = employee;

    if (!acc[department]) {
      acc[department] = { totalEmployee: 0, totalSalary: 0 };
    }

    acc[department].totalEmployee += 1;
    acc[department].totalSalary += salary;

    return acc;
  }, {});
};

console.log(totalSalaryByDepartment(employees));
