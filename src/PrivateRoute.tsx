/* eslint-disable */
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
interface PrivateRouteProps {
  component: any
  path: string
}

function PrivateRoute({ component: Component, path }: PrivateRouteProps) {
  return (
    <Route
      path={path}
      render={(props) =>
        localStorage.jwtToken ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute
