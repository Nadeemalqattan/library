const CREATE_BOOK = "CREATE_BOOK";
const CREATE_MEMBER = "CREATE_MEMBER";

export const createBook = (newBook) => {
  return {
    type: CREATE_BOOK,
    payload: { newBook },
  };
};

export const createMember = (newMember) => {
  return {
    type: CREATE_MEMBER,
    payload: { newMember },
  };
};
