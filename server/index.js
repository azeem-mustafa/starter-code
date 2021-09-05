const { json } = require("express");
const express = require("express");
const app = express();
const fs = require("fs");
const resourceFile = "./data/resources.json";

app.use(express.json());

const readData = () => {
  const data = JSON.parse(fs.readFileSync(resourceFile));
  return data;
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/learn", (req, res) => {
  try {
    const data = readData();
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: `There has been an error ${err}` });
  }
});

app.listen(8080, () => console.log("App is listening on port 8080"));
