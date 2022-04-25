const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express());

app.get("/", (req, res) => {
  res.send("Volunteer Network works fine");
});

app.listen(port, () => {
  console.log("Listening to port ->", port);
});
