import React from 'react'

function BookCard({ title, first_publish_year, author_name, cover_i, ratings_average }) {
  const coverImageUrl = cover_i ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg` : 'path/to/your/placeholder/image.jpg';


//Dette komponenntet viser det du ser av de ulike bøkene på siden 
  return (
    <article className="book-card">
      <img src={coverImageUrl} alt={`Cover of ${title}`} style={{ width: '100px', height: '150px', objectFit: 'cover' }} />
      <h2>{title}</h2>
      <p>År: {first_publish_year}</p>
      <p>Rating: {ratings_average}</p>
      <p>Forfatter: {author_name?.join(', ')}</p>
    </article>
  );
}



export default BookCard
