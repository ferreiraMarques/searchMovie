import React from 'react';
import SearchMovie from './components/SearchMovie';
import DetailMovie from './components/DetailMovie';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/" >Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/top" >Top</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <h3 className="text-center mt-5">React Movie Search</h3>

        <Switch>
          <Route exact path="/">
            <SearchMovie />
          </Route>
          <Route path="/movie/:id" component={DetailMovie} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
