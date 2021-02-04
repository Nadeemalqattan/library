//Data
import books from "../books";
import { BookWrapper, BooksTitle } from "../styles";
import BookItem from "./BookItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";

const BookList = () => {
  const [query, setQuery] = useState("");

  const bookList = books
    .filter((book) => book.title.toLowerCase().includes(query.toLowerCase()))
    .map((book) => <BookItem book={book} key={book.id} />);

  return (
    <>
      <BookWrapper>
        <BooksTitle>Books</BooksTitle>
        <SearchBar setQuery={setQuery} />
        {bookList}
        <Link to="/book/new">
          <BsPlusCircle className="float-right" size="2em" />
        </Link>
      </BookWrapper>
    </>
  );
};

export default BookList;
