const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hey there you passed the second test");
});

app.listen(3000);
