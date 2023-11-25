import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import './index.css'
import App from './components/App'
import Loader from './components/Loader'
import { LoaderContextProvider } from './context/loaderContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <LoaderContextProvider>
      <App />
      <Loader />
    </LoaderContextProvider>
  </React.StrictMode>
)

reportWebVitals()
