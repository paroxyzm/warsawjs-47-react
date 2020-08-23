import React from 'react';

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
    </div>
  );
}

export default App;
