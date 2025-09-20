//TODO - Create Employee Module here and export to use in index.js

let employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary:5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary:4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary:5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary:9000}
];

exports.getEmployees = () => {
    return employees
    
}

exports.addEmployee = (employee) => {
    employees.push(employee);
    console.log(`Employee ${employee.firstName} ${employee.lastName} added.`);
};

exports.getEmployeeNames = () => {
    return employees.map(emp => ({
        firstName: emp.firstName,
        lastName: emp.lastName
    }))
    .sort((a, b) => a.firstName.localeCompare(b.firstName));;       // names in ascending order
};

exports.getTotalSalaries = () => {
    return employees.reduce((sum, emp) => sum + emp.Salary, 0);
};