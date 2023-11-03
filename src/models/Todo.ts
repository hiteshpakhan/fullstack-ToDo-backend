import mongoose from "mongoose";

interface ITodo extends mongoose.Document {
    text: string;
    completed: boolean;
}

const todoSchema = new mongoose.Schema({
    text: String,
    completed: Boolean,
});

const Todo = mongoose.model<ITodo>("Todo", todoSchema);
export default Todo;