const express = require("express");
const app = express();

const host = "localhost";
const port = 8080;

app.listen(port, () => {
    console.log(`Server running on http://${host}:${port}`);
});

app.use(express.static("public"));