import { useEffect, useState } from "react";

import Footer from "../footer/Footer";
import NavBar from "../nav-bar/NavBar";

import "./BookViewer.css";

import { bookData, bookText } from "../configs/InitialValues";
import BookPaginator from "./BookPaginator";
import PageHelperContent from "./PageHelperContent";

export default function BookViewer({ book }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    // Split text into pages
    const charsPerPage = 1000; // Maximum characters per page
    const newPages = [];
    let remainingText = bookText;
    while (remainingText.length > 0) {
      let endIndex = charsPerPage;
      // Find the last paragraph break before charsPerPage
      if (remainingText.length > charsPerPage) {
        endIndex = remainingText.lastIndexOf("\n", charsPerPage);
      }
      // Add the page and remove it from remainingText
      newPages.push(remainingText.slice(0, endIndex).trim());
      remainingText = remainingText.slice(endIndex).trim();
    }
    setPages(newPages);
  }, [book]);

  if (!book) return;

  const goToNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <NavBar>
        <span>📚 {book.title}</span>
      </NavBar>
      <div className="book-container">
        <BookPaginator
          onPreviousClick={goToPreviousPage}
          onNextClick={goToNextPage}
          currentPage={currentPage}
          dataLength={pages.length}
        />
        <div className="page">
          <PageHelperContent
            helperContent={bookData?.pages[currentPage]?.helperContent?.left}
          />
          <div className="page-content">
            <p>{pages[currentPage]}</p>
          </div>
          <PageHelperContent
            helperContent={bookData?.pages[currentPage]?.helperContent?.right}
          />
        </div>
        <BookPaginator
          onPreviousClick={goToPreviousPage}
          onNextClick={goToNextPage}
          currentPage={currentPage}
          dataLength={pages.length}
        />
      </div>
      <Footer />
    </div>
  );
}
