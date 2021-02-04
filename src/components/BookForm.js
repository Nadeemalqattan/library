import { useState } from "react";
import { ListWrapper } from "../styles";
import { useDispatch } from "react-redux";
import { createBook } from "../store/actions";
import { useHistory } from "react-router-dom";

const BookForm = () => {
  const [book, setBook] = useState({
    author: "",
    title: "",
    genre: "",
    available: "",
  });

  const history = useHistory();

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createBook(book));
    history.push("/books");
  };
  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  return (
    <ListWrapper>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Author</label>
            <input
              value={book.author}
              name="author"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>Title</label>
            <input
              value={book.title}
              name="title"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Genre</label>
          <input
            value={book.genre}
            name="genre"
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Available</label>
          <input
            value={book.available}
            name="available"
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

export default BookForm;
