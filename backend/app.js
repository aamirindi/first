require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./route/authRoute");
const connetDb = require("./db/db");

app.use(express.json());

app.use("/api/auth", router);

// PORT
const PORT = process.env.PORT;

connetDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening to server : ${PORT}`);
  });
});
