import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Error from "./Pages/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </switch>
      </Router>
    </div>
  );
}

export default App;
