/* no afecta aparentemente */import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.hydrateRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

/* 
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import './index.css'

ReactDOM.hydrate(<App />, document.getElementById('root')); */