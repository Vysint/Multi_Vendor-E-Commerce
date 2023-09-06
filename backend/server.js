const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");

const app = express();
dotenv.config();

// port
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(fileUpload({ useTempFiles: true }));

//Error middlewares
app.use(errorHandler);
app.use(notFound);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connect to mongoDB`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
  connect();
});
