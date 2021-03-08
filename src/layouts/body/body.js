import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from '../../router/index'

function Body() {
  console.log(routes)
  return (
      <Router>
        <Switch>
          {
            routes.map((route, i) => (
              <Route key={i} path={route.path} component={route.component} />
            ))
          }
        </Switch>
      </Router>
  )
}

export default Body
