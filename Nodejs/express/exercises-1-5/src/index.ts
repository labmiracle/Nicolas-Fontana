import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use("/", (req, res, next) => {
    console.log(req.url);
    next();
});

app.use("/static", express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    res.json("Hello world!");
});

app.get("/yo", (req, res) => {
    res.json("Route '/yo'");
});

app.listen(port, () => {
    console.log("Server listening on port: ", port);
});
