/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const { uuid } = require('uuidv4')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const PaytmChecksum = require('./PaytmChecksum')

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

/**********************
 * Example post method *
 **********************/

app.post('/payment', (req, res) => {
  var paytmParams = {}

  /* initialize an array */
  paytmParams['MID'] = 'giuhHI37769552592572'
  paytmParams['ORDERID'] = 'ord1212'

  /**
   * Generate checksum by parameters we have
   * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
   */
  var paytmChecksum = PaytmChecksum.generateSignature(
    paytmParams,
    'wySKJOYSFSWZGeSK',
  )
  paytmChecksum
    .then(function (checksum) {
      console.log('generateSignature Returns: ' + checksum)
      res.send(checksum)
    })
    .catch(function (error) {
      console.log(error)
    })
})

app.listen(4000, function () {
  console.log('App started')
})

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
