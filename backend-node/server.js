// backend-node/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./src/routes/userRoutes");
const iaRoutes = require("./src/routes/iaRoutes");


const app = express();
const port = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/ia", iaRoutes);


app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
