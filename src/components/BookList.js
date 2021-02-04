//Data
import books from "../books";
import { BookWrapper, BooksTitle } from "../styles";
import BookItem from "./BookItem";
import SearchBar from "./SearchBar";
import { useState } from "react";

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
      </BookWrapper>
    </>
  );
};

export default BookList;
