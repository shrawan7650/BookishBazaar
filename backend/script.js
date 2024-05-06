const express = require("express");
const app = express();
const databaseConnection = require("./config/db.js");
const formidableMiddleware = require("express-formidable");
require("dotenv").config();
const morgan = require("morgan");
const router = require("./routes/user/route.js");
const cookieParser = require("cookie-parser");
//midleware
app.use(express.json());
const cors = require("cors");
app.use(
  cors({
    origin: "https://bookish-bazaar-w7ym.vercel.app",
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(cookieParser());
// app.use(formidableMiddleware());
//route mount
app.use("/api/v1", router);

const port = process.env.PORT || 4000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`server app listening on port ${port}!`));

//call the databse
databaseConnection();
