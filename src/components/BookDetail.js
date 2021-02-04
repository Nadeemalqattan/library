import { DetailWrapper } from "../styles";
import { useParams, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const BookDetail = () => {
  const bookSlug = useParams().bookSlug;
  const books = useSelector((state) => state.books);
  const book = books.find((book) => book.slug === bookSlug);
  if (!book) return <Redirect to="/books" />;

  return (
    <DetailWrapper>
      <h1>{book.title}</h1>
      <p>{book.author} KD</p>
      <p>{book.genre}</p>
    </DetailWrapper>
  );
};

export default BookDetail;
