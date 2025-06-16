const quotes = [
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "Get busy living or get busy dying.",
    author: "Stephen King"
  },
  {
    text: "You only live once, but if you do it right, once is enough.",
    author: "Mae West"
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost"
  }
];

function App() {
  const [quote, setQuote] = React.useState({ text: "", author: "" });

  React.useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div id="quote-box">
      <p id="text">"{quote.text}"</p>
      <p id="author">- {quote.author}</p>

      <div className="buttons">
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `"${quote.text}" - ${quote.author}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet
        </a>
        <button id="new-quote" onClick={getRandomQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
