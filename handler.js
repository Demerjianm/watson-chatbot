'use strict'
// controller.js
const getMessage = require('./service').getMessage

module.exports.hello = async (event, context) => {
  console.log('event body', event.body)
  try {
    const output = await getMessage(JSON.parse(event.body))
    console.log('the outpput', output)
    return {
      statusCode: 200,
      body: JSON.stringify(output)
    }
  } catch (next) {
    console.log('the error', next)
    throw next
  }
}
