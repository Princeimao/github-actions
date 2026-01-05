import "dotenv/config";
import { app } from "./app.js";
import { dbConnection } from "./db/mongoose.connection.js";

(async function () {
   try {
      await dbConnection();
      app.listen(process.env.PORT, () => {
         console.log(`SERVER IS RUNNING ON PORT: ${process.env.PORT}`);
      });
   } catch (error) {
      console.log("SOMETHING WENT WHILE CONNECTION TO SERVER", error);
      process.exit(0);
   }
})();
