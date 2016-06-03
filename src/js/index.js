import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
//import photronStore from './stores/PhotronStore.jsx' 

import Router from './routes'

let domElement = document.getElementById('application')

ReactDOM.render(
  Router,
  domElement
);