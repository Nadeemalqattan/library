//Data
import book from "../books";
import { BookWrapper } from "../styles";

const BookList = () => {
  const bookList = book.map((book) => (
    <BookWrapper key={book.id}>
      <h3>{book.title}</h3>
      <p>{book.genre}</p>
      <p>{book.author}</p>
    </BookWrapper>
  ));
  return <div>{bookList}</div>;
};

export default BookList;
