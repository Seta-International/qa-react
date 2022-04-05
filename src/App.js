import './App.css';
import { colors } from './constant';
import { useEffect, useState } from 'react';
import QuoteAuthor from './components/QuoteAuthor';
import Quote from './components/Quote';

function App() {
  const [colorIndex, setColorIndex] = useState(0);
  const [quote, setQuote] = useState({});
  // useEffect(() => {
  //   fetch('http://localhost:80/quote').then(res => res.json()).then(quote => setQuote(quote));
  // }, []);
  
  function randomColor() {
    const index = Math.floor(Math.random() * colors.length);
    if (colorIndex === index) {
      randomColor();
      return;
    }
    setColorIndex(index);
  }

  const handleClickNewQuote = () => {
    randomColor();
    fetch('http://localhost:80/quote').then(res => res.json()).then(quote => setQuote(quote));
  }

  return (
    <div className='container'
     style={{
      backgroundColor: colors[colorIndex],
    }}>
      <div>
        <div className="quote-box">
          <div
            className="quote-text text-center">
            <i
              class="fa fa-quote-left"
              id="quote"
              style={{
                color: colors[colorIndex],
              }}
            >
              <Quote quote={quote.quote} />
            </i>
          </div>
          <div

            id="quote-author"
            class="author-text"
            style={{
              color: colors[colorIndex],
            }}
          >
            <QuoteAuthor quoteAuthor={quote.author} />
          </div>
          <div class="quote-button">
            <button
              style={{
                background: colors[colorIndex],
              }}
              id="new-quote"
              data-test="new-quote-button"
              class="button new-quote"
              onClick={handleClickNewQuote}
            >
              New Quote
            </button>
          </div>
        </div>
        <div class="footer">
          by
          <a target="_blank" href="https://facebook.com/nam.hoang.185" rel="noreferrer">Nam Hoang</a>
        </div>
      </div>
    </div>
  );
}

export default App;
