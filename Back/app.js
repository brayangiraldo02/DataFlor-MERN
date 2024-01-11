import express from "express";
import cors from "cors"
import morgan from "morgan"
import router from "./app/routes/index.routes.js"

const app = express();

app.use(cors());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router)
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});