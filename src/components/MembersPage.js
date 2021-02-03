//Each member
import MemberList from "./MemberList";
//Style
import { Title } from "../styles";
//Add Button
import { BsPlusCircle } from "react-icons/bs";
//Link
import { Link } from "react-router-dom";

const Members = () => {
  return (
    <div>
      <Title>Library Members</Title>
      <Link to="/members/new">
        <BsPlusCircle className="align-right" size="2em" />
      </Link>
      <MemberList />
    </div>
  );
};

export default Members;
