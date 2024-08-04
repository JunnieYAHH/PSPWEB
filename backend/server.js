const express = require('express');
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.get("/api/v1/test", (req, res) => {
    res.json({"users": ["user1", "user2","user3"]});
})

//port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(
      `Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
    );
  });