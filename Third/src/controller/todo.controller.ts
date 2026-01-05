import todoModel from "../models/todo.model.js";
import { type Request, type Response } from "express";

export const getTodo = async (req: Request, res: Response) => {
   try {
      const todos = await todoModel.find();
      res.status(200).json({
         success: true,
         message: "Getting todo successfully",
         todo: todos,
      });
   } catch (error) {
      console.log("Something went wrong while getting todo", error);
      res.status(500).json({
         success: false,
         message: "Something went wrong while getting todo",
         error: error,
      });
   }
};

export const createTodo = async (req: Request, res: Response) => {
   try {
      const { title } = req.body;

      if (!title) {
         res.status(400).json({
            success: false,
            message: "title cannot be empty",
         });
         return;
      }

      const createdTodo = await todoModel.create({
         title,
      });

      res.status(200).json({
         success: true,
         message: "Todo created Successfully",
         todos: createdTodo,
      });
   } catch (error) {
      console.log("Something went wrong while getting todo", error);
      res.status(500).json({
         success: false,
         message: "Something went wrong while getting todo",
         error: error,
      });
   }
};

export const updateTodo = async (req: Request, res: Response) => {
   try {
      const { id } = req.params;
      const { isCompleted } = req.body;

      const updatedTodo = await todoModel.findByIdAndUpdate(
         id,
         { isCompleted },
         { new: true },
      );

      res.status(200).json({
         success: true,
         message: "Todo deleted successfully",
         todo: updatedTodo,
      });
   } catch (error) {
      console.log("Something went wrong while getting todo", error);
      res.status(500).json({
         success: false,
         message: "Something went wrong while getting todo",
         error: error,
      });
   }
};

export const deleteTodo = async (req: Request, res: Response) => {
   try {
      const { id } = req.params;

      const updatedTodo = await todoModel.deleteOne({ _id: id });

      res.status(200).json({
         success: true,
         message: "Todo deleted successfully",
         todo: updatedTodo,
      });
   } catch (error) {
      console.log("Something went wrong while getting todo", error);
      res.status(500).json({
         success: false,
         message: "Something went wrong while getting todo",
         error: error,
      });
   }
};
