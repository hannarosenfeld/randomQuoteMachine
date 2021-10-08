window.onload = init;
function init() {
    getQuote()
}

function getQuote(){
    let randomIndex = Math.floor(Math.random() * QUOTES.length);
    let randomQuote = QUOTES[randomIndex];
    
    document.getElementById("text").innerText = randomQuote.quote;
    document.getElementById("author").innerText = "- " + randomQuote.author;
    const twitter = document.querySelector('#tweet-quote')
    twitter.setAttribute(
        'href',
        'https://twitter.com/intent/tweet?text=' +
        encodeURIComponent('"' + randomQuote.quote + '" ' + '- ' + randomQuote.author)
    )
}
