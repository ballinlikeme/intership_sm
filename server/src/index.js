import express from "express";
import dotenv from "dotenv";
import { router } from "./routers/index.js";

dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log("Server started on PORT " + PORT);
});
