import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/signin" component={Signin}></Route>
          <Route path="/signup" component={Signup}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
