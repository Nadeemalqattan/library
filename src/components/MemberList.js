//Data
import members from "../members";
import { MemberWrapper } from "../styles";

const MemberList = () => {
  const memberList = members.map((member) => (
    <MemberWrapper key={member.id}>
      <h3>
        {member.firstName} {member.lastName}
      </h3>
      <p>{member.membership}</p>
    </MemberWrapper>
  ));
  return <div>{memberList}</div>;
};

export default MemberList;
