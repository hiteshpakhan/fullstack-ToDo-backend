import { Router } from "express";
import Todo from "../models/Todo";

const router = Router();

// Get all todos
router.get("/getall", async (req, res) => {
    try {
      const todos = await Todo.find();
      // console.log(todos);
      res.json(todos);
    } catch (error) {
      res.status(400).json({ error: error.message});
    }
  });

// create a new todo
router.post("/createnew", async (req,res)=>{
    try {
        const todo = new Todo(req.body);
        const savedTodo = await todo.save();
        res.status(201).json(savedTodo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

// delete a todo by id
router.delete("/delete/:id", async (req, res) => {
    try {
      const deletedTodo = await Todo.findByIdAndRemove(req.params.id);
      res.status(200).json(deletedTodo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

// Update a todo by ID
router.put("/update/:id", async (req, res) => {
    try {
      const updatedTodo = await Todo.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(200).json(updatedTodo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
});


export default router;