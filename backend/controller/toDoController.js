
const todoModule = require("../module/todoModule");
const toDoModule=require("../module/todoModule");

module.exports.getToDos=async(req,res)=>{
    const toDos=await toDoModule.find()
    res.send(toDos)
};
module.exports.saveToDo=(req,res)=>{
    const {toDo}=req.body;

    toDoModule.create({toDo})
    .then((data)=>{
        console.log("saved successfully..");
        res.status(201).send(data);
    })
    .catch((err) => {console.error("MongoDB connection error:", err)
    res.send({error: err, msg: "when something is wrong"});
});
};
module.exports.updateToDo=(req,res)=>{
    const {id}=req.params
    const {toDo}=req.body;

    todoModule.findByIdAndUpdate(id,{toDo})
    .then(()=>{
        res.send("update successfully...");
    })
    .catch((err) => {console.log("MongoDB connection error:",err)
    res.send({error: err, msg: "when something is wrong"});
});


};
module.exports.deleteToDo=(req,res)=>{
    const {id}=req.params
    

    todoModule.findByIdAndDelete(id)
    .then(()=>{
        res.send("deleted successfully...");
    })
    .catch((err) => {console.log("MongoDB connection error:",err)

  res.send({error: err, msg: "when something is wrong"});
});


};