// const express = require('express');
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import express from "express";
import indexRoutes from "./routes/index.routes.js";
import itemsFBRoutes from "./routes/itemsFB.routes.js";
import loginRoutes from "./routes/login.routes.js";
import serverlessExpress from "@vendia/serverless-express";

const app = express();

const allowedOrigins = [
  `http://localhost:3000`,
  "https://plan-soft6to-web.vercel.app",
];

// Middleware para eliminar barras diagonales dobles en la URL
app.use((req, res, next) => {
  req.url = req.url.replace(/\/+/g, "/");
  next();
});

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(indexRoutes);
app.use(itemsFBRoutes);
app.use(loginRoutes);

export default serverlessExpress({ app });

// app.listen(5000, console.log("http://localhost:5000"));
