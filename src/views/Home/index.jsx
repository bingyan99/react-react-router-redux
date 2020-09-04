import React from 'react'
import { connect } from 'react-redux'
import { homeLoadList } from '../../redux/actions/home'

@connect(state => ({ ...state.homeReducer }), { homeLoadList })

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentWillMount() {
    this.props.homeLoadList()
  }

  render() {
    return (
      <div className="Home">
        <div>Home页面</div>
        <div>
          <p>请求回来的数据：</p>
          <ul>
            {this.props.homeList.map((list, i) => {
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

