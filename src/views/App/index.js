import React from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'

import { increment, loadList } from '../../redux/actions'

import './index.css';
@connect(state => ({ 
  number: state.number,
  list: state.list
}), { increment, loadList })

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  onClick() {
    this.props.increment()
  }
  onloadList() {
    this.props.loadList()
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
        <div><button onClick={() => this.onloadList()}>请求数据</button></div>
        <div>
          <p>请求回来的数据：</p>
          <ul>
            {this.props.list.map((list, i) => {
              return (
                <li key={`list_${i}`}>{list.title}</li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}


