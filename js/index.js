var quotes = [
  {
    id: 1,
    quote: `“Be yourself; everyone else is already taken.”`,
    author: "― Oscar Wilde",
  },
  {
    id: 2,
    quote: `“So many books, so little time.”`,
    author: "― Frank Zappa",
  },
  {
    id: 3,
    quote: `“A room without books is like a body without a soul.”`,
    author: "― Marcus Tullius Cicero",
  },
  {
    id: 4,
    quote: `“Be the change that you wish to see in the world.”`,
    author: "― Mahatma Gandhi",
  },
  {
    id: 5,
    quote: `“If you tell the truth, you don't have to remember anything.”`,
    author: "― Mark Twain",
  },
  {
    id: 6,
    quote: `“A friend is someone who knows all about you and still loves you.”`,
    author: "― Elbert Hubbard",
  },
];
var choosenQuote;
// var choosenQuote;
var quote = document.getElementById("quote");
var author = document.getElementById("author");
function changeQuote() {
  var range = quotes.length;

  for (var i = 0; i < range; i++) {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var newQuote = quotes[randomIndex];

    if (!choosenQuote || choosenQuote.id !== newQuote.id) {
      choosenQuote = newQuote;

      quote.innerHTML = choosenQuote.quote;
      author.innerHTML = choosenQuote.author;
      break;
    }
  }
}
