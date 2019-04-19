const express = require("express");
const app = express();

const { authenticate } = require('./middleware/auth');

const authRoutes = require("./routes/authRoutes");
const parentRoutes = require("./routes/parentRoutes");
const childRoutes = require("./routes/childRoutes");
const foodRoutes = require("./routes/foodRoutes");

app.use(express.json());

app.get("/", (res,req) => {
    res.status(200).send("working");
});

app.use("/api/auth", authRoutes);
app.use(authenticate);
app.use("/api/parents", parentRoutes);
app.use("/api/child", childRoutes);
app.use("/api/child", foodRoutes);

app.listen(3000);