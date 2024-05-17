import express from "express";
import mysql from "mysql";

const app = express();
const port = 8800;


app.use(express.json());

// Create a connection to the database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Thandu123",
  database: "transportmanagmentsystem"
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
  } else {
    console.log('Connected to the database as ID', db.threadId);
  }
});

// Root route
app.get("/", (req, res) => {
  res.json("hello world");
});

// Route to fetch all users
app.get("/users", (req, res) => {
  db.query('SELECT * FROM Users', (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// add a new user
app.post("/users", (req, res) => {
  const { Name, Email, Password, Phone, Address } = req.body;
  db.query('INSERT INTO Users (Name, Email, Password, Phone, Address) VALUES (?, ?, ?, ?, ?)', 
           [Name, Email, Password, Phone, Address], (err, result) => {
    if (err) {
      console.error('Error adding user:', err);
      res.status(500).send(err);
    } else {
      res.status(201).send(`User added with ID: ${result.insertId}`);
    }
  });
});

// fetch all vehicles
app.get("/vehicles", (req, res) => {
  db.query('SELECT * FROM Vehicles', (err, results) => {
    if (err) {
      console.error('Error fetching vehicles:', err);
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// add a new vehicle
app.post("/vehicles", (req, res) => {
  const { UserID, LicensePlate, Model, ParkingStatus } = req.body;
  db.query('INSERT INTO Vehicles (UserID, LicensePlate, Model, ParkingStatus) VALUES (?, ?, ?, ?)', 
           [UserID, LicensePlate, Model, ParkingStatus], (err, result) => {
    if (err) {
      console.error('Error adding vehicle:', err);
      res.status(500).send(err);
    } else {
      res.status(201).send(`Vehicle added with ID: ${result.insertId}`);
    }
  });
});

// fetch all transport passes
app.get("/transportpass", (req, res) => {
  db.query('SELECT * FROM TransportPass', (err, results) => {
    if (err) {
      console.error('Error fetching transport passes:', err);
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// add a new transport pass
app.post("/transportpass", (req, res) => {
  const { UserID, IssueDate, ExpiryDate, Balance } = req.body;
  db.query('INSERT INTO TransportPass (UserID, IssueDate, ExpiryDate, Balance) VALUES (?, ?, ?, ?)', 
           [UserID, IssueDate, ExpiryDate, Balance], (err, result) => {
    if (err) {
      console.error('Error adding transport pass:', err);
      res.status(500).send(err);
    } else {
      res.status(201).send(`Transport pass added with ID: ${result.insertId}`);
    }
  });
});

// fetch all payments
app.get("/payments", (req, res) => {
  db.query('SELECT * FROM Payments', (err, results) => {
    if (err) {
      console.error('Error fetching payments:', err);
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// add a new payment
app.post("/payments", (req, res) => {
  const { UserID, Amount, PaymentDate, PaymentType } = req.body;
  db.query('INSERT INTO Payments (UserID, Amount, PaymentDate, PaymentType) VALUES (?, ?, ?, ?)', 
           [UserID, Amount, PaymentDate, PaymentType], (err, result) => {
    if (err) {
      console.error('Error adding payment:', err);
      res.status(500).send(err);
    } else {
      res.status(201).send(`Payment added with ID: ${result.insertId}`);
    }
  });
});

//fetch all public transport
app.get("/publictransport", (req, res) => {
  db.query('SELECT * FROM PublicTransport', (err, results) => {
    if (err) {
      console.error('Error fetching public transport:', err);
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

//add a new public transport
app.post("/publictransport", (req, res) => {
  const { Type, Route, CurrentLocation, Timetable } = req.body;
  db.query('INSERT INTO PublicTransport (Type, Route, CurrentLocation, Timetable) VALUES (?, ?, ?, ?)', 
           [Type, Route, CurrentLocation, Timetable], (err, result) => {
    if (err) {
      console.error('Error adding public transport:', err);
      res.status(500).send(err);
    } else {
      res.status(201).send(`Public transport added with ID: ${result.insertId}`);
    }
  });
});

//fetch all parking spaces
app.get("/parkingspaces", (req, res) => {
  db.query('SELECT * FROM ParkingSpaces', (err, results) => {
    if (err) {
      console.error('Error fetching parking spaces:', err);
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

//add a new parking space
app.post("/parkingspaces", (req, res) => {
  const { Location, Status, VehicleID } = req.body;
  db.query('INSERT INTO ParkingSpaces (Location, Status, VehicleID) VALUES (?, ?, ?)', 
           [Location, Status, VehicleID], (err, result) => {
    if (err) {
      console.error('Error adding parking space:', err);
      res.status(500).send(err);
    } else {
      res.status(201).send(`Parking space added with ID: ${result.insertId}`);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
