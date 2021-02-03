//Data
import book from "../books";
import { BookWrapper } from "../styles";

const BookList = () => {
  const bookList = book.map((book) => (
    <BookWrapper key={book.id}>
      <h4>{book.title}</h4>
      <p>{book.genre}</p>
      <p>{book.author}</p>
    </BookWrapper>
  ));
  return <div>{bookList}</div>;
};

export default BookList;
