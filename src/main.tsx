import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { setup } from "twind/shim";

const appContainer = document.getElementById('root')

if (!appContainer) throw new Error("app container is missing")

setup({
    target: appContainer,
})

ReactDOM.createRoot(appContainer).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
