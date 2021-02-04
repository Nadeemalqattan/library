import { useState } from "react";
import { ListWrapper } from "../styles";
import { useDispatch } from "react-redux";
import { createMember } from "../store/actions";
import { useHistory } from "react-router-dom";

const MemberForm = () => {
  const [member, setMember] = useState({
    firstName: "",
    lastName: "",
    currentlyBorrowedBooks: "",
    membership: "",
  });

  const history = useHistory();

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createMember(member));
    history.push("/members");
  };
  const handleChange = (event) => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  return (
    <ListWrapper>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>First Name</label>
            <input
              value={member.firstName}
              name="firstName"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>Last Name</label>
            <input
              value={member.lastName}
              name="lastName"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Borrowed Books</label>
          <input
            value={member.currentlyBorrowedBooks}
            name="currentlyBorrowedBooks"
            type="number"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Membership</label>
          <input
            value={member.membership}
            name="membership"
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <button className="btn float-right">Create</button>
      </form>
    </ListWrapper>
  );
};

export default MemberForm;
