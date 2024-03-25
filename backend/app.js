require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./route/authRoute");
const contactRoute = require("./route/contactRoute");
const connetDb = require("./db/db");
const errorMiddleware = require("./middleware/errorMiddleware");

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

app.use(errorMiddleware);

// PORT
const PORT = process.env.PORT;

connetDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening to server : ${PORT}`);
  });
});
