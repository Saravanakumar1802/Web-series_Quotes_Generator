let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const URL = "https://web-series-quotes-api.deta.dev/quote/";

// const quote_url="https://api.quotable.io/random";

const getQuote = (() => {
    fetch(URL)
        .then(res => res.json())
        .then((item) => {
            quote.innerHTML = item[0].quote;
            author.innerHTML = `- ${item[0].series}`;
        });
})
window.addEventListener("load", getQuote)
btn.addEventListener("click", getQuote);