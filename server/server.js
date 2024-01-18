import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

// create app
const PORT = 8080; // port variable
const app = express(); // initialised a new express application called app

app.get("/", (request, response) => {
  response.json("This is the root route");
});

app.listen(PORT, () => console.log(`app is running on ${PORT}`));
