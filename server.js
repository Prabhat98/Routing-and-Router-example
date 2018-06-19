const express = require("express")

const server = express()

const studentRoute = require("./Routes/students.js")

const teacherRoute = require("./Routes/teachers.js")

server.use(express.json())

server.use(express.urlencoded({extended:true}))

server.use("/students",studentRoute) // here studentRoute is itself a middleware function

server.use("/teachers",teacherRoute)

server.listen(2020)
