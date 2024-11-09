const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://AllanB:Kettle1256.@cluster0.y6mxula.mongodb.net/',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

).then(() => {
    console.log("connected to mongoDB")
}).catch((error) => {
    console.log("Error connecting to DB", error)
});

app.listen(port, () => {
    console.log("Server is running on Port 8000")
});

const Employee = require("./models/employee");
const Attendance = require("./models/attendance")

// endpoint to register a employee
app.post("/addEmployee", async (req, res) => {
    try {
        const { employeeName, employeeId, designation, phoneNumber, dateOfBirth, startDate, activeEmployee, salary, address } = req.body

        // Creating a new Employee
        const newEmployee = new Employee({
            employeeName, employeeId, designation, phoneNumber, dateOfBirth, startDate, activeEmployee, salary, address
        });
        await newEmployee.save();
        res.status(201).json({ message: "Employee saved successfully", employee: newEmployee })
    } catch (error) {
        console.log("Error creating employee", error);
        res.status(500).json({ message: "Failed to add an employee" });
    }
});

// Fetching Employees Endpoint
app.get("/employees", async (req, res) => {
    try{
        const employees = await Employee.find();
        res.status(200).json(employees)
    } catch(error){
        res.status(500).json({message:"Failed to retrieve the employees"})
    }
})