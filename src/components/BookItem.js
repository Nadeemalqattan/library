//styling
import { BookWrapper } from "../styles";

const BookItem = (props) => {
  const book = props.book;
  return (
    <BookWrapper key={book.id}>
      <h4>{book.title}</h4>
      <p>{book.genre}</p>
      <p>{book.author}</p>
    </BookWrapper>
  );
};

export default BookItem;
