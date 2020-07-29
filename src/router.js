import React from 'react'
import { HashRouter,Redirect, Route, Switch, } from 'react-router-dom'
import Loadable from 'react-loadable'

import Authorize from './views/layouts/Authorize'
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
    component: load(() => import('./pages/Dashboard/Home')),
    exact: true,
    authorizedOnly: true,
  },
  {
    path: '/dashboard/schedule',
    component: load(() => import('./pages/Dashboard/Schedule')),
    exact: true,
    authorizedOnly: true,
  },
  {
    path: '/login',
    component: load(() => import('./pages/Auth/Login')),
    exact: true,
    authorizedOnly: false,
  },
]

const createRoutes = routes => routes.map(route => {
  let component = React.createElement(route.component)
  if (route.authorizedOnly)
    component = <Authorize children={component} authorizedOnly />
  if (route.authorizedOnly === false)
    component = <Authorize children={component} />

  return (
    <Route path={route.path}
      key={route.path}
      exact={route.exact}
      children={component}
    />
  )

})

export default () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/dashboard/home" />} />
          {createRoutes(routes)}
          <Route component={NotFound} />
      </Switch>
    </HashRouter>
  )
}
