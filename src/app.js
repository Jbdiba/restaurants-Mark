import express from "express";
import api from "./route/api/index.js";

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", api);

export default app;
