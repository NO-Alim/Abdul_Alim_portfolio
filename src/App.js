import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import {BrowserRouter as Router, HashRouter, Route, Switch} from 'react-router-dom'
import Error from "./Pages/Error";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
