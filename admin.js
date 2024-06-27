//basic express code

const express = require("express");
const { createTodo, updateTodo } =  require("./type");
const { todo } = require("./db");
const app = express();
app.use(express.json());


//bpody{
//title: String
//descriptio: Strinf 
//}
app.post("/todo",  async function(req, res, next){
const createPayload = req.body;
const ParsePayload = createTodo.safeParse(createPayload);
if(!ParsePayload.success){
    res.status(411).json({
        msg: "you sent the worng inputs",
    })
    return;
}
await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
})
res.json({
    msg: "todo created"
})

})

 

app.get("/todos", async function(req, res, next){

    const todos = await todo.find({});
res.json({
    msg: "todos"
})
})

app.put("/completed", async function(req, res){
    const updatePayload = req.body;
    const ParsePayload = updateTodo.safeParse(updatePayload);
    if (!ParsePayload.success){
        res.status(411).json({
        msg: " you sent worng inputs",
        })
        return;
 
    }
    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "todo marked as completed"
    })


})

app.listen(3000);

