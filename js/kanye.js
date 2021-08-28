const loadQuote = () => fetch("https://api.kanye.rest/").then(res => res.json()).then(data => showQuoto(data));

const showQuoto = (quotoInput) => {
    const quoteId = document.getElementById("quoteId");
    quoteId.innerText = quotoInput.quote;
}