import React from 'react';
import { Link } from "react-router-dom"
import './index.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
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
}

