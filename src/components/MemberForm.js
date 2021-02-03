//Style

const MemberForm = () => {
  //   const [member, setMember] = useState({
  //     firstName: "",
  //     lastName: "",
  //     membership: "",
  //   });
  return (
    <form>
      <div className="form-group row">
        <div className="col-6">
          <label>First Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-6">
          <label>Last Name</label>
          <input type="name" className="form-control" />
        </div>
      </div>
      <div className="form-group">
        <label>Membership</label>
        <input type="text" className="form-control" />
      </div>
    </form>
  );
};
export default MemberForm;
