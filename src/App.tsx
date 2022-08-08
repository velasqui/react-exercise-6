import { useState, useEffect } from 'react';
import { fetchAllQuotes } from './services/quotes.services';
import { fetchAllPeriods } from './services/periods.services';
import { Quote, Periods } from './types';
import './App.css';

function App() {
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [quote, setQuote] = useState<Quote>();
  const [periods, setPeriods] = useState<Periods[]>([])
  const [period, setPeriod] = useState<Periods>()

  useEffect(() => {
    getAllQuotes();
  }, []);

  useEffect(() => {
    getAllPeriods();
  }, []);
  
  function getAllQuotes() {
    fetchAllQuotes().then(response => setQuotes(response.data));
  };

  function getAllPeriods() {
    fetchAllPeriods().then(periods => setPeriods(periods));
  };

  return (
    <div className="App">
      <h1>Weather Forecast</h1>

      <div className='periods'>
        <ul>
          {periods.map(period => (
            <li>
              <h2>{ period.name }</h2>
              <p>{ period.temperature }</p>
              <img src={`${period.icon}`} alt=''></img>
              <p>{ period.detailedForecast }</p>
            </li>
          ))}
        </ul>
      </div>

      <div className='quotes'>
        <ul>
          {quotes.map(quote => (
            <li>
              <p>Author: {quote.author}</p>
              <p>Text: {quote.text}</p>
            </li>
          ))}
        </ul>        
      </div>
    </div>
  );
}

export default App;
