import NavBar from "../nav-bar/NavBar";
import BookList from "../book-list/BookList";
import { useState } from "react";

import Footer from "../footer/Footer";
import SearchBar from "../common/SearchBar";
import { getBookById } from "../utils/BookUtils";

import "./Homepage.css";

export default function Homepage({ books, selectedBook, setSelectedBook }) {
  const [readBookIds, setReadBookIds] = useState(new Set());
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [query, setQuery] = useState("");

  function handleQueryChange(query, navigation) {
    setQuery(query);

    const freshList = books.filter((book) => {
      return book.title.toLowerCase().includes(query.toLowerCase());
    });

    setFilteredBooks(freshList);
  }

  function handleBookClick(bookId) {
    const newReadBooks = new Set(readBookIds);
    newReadBooks.add(bookId);
    setReadBookIds(newReadBooks);
    if (selectedBook?.id !== bookId)
      setSelectedBook(getBookById(books, bookId));
  }

  return (
    <div>
      <NavBar>
        <h2>📚 Better Books</h2>
        <SearchBar query={query} onQueryChange={handleQueryChange} />
        <span className="books-read">
          {readBookIds ? readBookIds.size : 0}/
          {filteredBooks ? filteredBooks.length : 0} Books read✌🏻
        </span>
      </NavBar>
      <BookList
        books={filteredBooks}
        onBookClick={handleBookClick}
        query={query}
      />
      <Footer />
    </div>
  );
}
