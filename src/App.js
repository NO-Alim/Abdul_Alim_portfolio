import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Error from "./Pages/Error";
import About from "./Component/About";
import Footer from "./Component/Footer";
import TopBtn from "./Component/TopBtn";
import Social from "./Component/Social";
import SideScroller from "./Component/SideScroller";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
        <TopBtn />
        <Social />
        <SideScroller />
      </Router>
    </div>
  );
}

export default App;
