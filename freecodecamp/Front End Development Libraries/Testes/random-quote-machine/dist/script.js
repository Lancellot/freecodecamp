const quotes = [
{
  text: "Life is what happens when you're busy making other plans.",
  author: "John Lennon" },

{
  text: "Get busy living or get busy dying.",
  author: "Stephen King" },

{
  text: "You only live once, but if you do it right, once is enough.",
  author: "Mae West" },

{
  text: "In three words I can sum up everything I've learned about life: it goes on.",
  author: "Robert Frost" }];



function App() {
  const [quote, setQuote] = React.useState({ text: "", author: "" });

  React.useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return /*#__PURE__*/(
    React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
    React.createElement("p", { id: "text" }, "\"", quote.text, "\""), /*#__PURE__*/
    React.createElement("p", { id: "author" }, "- ", quote.author), /*#__PURE__*/

    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", {
      id: "tweet-quote",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${quote.text}" - ${quote.author}`)
      }`,
      target: "_blank",
      rel: "noopener noreferrer" }, "Tweet"), /*#__PURE__*/



    React.createElement("button", { id: "new-quote", onClick: getRandomQuote }, "New Quote"))));





}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(App, null));