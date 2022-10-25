const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

const courses = require("./data/courses.json");
const categories = require("./data/categories.json");

app.get("/", (req, res) => {
  res.send("Lunox is Working. . .");
});

app.get;

app.listen(port, () => {
  console.log(`Server is running on port : ${port} `);
});
