'use client'
import { useState, useEffect } from 'react';
import fs from 'fs';
import csvParser from 'csv-parser';

const RandomQuote = () => {
  const [quote, setQuote] = useState<{ quote: string; author: string } | null>(null);
  const [quotes, setQuotes] = useState<{ quote: string; author: string }[]>([]);

  useEffect(() => {
    const filePath = 'my-app/public/quotes.csv';

    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (data: { quote: string; author: string }) => {
        setQuotes((prevQuotes) => [...prevQuotes, data]);
      })
      .on('end', () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
      });
  }, [quotes]); // Include filePath in the dependency array

  const handleGetRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div>
      {quote && (
        <div>
          <p onClick={handleGetRandomQuote}>{quote.quote}</p>
          <p>- {quote.author}</p>
        </div>
      )}
    </div>
  );
};

export default RandomQuote;
