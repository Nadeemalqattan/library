import bookData from "../books";
import slugify from "react-slugify";

const initialState = {
  books: bookData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_BOOK":
      action.payload.newBook.id = state.books[state.books.length - 1].id + 1;
      action.payload.newBook.slug = slugify(action.payload.newBook.title);
      return {
        ...state,
        Books: [...state.books, action.payload.newBook],
      };
    default:
      return state;
  }
};
export default reducer;
