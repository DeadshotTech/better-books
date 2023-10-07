import React from "react";
import PropTypes from "prop-types";

// commented code below is giving error proptypes is not defined. fix below code
// Write proptype checks for the BookCard component

function BookCard({ book, index, children }) {
  BookCard.propTypes = {
    book: PropTypes.shape({
      // title is not rrquired
      title: PropTypes.string,
      imageUrl: PropTypes.string.isRequired,
      author: PropTypes.string,
    }),
    // index is required
    index: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
  };
  return (
    <div className="book-card">
      <img src={book.imageUrl} alt={`${index}_profile_pic`} />
      {children}
    </div>
  );
}

export default BookCard;
