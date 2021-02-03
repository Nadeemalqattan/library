const CREATE_MEMBER = "CREATE_MEMBER";

export const createMember = (newMember) => {
  console.log(
    "🚀 ~ file: actions.js ~ line 6 ~ createMember ~ newMember",
    newMember
  );
  return {
    type: CREATE_MEMBER,
    payload: { newMember },
  };
};
