const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const PORT = process.env.PORT || 8090;
//! Database
const dataBase = require("./config/dataBase");
dataBase();
//! Settings
app.use(express.static(`${__dirname}/public`));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//! Routes
const indexRoute = require("./routes/indexRoute");
app.use("/", indexRoute);

//! Listen
app.listen(PORT, () => {
  console.log("Server is running on PORT::" + PORT);
});
