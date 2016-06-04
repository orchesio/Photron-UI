import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
//import photronStore from './stores/PhotronStore.jsx' 

import Router from './routes/index.jsx'

require('../scss/App.scss')

let domElement = document.getElementById('application')

ReactDOM.render(
  Router,
  domElement
);