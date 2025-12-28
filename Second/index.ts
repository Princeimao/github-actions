import express from "express";
import { z } from "zod";

export const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sumInput = z.object({
   a: z.number(),
   b: z.number(),
});

app.post("/sum", (req, res) => {
   const { data, success } = sumInput.safeParse(req.body);

   if (!success) {
      return res.status(411).json({
         message: "Incorrect inputs",
      });
   }

   const answer = data.a + data.b;

   res.json({
      answer,
   });
});

app.get("/sum", (req, res) => {
   const { data, success } = sumInput.safeParse({
      a: Number(req.headers["a"]),
      b: Number(req.headers["b"]),
   });

   if (!success) {
      return res.status(411).json({
         message: "Incorrect inputs",
      });
   }

   const answer = data.a + data.b;

   res.json({
      answer,
   });
});

// NOT RUNNING THE APP BECAUSE I JUST WANT TO TEST MY UNIT TESTS
