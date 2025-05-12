// const express = require('express');
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import express from "express";
import indexRoutes from "./routes/index.routes.js";
import itemsFBRoutes from "./routes/itemsFB.routes.js";
import loginRoutes from "./routes/login.routes.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(indexRoutes);
app.use(itemsFBRoutes);
app.use(loginRoutes);

app.listen(5000, console.log("http://localhost:5000"));
