import React from "react";
import { useState } from "react";

import NavBar from "./nav-bar/NavBar";
import BookList from "./book-list/BookList";

import "./App.css";

import { initialReadBooks, intialBookList } from "./configs/InitialValues";

function Search({ children }) {
  return <>{children}</>;
}

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState(intialBookList);
  const [readBooks, setReadBooks] = useState(initialReadBooks);
  const [filteredBooks, setFilteredBooks] = useState(books);

  function onBookClick(e) {
    console.log(e);
  }

  function handleQueryChange(query) {
    setQuery(query);

    const freshList = books.filter((book) => {
      return book.title.toLowerCase().includes(query.toLowerCase());
    });

    setFilteredBooks(freshList);
  }

  return (
    <div>
      <NavBar>
        <h2>📚 Better Books</h2>
        <Search>
          <input
            className="search"
            type="text"
            placeholder="Search books..."
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
          />
        </Search>
        <span>
          {readBooks ? readBooks.length : 0}/
          {filteredBooks ? filteredBooks.length : 0} Books read✌🏻
        </span>
      </NavBar>
      <BookList books={filteredBooks} onBookClick={onBookClick} query={query} />
    </div>
  );
}

export default App;
