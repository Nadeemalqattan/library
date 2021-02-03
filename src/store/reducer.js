import slugify from "react-slugify";

switch (action.type) {
  case "CREATE_MEMBER":
    const { newMember } = action.payload;
    action.payload.newMember.id =
      state.members[state.members.length - 1].id + 1;
    action.payload.newMember.slug = slugify(action.payload.newMember.name);
    return {
      ...state,
      members: [...state.members, action.payload.newMember],
    };
}
