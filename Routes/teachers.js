const router = require("express").Router()

let teacher = 
[
  {name:"Arnav",subject:"Web Dev"},
  {name:"Prateek",subject:"Machine Learning"}
]

router.get("/",(req,res)=>{res.send(teacher)})// here "/" means /Routes/students.js coz main file i.e sercer.js 
//is in different directory

router.get("/add",(req,res)=>// added this before id because else a request coming to add would've been caught by id
// coz it doesn't know to diffrentiate between them
{
  teacher.push // pushes new items at the end
    ({
       name:req.query.name,
       subject:req.query.subject    
    })
  res.send(teacher)
})

router.get("/:id",(req,res)=>{res.send(teacher[req.params.id])})

module.exports = router// it is a special kind of middleware function that we are exporting coz
//on top of it we can make more middlewares like did above

/*
Router cannot listen on its own therefore they have to be added to the server for them to work
So we exported it.
*/
