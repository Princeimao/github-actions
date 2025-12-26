import express, {} from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import "dotenv/config";
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
async function connection() {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}`);
        app.listen(PORT, () => {
            console.log(`application is running on port: ${PORT} and in ${process.env.NODE_ENV}`);
            console.log("database is running on " + process.env.MONGODB_URL);
        });
    }
    catch (error) {
        console.log("MONGODB CONNECTION FAILED", error);
    }
}
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});
const todoModel = mongoose.model("Todo", todoSchema);
let todo = [];
app.get("/", (req, res) => {
    try {
        res.send("it working fine by my side");
    }
    catch (error) {
        console.log("something went wrong", error);
    }
});
app.get("/get-todo", async (req, res) => {
    try {
        const todos = await todoModel.find({});
        res.status(200).json({
            success: true,
            message: "Getting todo successfully",
            todo: todos
        });
    }
    catch (error) {
        console.log("Something went wrong while getting todo", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong while getting todo",
            error: error
        });
    }
});
app.post("/create-todo", async (req, res) => {
    try {
        console.log(req.body);
        const { title, content } = req.body;
        if (!title || !content) {
            res.status(400).json({
                success: false,
                message: "title or content cannot be empty",
            });
            return;
        }
        const createdTodo = await todoModel.create({
            title,
            content
        });
        res.status(200).json({
            success: true,
            message: "Todo created Successfully",
            todos: todo
        });
    }
    catch (error) {
        console.log("Something went wrong while getting todo", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong while getting todo",
            error: error
        });
    }
});
app.delete("/delete-todo", async (req, res) => {
    try {
        const { id } = req.body;
        const updatedTodo = await todoModel.deleteOne({ _id: id });
        res.status(200).json({
            success: true,
            message: "Todo deleted successfully",
            todo: updatedTodo
        });
    }
    catch (error) {
        console.log("Something went wrong while getting todo", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong while getting todo",
            error: error
        });
    }
});
await connection();
//# sourceMappingURL=index.js.map