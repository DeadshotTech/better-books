export function getBookById(books, bookId) {
  return books.find((book) => book.id === bookId);
}
