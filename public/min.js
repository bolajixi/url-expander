const input = document.querySelector("#input");
const exapandBtn = document.querySelector("#expand-btn");
const result = document.querySelector("#result");

exapandBtn.addEventListener("click", () => {
	result.innerText = "Loading...";

	fetch(`/expand?shortUrl=${input.value}`)
		.then((res) => res.text())
		.then((text) => {
			result.innerText = text;
			result.setAttribute("href", text);
		})
		.catch((err) => {
			console.error(err);
			result.innerText = "Error";
		});
});
