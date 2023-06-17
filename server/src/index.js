import express from "express";
import "dotenv/config";
import cors from "cors";
import { router } from "./routers/index.js";
import { errorHandler } from "./middlewares/ErrorHandler.js";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server started on PORT " + PORT);
});
