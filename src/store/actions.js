const CREATE_BOOK = "CREATE_BOOK";

export const createBook = (newBook) => {
  return {
    type: CREATE_BOOK,
    payload: { newBook },
  };
};
