import { Redirect, Route } from 'react-router-dom'
import { useAuthState } from '../../context/index'

interface IAppRoute {
  Component: (() => JSX.Element) | ((props: any) => JSX.Element)
  path: string
  isPrivate: boolean | undefined
}

function AppRoute({ Component, path, isPrivate, ...rest }: IAppRoute) {
  const userDetails = useAuthState()

  return (
    <Route
      path={path}
      render={(props: any) =>
        isPrivate && !userDetails.token ? (
          <Redirect to={{ pathname: '/login' }} />
        ) : (
          <Component {...props} />
        )
      }
      {...rest}
    />
  )
}

export default AppRoute
