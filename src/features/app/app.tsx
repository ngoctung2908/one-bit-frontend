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

export const App: FC = memo(() => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="">
              <Route index={true} element={<LandingPage />} />
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
