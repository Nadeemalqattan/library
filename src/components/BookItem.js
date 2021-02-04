//styling
import { BookWrapper } from "../styles";
//Link
import { Link } from "react-router-dom";

const BookItem = (props) => {
  const book = props.book;
  return (
    <BookWrapper key={book.id}>
      <h4>{book.title}</h4>
      <p>{book.author}</p>
      <p>{book.genre}</p>
      <Link to={`/Books/${book.slug}`}>
        <button type="button" class="btn btn-dark">
          More Details
        </button>
      </Link>
    </BookWrapper>
  );
};

export default BookItem;
