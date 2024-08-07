const express = require('express');
const connectDB = require("./config/db");
const colors = require("colors");
const dotenv = require("dotenv");

//dot config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({limit: "100mb", extended: true }))
app.use(cookieParser());

//Set Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

//routes
app.use("/api/v1/exercise", require("./routes/exerciseRoutes"));


//port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(
      `Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
    );
  });