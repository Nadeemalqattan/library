//Each member
import BookList from "./BookList";
//Style
import { Title } from "../styles";

const Books = () => {
  return (
    <div>
      <Title>Library Books</Title>
      <BookList></BookList>
    </div>
  );
};

export default Books;
