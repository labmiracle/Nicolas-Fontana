import express from "express";
import dotenv from "dotenv";
import path from "path";
import axios from "axios"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/static", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/pokemon", async (req, res) => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1281")
    res.json(response.data)
  } catch (error) {
    res.status(500).json({error: "Error fetching data"})
  }
});

app.listen(PORT, () => {
    console.log("Server listening on port: ", PORT);
});
