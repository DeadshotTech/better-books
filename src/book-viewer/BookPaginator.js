export default function BookPaginator({
  onPreviousClick,
  onNextClick,
  currentPage,
  dataLength,
}) {
  return (
    <div className="navigation">
      <button onClick={onPreviousClick} disabled={currentPage === 0}>
        Previous Page
      </button>
      <button onClick={onNextClick} disabled={currentPage === dataLength - 1}>
        Next Page
      </button>
    </div>
  );
}
