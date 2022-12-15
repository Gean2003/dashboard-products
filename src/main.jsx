import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import { AuthContextProvider } from './context/AuthContext'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthContextProvider >
      <HashRouter>
            <App />
      </HashRouter>
    </AuthContextProvider>
)
