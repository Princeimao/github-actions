import mongoose from "mongoose";

export const dbConnection = async () => {
   try {
      if (!process.env.MONGODB_URL) {
         throw new Error("MongoDB URL is not defined");
      }
      await mongoose.connect(process.env.MONGODB_URL);
      console.log("CONNECTION TO DATABASE SUCCESSFULLY");
      return;
   } catch (error) {
      console.log("Something went while connection to database", error);
      process.exit(0);
   }
};
