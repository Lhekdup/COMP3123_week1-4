const express = require('express')
const employeeRouter = express.Router();

// Router Level Middleware
employeeRouter.use((req, res, next) => {
    console.log("Employee Router Middleware");
    next();
})

employeeRouter.get('/', (req, res) => {
    res.send('<h1>Employee Home Page</h1>');
});

employeeRouter.post('/add', (req, res) => {
    res.send('<h1>Add Employee Page</h1>');
});

employeeRouter.put('/update', (req, res) => {
    res.send('<h1>Update Employee Page</h1>');
});

employeeRouter.delete('/delete', (req, res) => {
    res.send('<h1>Delete Employee Page</h1>');
});

employeeRouter.get("/error", (req, res) => {
    throw new Error("This is a forced error.");
    res.send("This will not be excuted.")
})

// Error Handling Middleware
employeeRouter.use((err, req, res, next) => {
    console.log("Employee Error handling Middleware: ", err.message);
    res.status(500).send('Something broke!');
});

module.exports = employeeRouter;