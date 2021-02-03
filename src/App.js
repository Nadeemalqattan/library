import "./App.css";
//Route
import { Route, Switch } from "react-router";
//components
import Home from "./components/HomePage";
import Members from "./components/MembersPage";
import Books from "./components/BookPage";
import MemberForm from "./components/MemberForm";

function App() {
  return (
    <Switch>
      {/* <Route exact Path="/">
        <Home />
      </Route> */}
      <Route path="/members/new">
        <MemberForm />
      </Route>
      <Route Path="/members">
        <Members />
      </Route>

      <Route Path="/books">
        <Books />
      </Route>
    </Switch>
  );
}

export default App;
