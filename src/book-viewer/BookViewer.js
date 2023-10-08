import { useEffect, useState } from "react";
import Modal from "react-modal";

import Footer from "../footer/Footer";
import NavBar from "../nav-bar/NavBar";

import "./BookViewer.css";

import { bookData, bookText } from "../configs/InitialValues";
import BookPaginator from "./BookPaginator";
import PageHelperContent from "./PageHelperContent";

export default function BookViewer({ book }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Split text into pages
    const charsPerPage = 3500; // Maximum characters per page
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

  const openModal = () => {
    setModalIsOpen(true);
    setIsVideoLoaded(false); // Reset the video loaded state each time modal opens
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

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

  const handleHelperContentClick = () => {
    openModal();
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
            handleHelperContentClick={handleHelperContentClick}
          />
          <div className="page-content">
            <p>{pages[currentPage]}</p>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Video Modal"
            ariaHideApp={false}
            style={{
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              },
              content: {
                width: "560px",
                height: "365px",
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                padding: "20px",
              },
            }}
          >
            <div className="helper-content-modal">
              <div className="helper-content-title">
                <span>
                  <strong>Video title should appear here</strong>
                </span>
                <button onClick={closeModal} className="close-button">
                  Close ❌
                </button>
              </div>
              <div className="videoContainer">
                {!isVideoLoaded && <div className="loadingSpinner"></div>}
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/af4oGaPPuD8"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onLoad={handleVideoLoad}
                  style={{ display: isVideoLoaded ? "block" : "none" }}
                />
              </div>
            </div>
          </Modal>
          <PageHelperContent
            helperContent={bookData?.pages[currentPage]?.helperContent?.right}
            handleHelperContentClick={handleHelperContentClick}
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
