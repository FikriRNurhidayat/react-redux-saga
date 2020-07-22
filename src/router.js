import React from 'react'
import { HashRouter,Redirect, Route, Switch, } from 'react-router-dom'
import Loadable from 'react-loadable'

import NotFound from './pages/NotFound'

const load = loader => Loadable({
  loader,
  delay: false,
  loading: () => <h1>Loading...</h1>,
  render: (Loaded, props) => <Loaded.default {...props} />
})

const routes = [
  {
    path: '/dashboard/home',
    component: load(() => import('./pages/Dashboard')),
    exact: true
  },
]

export default () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/dashboard/home" />} />
          {routes.map(route => (
            <Route
              path={route.path}
              component={route.component}
              key={route.path}
              exact={route.exact}
            />
          ))}
          <Route component={NotFound} />
      </Switch>
    </HashRouter>
  )
}
