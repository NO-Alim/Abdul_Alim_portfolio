import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import {BrowserRouter, BrowserRouter as Router, HashRouter, Route, Switch} from 'react-router-dom'
import Error from "./Pages/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Navbar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
