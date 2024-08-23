let ball;
let askInput;
let answer;
let errorInfo;

const answerArray = [
	"Tak.",
	"Nie.",
	"Być Może.",
	"Nie chcesz znać odpowiedzi na to pytanie.",
	"Nie wiem.",
];

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	ball = document.querySelector("img");
	askInput = document.querySelector(".ask-input");
	answer = document.querySelector(".answer");
	errorInfo = document.querySelector(".error");
};

const prepareDOMEvents = () => {
	ball.addEventListener("click", shake);
};

const shake = () => {
	ball.classList.add("shake-animation");
	setTimeout(() => {
		ball.classList.remove("shake-animation");
	}, 1100);
	if (askInput.value !== "" && askInput.value.slice(-1) === "?") {
		setTimeout(randomAnswer, 1000);
		errorInfo.textContent = "";
	} else if (askInput.value !== "" && askInput.value.slice(-1) !== "?") {
		answer.textContent = "";
		setTimeout(() => {
			errorInfo.textContent = "Musisz zakończyć pytanie znakiem zapytania.";
		}, 1000);
	} else {
		answer.textContent = "";
		setTimeout(() => {
			errorInfo.textContent = "Musisz napisać pytanie.";
		}, 1000);
	}
};

const randomAnswer = () => {
	answer.textContent =
		answerArray[Math.floor(Math.random() * answerArray.length)];
};

document.addEventListener("DOMContentLoaded", main);
