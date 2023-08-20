/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const PaytmChecksum = require('./PaytmChecksum')
const https = require('https')
const { v4: uuidv4 } = require('uuid')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

app.post('/create/orderId', function (req, res) {
  const { totalAmount, email, username, phone } = req.body
  const finalPrice = JSON.stringify(totalAmount + 12.05)
  let orders = 'ORDERID' + new Date().getTime()
  let MID = 'giuhHI37769552592572'

  var paytmParams = {}

  paytmParams.body = {
    requestType: 'Payment',
    mid: MID,
    websiteName: 'WEBSTAGING',
    orderId: orders,
    callbackUrl:
      'https://feynw9kv0e.execute-api.ap-south-1.amazonaws.com/dev/verification',
    txnAmount: {
      value: finalPrice,
      currency: 'INR',
    },
    userInfo: {
      custId: 'CUST' + new Date().getTime(),
      name: username,
      email,
      mobileNumber: phone,
    },
  }
  /**
   * Generate checksum by parameters we have
   * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
   */

  PaytmChecksum.generateSignature(
    JSON.stringify(paytmParams.body),
    'wySKJOYSFSWZGeSK',
  ).then(function (checksum) {
    paytmParams.head = {
      signature: checksum,
    }

    var post_data = JSON.stringify(paytmParams)

    var options = {
      /* for Staging */
      hostname: 'securegw-stage.paytm.in',

      /* for Production */
      // hostname: 'securegw.paytm.in',

      port: 443,
      path: `/theia/api/v1/initiateTransaction?mid=${MID}&orderId=${orders}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': post_data.length,
      },
    }

    var response = ''
    var post_req = https.request(options, function (post_res) {
      post_res.on('data', function (chunk) {
        response += chunk
      })

      post_res.on('end', function () {
        console.log('Response: ', response)
        res.send({ response, paytmParams })
      })
    })

    post_req.write(post_data)
    post_req.end()
  })
})

/****************************
 * Example put method *
 ****************************/

app.listen(3000, function () {
  console.log('App started')
})

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
