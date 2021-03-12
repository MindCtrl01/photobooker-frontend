import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from '../../router/index'

function Body() {
  console.log(routes)
  return (
    <Router>
      <div className="bg-red-300 col-span-2">
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} path={route.path} component={route.component} />
          ))}
        </Switch>
      </div>
    </Router>
  )
}

export default Body
