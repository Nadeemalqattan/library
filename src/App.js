import "./App.css";
//Route
import { Route, Switch } from "react-router";
//components
import Home from "./components/HomePage";
import Members from "./components/MembersPage";
import Books from "./components/BookPage";
import MemberForm from "./components/MemberForm";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/members/new">
          <MemberForm />
        </Route>
        <Route Path="/books">
          <Books />
        </Route>
        <Route Path="/members">
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
