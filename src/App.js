import React from "react";
import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./App.css";

import Homepage from "./homepage/Homepage";
import BookViewer from "./book-viewer/BookViewer";

import { intialBookList } from "./configs/InitialValues";

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [books, setBooks] = useState(intialBookList);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="books" />} />
        <Route
          path="books"
          element={
            <Homepage
              books={books}
              selectedBook={selectedBook}
              setSelectedBook={setSelectedBook}
            />
          }
        />
        <Route
          path="book-viewer"
          element={<BookViewer book={selectedBook} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
