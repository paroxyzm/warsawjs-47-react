import React from 'react';

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
      <UsersContainer />
    </div>
  );
}

export default App;
