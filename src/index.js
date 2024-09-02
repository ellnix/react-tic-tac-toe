import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles.css'
import App from './App'

const root_div = document.querySelector('#root')
const root = createRoot(root_div)

root.render(
  <StrictMode>
    <App />
  </ StrictMode>
)
