import dotenv from "dotenv";
import connectDb from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDb()
  .then(() => {
    app.on("Error", (error) => {
      console.log("error:", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(
        `server is succesfully running on port : ${process.env.PORT}`
      );
    });
  })
  .catch((err) => console.log(err));
