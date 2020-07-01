import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import App from '../views/App'
import Home from '../views/Home'

const Users = () => <h2>use页面</h2>;


export default (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/home" component={Home} />
      <Route path="/users" component={Users} />
    </Switch>
  </Router>
);


