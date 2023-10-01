import React from "react";

function BookDescription({ title, author }) {
  return (
    <div className="book-description">
      <h2>{title}</h2>
      <p>By {author}</p>
    </div>
  );
}

function BookCard({ book, index }) {
  return (
    <div className="book-card">
      <img src={book.imageUrl} alt={`${index}_profile_pic`} />
      <BookDescription title={book.title} author={book.author} />
    </div>
  );
}

export default BookCard;
