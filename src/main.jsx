import './App.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { IsMobileProvider  } from "./utils/IsMobileContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IsMobileProvider>
      <App />
    </IsMobileProvider>
  </React.StrictMode>,
)
