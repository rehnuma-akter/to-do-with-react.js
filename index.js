require("dotenv").config();
const express = require("express");

const app = express();

//middleWares
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("fullstack to do running");
});

app.post("/name", (req, res) => {
  if (req.body.name) {
    return res.json({ name: req.body.name });
  } else {
    return res.status(400).json({ error: "no name found" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`server is running ${process.env.PORT}`);
});
