'use strict'
// controller.js
const getMessage = require('./service').getMessage

module.exports.hello = async (event, context) => {
  console.log('just event', event)
  console.log('event body', event.body)
  try {
    const output = await getMessage(JSON.parse(event.body))
    console.log('the outpput', output)
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Required for CORS support to work
        'Access-Control-Allow-Credentials': true // Required for cookies, authorization headers with HTTPS
      },
      body: JSON.stringify(output)
    }
  } catch (next) {
    console.log('the error', next)
    throw next
  }
}
