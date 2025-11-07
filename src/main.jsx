import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// THIS IS THE FIX:
// Make sure this line exists at the top.
import './index.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)