//styling
import { DetailWrapper } from "../styles";

const BookDetail = (props) => {
  const book = props.book;
  return (
    <DetailWrapper>
      <h4>{book.title}</h4>
      <p>{book.genre}</p>
      <p>{book.author}</p>
    </DetailWrapper>
  );
};
export default BookDetail;
