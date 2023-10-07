import { useState } from "react";

import Footer from "../footer/Footer";
import NavBar from "../nav-bar/NavBar";

import "./BookViewer.css";

const bookData = {
  pages: [
    "Page 1 content goes here...",
    "Page 2 content goes here...",
    "Page 3 content goes here...",
    // Add more pages as needed
  ],
  helperContent: [
    {
      left: [
        {
          imageUrl: "https://i.pravatar.cc/48?u=4994763",
          description:
            "Description of the first explanatory message. This can be a video.",
        },
        {},
        {
          imageUrl: "https://i.pravatar.cc/48?u=4994763",
          description:
            "Description of the first explanatory message. This can be a video.",
        },
      ],
      right: [
        {},
        {
          imageUrl: "https://i.pravatar.cc/48?u=4994763",
          description:
            "Description of the first explanatory message. This can be a video.",
        },
        {
          imageUrl: "https://i.pravatar.cc/48?u=4994763",
          description:
            "Description of the first explanatory message. This can be a video.",
        },
      ],
    },
    { left: [], right: [] },
    { left: [], right: [] },
  ],
};

export default function BookViewer({ book }) {
  const [currentPage, setCurrentPage] = useState(0);

  if (!book) return;

  const goToNextPage = () => {
    if (currentPage < bookData.pages.length - 1) {
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
        <div className="navigation">
          <button onClick={goToPreviousPage} disabled={currentPage === 0}>
            Previous Page
          </button>
          <button
            onClick={goToNextPage}
            disabled={currentPage === bookData.pages.length - 1}
          >
            Next Page
          </button>
        </div>
        <div className="page">
          <div className="page-images">
            <div className="image-container">
              <img src="https://i.pravatar.cc/48?u=4994763" alt="Left" />
              <p>Left Image Text</p>
            </div>
            <div className="image-container"></div>
            <div className="image-container">
              <img src="https://i.pravatar.cc/48?u=4994763" alt="Right" />
              <p>Right Image Text</p>
            </div>
          </div>
          <div className="page-content">
            <p>{bookData.pages[currentPage]}</p>
          </div>
          <div className="page-images">
            <div className="image-container"></div>
            <div className="image-container">
              <img src="https://i.pravatar.cc/48?u=4994763" alt="Left" />
              <p>Left Image Text</p>
            </div>
            <div className="image-container">
              <img src="https://i.pravatar.cc/48?u=4994763" alt="Right" />
              <p>Right Image Text</p>
            </div>
          </div>
        </div>
        <div className="navigation">
          <button onClick={goToPreviousPage} disabled={currentPage === 0}>
            Previous Page
          </button>
          <button
            onClick={goToNextPage}
            disabled={currentPage === bookData.pages.length - 1}
          >
            Next Page
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
