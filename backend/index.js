import express from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Thandu123",
    database: "transportmanagmentsystem"
})

app.get("/",(req,res) =>{
    res.json("hello world")
})

app.listen(8800,()=>{
    console.log("server is running on port 8800")
})