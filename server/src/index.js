import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import { router } from "./routers/index.js";
import { errorHandler } from "./middlewares/ErrorHandler.js";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use("/", router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server started on PORT " + PORT);
});
