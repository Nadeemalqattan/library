import "./App.css";
//Route
import { Link, Route, Switch } from "react-router";
//components
import Home from "./components/HomePage";
//members
import Members from "./components/MembersPage";
import MemberForm from "./components/MemberForm";
//books
import Books from "./components/BookPage";
//NavBar
import NavBar from "./components/NavBar";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route excat path="/members/new">
          <MemberForm />
        </Route>
        <Route exact Path="/booklist">
          <BookList />
        </Route>
        <Route exact Path="/books">
          <Books />
        </Route>
        <Route exact Path="/members">
          <Members />
        </Route>
        <Route exact Path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
