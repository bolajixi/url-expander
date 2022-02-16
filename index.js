const express = require("express");
const app = express();

const request = require("request");

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.get("/expand", (req, res) => {
	const shortUrl = req.query.shortUrl;
	request(
		{
			url: shortUrl,
			method: "HEAD",
			followAllRedirects: true,
		},
		(err, response, body) => {
			if (err) {
				res.sendStatus(500);
			} else {
				res.send(response.request.uri.href);
			}
		}
	);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
