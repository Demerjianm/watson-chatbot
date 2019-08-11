import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import API from '@aws-amplify/api'

const App = () => {
  const [info, setInfo] = useState('')

  const onChange = e => {
    console.log(e.target)
    setInfo({ info: e.target.value })
  }

  async function postData() {
    let apiName = 'chatbot-dev-hello'
    let path = '/chatbot-dev-hello'
    let myInit = {
      // OPTIONAL
      body: { input: 'welcome' }, // replace this with attributes you need
      headers: { 'content-type': 'application/json' } // OPTIONAL
    }
    return await API.post(apiName, path, { body: { input: 'welcome' } })
  }

  const onSubmit = async () => {
    await postData()
    // console.log(postData())
  }
  console.log(info)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form
          onSubmit={e => {
            e.preventDefault()
            onSubmit()
          }}
        >
          <input value={info.value} onChange={onChange} name="info" />
          Type your question here
          <button type="submit">Yo </button>
        </form>
      </header>
    </div>
  )
}

export default App
