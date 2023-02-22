import React from 'react'
import ReactDOM from 'react-dom'
import jwt_decode from 'jwt-decode'

import './index.css'
import './assets/font/style.css'
import App from './App'
import { store } from './store/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import ThemeProvider from './theme/ThemeProvider'
import { ErrorBoundary } from 'react-error-boundary'
import GlobalError from './views/Error'

interface MyToken {
  expiredAt: number
  id: string
}

if (localStorage.jwtToken) {
  let decoded = jwt_decode<MyToken>(localStorage.jwtToken)
  const currentTime = Date.now() / 1000
  if (decoded.expiredAt + 10 < currentTime) {
    localStorage.removeItem('jwtToken')
    window.location.href = '/login'
  }
}

function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <div role="alert">
      <GlobalError message={error.message} refresh={resetErrorBoundary} />
    </div>
  )
}

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <App />
      </ErrorBoundary>
    </ThemeProvider>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root'),
)

serviceWorker.unregister()
