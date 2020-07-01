import React from 'react';
import { Link } from "react-router-dom"
import './index.css';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/home">Home页面</Link>
        </li>
        <li>
          <Link to="/users">user页面</Link>
        </li>
      </ul>
      <div>App页面</div>
    </div>
  );
}

export default App;
