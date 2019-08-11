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
  console.log(API)
  async function postData() {
    let apiName = 'hello'
    let path = '/chatbot-dev-hello'
    let myInit = {
      // OPTIONAL
      body: JSON.stringify({ input: 'welcome' }),
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json'
      } // OPTIONAL
    }
    const body = { input: 'welcome' }
    return await API.post(apiName, path, myInit)
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
            postData()
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
