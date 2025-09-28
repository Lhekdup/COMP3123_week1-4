const express = require('express');

const SERVER_PORT = process.env.PORT || 3000;

// Create an instance of an Express application
const app = express();

// Middleware to serve static files from the "public" directly
// app.use(express.static("public"));
app.use('/static', express.static("public"));
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

//http://localhost:3000/
app.get("/", (req, res) => {
    res.send("Hello World from Express");
})

//http://localhost:3000/instruction.html
app.get("/instruction.html", (req, res) => {
    res.sendFile(__dirname + "/public/instruction.html");
})

//http://localhost:3000/hello
app.get("/hello", (req, res) => {
    res.send("<h1>Hello Express JS</h1>");
})

//http://localhost:3000/hello
app.get("/about", (req, res) => {
    // res.send("<h1>About Page</h1>")
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.send("<h1>About Page</h1>")
    res.status(200).send("<h1>About Page</h1>");
})

//http://localhost:3000/college
app.get("/college", (req, res) => {
    const college = {
        method: "GET",
        name: "George Brown Collage",
        location: "Toronto, Canada",
        established: 1967
    }
    //res.send(college);
    res.json(college)
})

//http://localhost:3000/college
app.post("/college", (req, res) => {
    const college = {
        method: "POST",
        name: "George Brown Collage",
        location: "Toronto, Canada",
        established: 1967
    }
    //res.send(college);
    res.json(college)
})

//http://localhost:3000/college
app.put("/college", (req, res) => {
    const college = {
        method: "PUT",
        name: "George Brown Collage",
        location: "Toronto, Canada",
        established: 1967
    }
    //res.send(college);
    res.json(college)
})

//http://localhost:3000/college
app.delete("/college", (req, res) => {
    const college = {
        method: "DELETE",
        name: "George Brown Collage",
        location: "Toronto, Canada",
        established: 1967
    }
    //res.send(college);
    res.json(college)
})

// Query Parameters
//http://localhost:3000/user?firstname=Lhekdup&lastname=Tenzin
//req.query
app.get("/user", (req, res) => {
    // if(req.query == {} || !req.query.firstname || !req.query.lastname) {
    //     return res.status(400).json({ error: "Missing query parameters" })
    // }
  
    console.log(req.query);
    // const {firstname, lastname} = req.query
    const firstname = req.query.firstname || "Pritesh";
    const lastname = req.query.lastname || "Patel";

    res.json({
        first_name: firstname,
        last_name: lastname
    })
})

// Path Parameters
//http://localhost:3000/user/John/Doe
//req.params
app.post("/user/:firstname/:lastname", (req, res) => {
    console.log(req.params);
    if(req.params == {} || !req.params.firstname || !req.params.lastname) {
        return res.status(400).json({ error: "Missing params parameters" })
    }
    // const {firstname, lastname} = req.params;
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;
    
    res.json({
        first_name: firstname,
        last_name: lastname,
    })
})

// Body Parameters as JSON
//req.body
/*
    [
        {"firstname":"Pritesh","lastname":"Patel"},
        {"firstname":"John","lastname":"Doe"},
        {"firstname":"John","lastname":"Rome"}
    ]
 */
//http://localhost:3000/users
app.post("/users", (req, res) => {
    const users = req.body;
    console.log(users);

    if (!Array.isArray(users)) {
        return res.status(400).json({ error: "Expected an array of users" });
    }

    for (const user of users){
        if(!user.firstname || !user.lastname) {
            return res.status(400).json({ error: "Missing body parameters" })
        }
    }

    res.json(users);
})


app.listen(SERVER_PORT, ()=> {
    // console.log("Server started");
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
})