import { memo, FC } from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  Navigate,
} from 'react-router-dom'

import { store } from '../../states/store'
import { Layout } from 'components/layouts/landing/layout'
import { LandingPage } from 'features/landingPage/landingPage'
import { Launchpad } from 'features/launchpad/launchpad'
import { Incubator } from 'features/incubator/incubator'
import { Advertising } from 'features/advertising/advertising'
import { Insurance } from 'features/insurance/insurance'
import { Stake } from 'features/stake/stake'
import { User } from 'features/user/user'

export const App: FC = memo(() => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="">
              <Route index={true} element={<LandingPage />} />
            </Route>
            <Route path="launchpad">
              <Route index={true} element={<Launchpad />} />
            </Route>
            <Route path="incubator">
              <Route index={true} element={<Incubator />} />
            </Route>
            <Route path="advertising">
              <Route index={true} element={<Advertising />} />
            </Route>
            <Route path="insurance">
              <Route index={true} element={<Insurance />} />
            </Route>
            <Route path="stake">
              <Route index={true} element={<Stake />} />
            </Route>
            <Route path="user">
              <Route index={true} element={<User />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
})

const AuthGuard = ({ children }: { children: JSX.Element }) => {
  const isLoggedIn = Boolean(localStorage.getItem('access_token'))
  const location = useLocation()

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}
