// This **imports the Express library** into your project.
// `require('express')` looks into your installed `node_modules` and loads Express.
// After this, you can use all the functions Express provides.
const express = require('express');

// Here you are creating an instance of an Express application.
// Think of app as your web server object.
// With app, - you can define routes (app.get('/' ...))
//           - you can use middleware (app.use(...))
//           - start the server (app.listen(...))
const app = express();

// This line decides which port your server will run on.
const SERVER_PORT = process.env.PORT || 3000;

// imports the router defined in student.js & employee.js
const studentRouter = require('./routers/student')
const employeeRouter = require('./routers/employee')

// Build-in Middleware
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

// Application Level Middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
})
app.use((req, res, next) => {
    console.log("Time: ", Date.now());
    next();
})

// tells Express: "any request that starts with /api/v1/student, 
// hand it over to studentRouter to decide what to do."
app.use("/api/v1/student", studentRouter);
app.use("/api/v1/employee", employeeRouter);


// http://localhost:3000/
app.get('/', (req, res) => {                // Define a route
    res.send('<h1>Hello World!</h1>');
});

// Route to test error handling middleware
// http://localhost:3000/error/
app.get("/error", (req, res) => {
    throw new Error("This is a forced error.");
    res.send("This will not be excuted.")
})

// Error Handling Middleware
app.use((err, req, res, next) => {
    //console.error(err.stack);
    console.log("Error handling Middleware: ", err.message);
    res.status(500).send('Something broke!');
});

// This starts the server on port 3000
app.listen(SERVER_PORT, ()=> {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
})