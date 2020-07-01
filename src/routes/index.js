import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import routes from './routes'


// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => {
        document.title = route.meta.title || "默认title";
        return (
          // pass the sub-routes down to keep nesting
          <route.component {...props} extra routes={route.routes} />
        )
      }}
    />
  );
}


export default (
  <Router>
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  </Router>
);