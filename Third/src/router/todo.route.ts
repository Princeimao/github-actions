import express from "express";
import {
   createTodo,
   deleteTodo,
   getTodo,
   updateTodo,
} from "../controller/todo.controller.js";

const router = express.Router();

router.route("/get-todos").get(getTodo);
router.route("/create-todo").post(createTodo);
router.route("/update-todo/:id").patch(updateTodo);
router.route("/delete-todo/:id").delete(deleteTodo);

export default router;
