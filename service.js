// service.js
const watson = require('ibm-watson/assistant/v1')

const assistant = new watson({
  version: '2019-08-09',
  iam_apikey: process.env.ASSISTANT_IAM_APIKEY,
  url: process.env.ASSISTANT_URL
})

exports.getMessage = body =>
  new Promise((resolve, reject) => {
    console.log(body)
    assistant.message(
      {
        workspace_id: process.env.WATSON_WORKSPACE_ID,
        input: { text: body.input }
      },
      function(err, response) {
        if (err) {
          console.log(err)
          reject(err)
        } else {
          resolve(response)
        }
      }
    )
  })
