const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");
const userRoutes = require("./routes/userRoutes");

const app = express();
dotenv.config();

// port
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

// Routes
app.use("/api/v2/users", userRoutes);

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
