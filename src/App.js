import "./App.css";
//Route
import { Route, Switch } from "react-router";
//components
import Home from "./components/HomePage";
//members
import Members from "./components/MembersPage";
import MemberForm from "./components/MemberForm";
//books
import Books from "./components/BookPage";
import BookForm from "./components/BookForm";
import BookDetail from "./components/BookDetail";
//NavBar
import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
//slugfy
import slugify from "react-slugify";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route excat path="/members/new">
          <MemberForm />
        </Route>
        <Route exact path="/booklist">
          <BookList />
        </Route>
        <Route path="/Books/:bookSlug">
          <BookDetail />
        </Route>
        <Route exact path="/books/new">
          <BookForm />
        </Route>
        <Route exact path="/books">
          <Books />
        </Route>
        <Route exact path="/members">
          <Members />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
