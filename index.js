const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.get("/expand", (req, res) => {
	const shortUrl = req.query.shortUrl;
	res.send("Hellow world");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
