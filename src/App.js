import Create from "./components/Create";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import List from "./components/List";



function App() {

  return (
    <Router>
      <div className="app">
        <Navbar />

        <div className="main">
          <Switch>
            <Route exact path={"/"}>
              <List />
            </Route>

            <Route exact path={"/create"}>
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
