import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Data collection status update

//Three Major configurations
app.use(express.json({ limit: "16kb" })); // to set json
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // to set url %20 or +
app.use(express.static("public")); // to set static for images

// Minor configuration
app.use(cookieParser());

export { app };
