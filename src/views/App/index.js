import React from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'

import { increment } from '../../redux/actions'

import './index.css';
@connect(state => ({ number: state.number }), { increment })

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  onClick() {
    this.props.increment()
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
        <div>current number： {this.props.number} <button onClick={() => this.onClick()}>点击+1</button></div>
      </div>
    );
  }
}


