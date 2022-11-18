const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", (req, res) => {
    console.log("Request at /");
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT);

console.log(`Listening at port ${PORT}`);