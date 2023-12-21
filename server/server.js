const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const router = require("./routes/routes");
dotenv.config();

connectDB();

const app = express();

// app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(
  cors({
    origin: "https://amazaon-clone-client.vercel.app",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use(router);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(
    `Server is running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
