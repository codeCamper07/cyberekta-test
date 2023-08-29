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
const { parse } = require('querystring')
//const https = require('https')
//const formidable = require('formidable')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())
app.set('view engine', 'ejs')
app.set('views', __dirname)

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

app.get('/paymentStatus', (req, res) => {
  res.send('hello world!')
})
/**********************
 * Example get method *
 **********************/

app.post('/verification', (req, res) => {
  let body = ''
  req.on('data', (chunk) => {
    body += chunk.toString()
  })
  req.on('end', () => {
    var postbodyjson = parse(body)
    postbodyjson = JSON.parse(JSON.stringify(postbodyjson))

    var checksum = postbodyjson.CHECKSUMHASH
    delete postbodyjson['CHECKSUMHASH']

    var verifyChecksum = PaytmChecksum.verifySignature(
      postbodyjson,
      'wySKJOYSFSWZGeSK',
      checksum,
    )
    if (verifyChecksum) {
      const data = {
        title: postbodyjson.STATUS,
        message: postbodyjson.RESPMSG,
        amount: postbodyjson.TXNAMOUNT,
        txnId: postbodyjson.TXNID,
        txnDate: postbodyjson.TXNDATE,
        order: postbodyjson.ORDERID,
        bankName: postbodyjson.BANKNAME,
        bankTxn: postbodyjson.BANKTXNID,
      }
      res.render('index', data)
    } else {
      res.send(postbodyjson)
    }
  })
})

app.listen(4000, function () {
  console.log('App started')
})

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
