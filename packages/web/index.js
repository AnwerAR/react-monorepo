import React from 'react';
import ReactDOM from 'react-dom';
import { sum, greet } from "@react-monorepo/core";

// const Container
function App() {
  return <div>{greet('World')}</div>
}

ReactDOM.render(<App />, document.getElementById('root'));

console.log('Sum is', sum(2, 3));
