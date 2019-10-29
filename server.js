const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello")
})

app.listen(process.env.PORT || 3000 , () => {
    console.log("Server listening at port 3000");
})