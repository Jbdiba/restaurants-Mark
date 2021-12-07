import express from "express";
import router from "./route/api/index.js";

const app = express();

app.use(express.static("public"));

app.get("/now", (request, response) => {
  const date = new Date();
  response.send(date);
});

app.use("/api", router);

export default app;
