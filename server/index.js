const { json } = require("express");
const express = require("express");
const app = express();
const fs = require("fs");
const resourceFile = "./data/resources.json";
const { v4: uuidv4 } = require("uuid");

app.use(express.json());

//For static assets
app.use(express.static("asset"));
app.use("/static-files", express.static("asset"));

const readData = () => {
  const data = JSON.parse(fs.readFileSync(resourceFile));
  return data;
};

app.get("/", (req, res) => {
  res.send("Welcome To Starter-Code Server");
});

app.get("/learn", (req, res) => {
  try {
    const data = readData();
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: `There has been an error ${err}` });
  }
});

app.post("/learn", (req, res) => {
  console.log("req body", req.body);

  const newResource = {
    id: uuidv4(),
    title: req.body.title,
    channel: req.body.channel,
    image: req.body.image,
    video: req.body.video,
    description: req.body.description,
  };

  const newData = readData();
  newData.push(newResource);

  fs.writeFileSync(resourceFile, JSON.stringify(newData));

  return res.status(202).json(newResource);
});

app.listen(8080, () => console.log("App is listening on port 8080"));
