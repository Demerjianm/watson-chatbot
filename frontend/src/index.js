import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import API from '@aws-amplify/api'

API.configure({
  API: {
    endpoints: [
      {
        name: 'hello',
        endpoint:
          'https://e4ykknqgk3.execute-api.us-east-1.amazonaws.com/default',
        region: 'us-east-1'
      }
    ]
  }
})

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
