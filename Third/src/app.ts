import express from "express";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import todoRouter from "../src/router/todo.route.js";
app.use("/api/todo", todoRouter);
