import React from 'react';
import BookCard from './bookcard.jsx';




//Under kan du se koden til komponentet, som viser søkeresultater
function Resultat({ books }) {
    return (
      <section className="search-results">
        {books && books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </section>
    )
  }
  
  export default Resultat;
  




