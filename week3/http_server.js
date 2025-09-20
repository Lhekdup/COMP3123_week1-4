const http = require('http');
//const student = require('./modules/students'); // local module
const employee = require('./modules/employees');

const SERVER_PORT = process.env.PORT || 8081;
const SERVER_HOST = 'localhost'; // 127.0.0.1

// console.log(http)
const server = http.createServer((req, res) => {
    console.log(req.method); // GET, POST, PUT, DELETE
    console.log(req.url);
    //console.log(res)
    if(req.method === 'GET') {

        if(req.url === '/') { http://localhost:8081/
            res.statusCode = 200; // OK
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Welcome to Lab Exercise 03</h1>');
        } 
        else if(req.url === '/about') { //http://localhost:8081/about
            res.statusCode = 200; // OK
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>About Us</h1><p>This is the about page.</p>');
        } 
        else if(req.url === '/employees') { //http://localhost:8081/employees
            res.statusCode = 200; // OK
            res.setHeader('Content-Type', 'application/json');
            const employeesList = employee.getEmployees(); // Call the function to get employees
            res.end(JSON.stringify(employeesList, null, 2)); // Convert JS object to JSON string and prints with 2 spaces
        }
        else if(req.url === '/employees/names') {
            res.statusCode = 200; // OK
            res.setHeader('Content-Type', 'application/json');
            const employeesList = employee.getEmployeeNames(); // Call the function to get employees names
            res.end(JSON.stringify(employeesList, null, 2));
        }
        else if (req.url === '/employees/totalsalaries') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            const total = employee.getTotalSalaries();
            res.end(JSON.stringify({ message: "Total sum of salaries for all employees", totalSalaries: total }, null, 2));
        }
        else {
            res.statusCode = 404; // Not Found
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
        }
    } 
});

server.listen(SERVER_PORT, SERVER_HOST, () => {
    console.log(`Server running at http://${SERVER_HOST}:${SERVER_PORT}/`);
});