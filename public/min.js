const input = document.querySelector("#input");
const exapandBtn = document.querySelector("#expand-btn");
const result = document.querySelector("#result");

// exapandBtn.addEventListener("click", () => {
// 	fetch(`/expand?shortUrl=${input.value}`)
// 		.then((res) => res.text())
// 		.then((text) => {
// 			result.innerText = text;
// 		})
// 		.catch((err) => {
// 			console.error(err);
// 			result.innerText = "Error";
// 		});
// });

exapandBtn.addEventListener("click", () => {
	fetch(`/expand`)
		.then((res) => res.text())
		.then((text) => {
			result.innerText = text;
		})
		.catch((err) => {
			console.error(err);
			result.innerText = "Error";
		});
});
