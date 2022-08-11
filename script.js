const description = document.querySelector('#Advice');
const title = document.querySelector('#title');


newAdvice();

function newAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then((data) => newText(data.slip.id, data.slip.advice));
}


function newText(id, advice) {
    title.innerHTML = `ADVICE #${id}`;
    description.innerHTML = advice;
}
const button = Document.querySelector('#btn');
button.addEventListener("click", newAdvice);
