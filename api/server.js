const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");

app.use(express.json());
app.use(cors()); 

mongoose.connect('mongodb+srv://amitbisht:vuvdzavkBsa4KQDu@cluster0.gwjeu1v.mongodb.net/test',{
    useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("Connected to Db")).catch(console.error);

const Todo = require('./models/Todo');
app.get('/todos',async(req, res) =>{
    const todos = await Todo.find();
    res.json(todos);
});

app.post('/todo/new',(req, res)=>{
    const todo = new Todo({
        text: req.body.text
    });
    todo.save();
    res.json(todo);
});

app.delete('/todo/delete/:id', async(req, res) =>
{
    const result = await Todo.findByIdAndDelete(req.params.id);
    res.json(result);
}); 

app.put('/todo/complete/:id', async(req, res) =>
{
    const Todo = await todo.findById(req.params.id);
    todo.complete = !todo.complete;
    todo.save();
    res.json(todo);
})

app.delete('/todo/delete.:id', async (req, res) => 
{
    const result = await Todo.findByIdAndDelete(req.params.id);

    res.json(todo);
})

app.put('/todo/complete/:id', async(req, res) =>
{
    const Todo = await todo.findById(req.params.id);
    todo.complete = !todo.complete;
    todo.save();
    res.json(todo);
})

app.put('/todo/update/:id',async (req, res) =>
{
    const todo = await Todo.findById(req.params.id);

    todo.text = req.body.text;
    
    todo.save();
    res.json(todo);
})

app.listen(3001);