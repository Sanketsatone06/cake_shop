import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'

const element = document.querySelector('.root');

const root = ReactDOM.createRoot(element)

root.render(
    <App />
)
