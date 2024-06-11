// React Practical Test
const departments = [
{ id: 1, name: "React" },
{ id: 2, name: "DotNet" },
{ id: 3, name: "Node" }
];
const projects = [
{ id: 1, name: 'abc', startDate: '10/10/2010', endDate: '10/11/2012' },
{ id: 2, name: 'xyz', startDate: '12/03/2013', endDate: null },
{ id: 3, name: 'pqr', startDate: '06/22/2014', endDate: '05/21/2020' },
]
const employees = [
{
id: 1,
name: "Barney Stinson",
designation: "Manager",
departmentId: 2,
projects: [1, 3]
},
{
id: 2,
name: "Ross Geller",
designation: "Developer",
departmentId: 1,
projects: []
},
{
id: 3,
name: "Michael Scott",
designation: "Developer",
departmentId: 2,
projects: [3]
},
{
id: 4,
name: "Ted Mosby",
designation: "Developer",
departmentId: 1,
projects: [2, 3]
},
{
id: 5,
name: "Chandler Bing",
designation: "Manager",
departmentId: 3,
projects: [1, 2, 3]
}
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


const func1=(array, callBackFunc=()=>{})=>array.map(callBackFunc)
console.log(func1(employees,(x) => `${x.name} ${x.designation}`))

const func2=()=>{
    console.log(func1(employees,(x) => `${x.name} ${x.designation}`).join("").split(" ").join("").split("").reduce((acc,curr)=>{
        const abc=/^[aeiou]$/.test(curr.toLowerCase()) ? "_" : curr.toLowerCase()
        if(!acc[abc])
        {
            acc[abc]=0
        }
        acc[abc]+=1 ;
        return acc
        
    },{}))
}

func2()

const func3=(employees,projectName)=>{
const projectId=projects.find(({name})=>name===projectName)?.id
if(projectId)
{
  return employees.filter(({projects})=>projects.includes(projectId)).map(({name,designation,departmentId,projects})=>`${name}-${departments.find(({id})=>id===departmentId).name}-${designation}-${projects.filter(({id})=>projects.includes(id)).map(({name})=>name).join(",")}`)
}
return "enter proper project name or employee data"
}

console.log(func3(employees, 'abc'))