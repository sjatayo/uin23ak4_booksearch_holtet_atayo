import React, { useState, useEffect } from 'react';
import './styles/main.scss';
import SearchResults from './Components/SearchResults.jsx';

function App() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (query.length >= 3) {
          const response = await fetch(`https://openlibrary.org/search.json?q=james%20bond&fields=*,availability&limit=1${encodeURIComponent(query)}`);
          const data = await response.json();
          setBooks(data.docs);
        } else {
          setBooks([]); 
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [query]); 
  return (
    <div className="App">
      <header>
        <h1>Book Finder</h1>
      </header>
      <main>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Minst tre Karakterer"
          className="search-input" 
        />
        <SearchResults books={books} />
      </main>
    </div>
  )
}




export default App;

