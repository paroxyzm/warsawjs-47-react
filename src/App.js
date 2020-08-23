import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Link // NavLink
} from 'react-router-dom';

// import UsersContainer from '@abc/users/UsersContainer';
import UsersContainer from './users/containers/UsersContainer';

function clickHandler(event) {
  // event.preventDefault();
  console.log('Hello from click handler!');
}

function Button(props) { // { color, text }
  return <button onClick={clickHandler}>Click me, {props.text}</button>
}
Button.defaultProps = {
  text: 'Hello!!!'
}

function App() {
  return (
    <div className="app">
      <Button color="blue" text="Hello WarsawJS" />
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/money">Currencies</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/users">
            <UsersContainer />
          </Route>
          <Route path="/money">

          </Route>
          <Route path="/">
            
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
