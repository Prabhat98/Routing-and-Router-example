const router = require("express").Router()

let students = 
[
  {name:"Prabhat",college:"UIET",year:"2"},
  {name:"Nivedit",college:"IIIT",year:"3"},
  {name:"Sargun",college:"NSIT",year:"4"},
  {name:"Shobhit",college:"DTU",year:"1"}
]

router.get("/",(req,res)=>{res.send(students)})// here "/" means /Routes/students.js coz main file i.e server.js 
//is in different directory

router.post("/",(req,res)=>
{
  students.push
  ({
    name:req.body.name,
    college:req.body.college,
    year:req.body.year
  })
  res.send(students)
})

router.get("/:id",(req,res)=>{res.send(students[req.params.id])})

module.exports = router// it is a special kind of middleware function that we are exporting coz
//on top of it we can make more middlewares like did above

/*
Router cannot listen on its own therefore they have to be added to the server for them to work
So we exported it.
*/
