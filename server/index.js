const express = require("express");
const cors = require("cors");
require("dotenv").config();

const DalleRouter = require("./routes/dalle");

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/dalle", DalleRouter);

app.get("/", (req, res) => {
    console.log("app running");
    res.send();
});

app.listen(8080, () => console.log("Listening...!"));