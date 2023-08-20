import { useState } from 'react'
import './index.css'
import Header from '../Header'
import Footer from '../Footer'
import { useDispatch, useSelector } from 'react-redux'
import { CheckoutProvider, Checkout } from 'paytm-blink-checkout-react'
import CONFIG from '../Config'

const appendHandler = (config) => {
  const newConfig = { ...config }
  newConfig.handler = {
    notifyMerchant: notifyMerchantHandler,
  }
  return newConfig
}

const notifyMerchantHandler = (eventType, data) => {
  console.log('MERCHANT NOTIFY LOG', eventType, data)
}

const Cart = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [mConfig, setMConfig] = useState(appendHandler(CONFIG))
  const [showCheckout, setShowCheckout] = useState(false)
  const [checkoutJsInstance, setCheckoutJsInstance] = useState(null)

  const onChangeUsername = (event) => {
    setUsername(event.target.value)
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const onChangePhone = (event) => {
    setPhone(event.target.value)
  }

  let totalPrice = 0
  const products = useSelector((state) => state.products)
  products.map((items) => (totalPrice += items.price))

  const dispatch = useDispatch()

  const getUpdatedMerchantConfig = () => {
    const config = mConfig

    return appendHandler(config)
  }

  const getPaymentData = (data) => {
    const url =
      'https://feynw9kv0e.execute-api.ap-south-1.amazonaws.com/dev/create/orderId'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    }
    return fetch(url, options)
      .then((response) => response.json())
      .catch((error) => console.log(error))
  }

  const loadCheckoutScript = () => {
    const url =
      'https://securegw-stage.paytm.in/merchantpgpui/checkoutjs/merchants/'
    const scriptElement = document.createElement('script')
    scriptElement.async = true
    scriptElement.src = url.concat(CONFIG.merchant.mid)
    scriptElement.type = 'application/javascript'
    scriptElement.onload = () => {
      const checkoutJsInstance = getCheckoutJsObj()

      if (checkoutJsInstance && checkoutJsInstance.onLoad) {
        checkoutJsInstance.onLoad(() => {
          setMConfig(getUpdatedMerchantConfig())
          setCheckoutJsInstance(checkoutJsInstance)
          setShowCheckout(!showCheckout)
        })
      } else {
        console.error('onload not available!')
      }
    }
    scriptElement.onerror = (error) => {
      console.error('script load fail!')
    }

    document.body.appendChild(scriptElement)
  }
  const getCheckoutJsObj = () => {
    if (window && window.Paytm && window.Paytm.CheckoutJS) {
      return window.Paytm.CheckoutJS
    } else {
      console.error('Checkout instance not found!')
    }

    return null
  }

  const handlePayment = async (event) => {
    event.preventDefault()
    getPaymentData({
      totalAmount: totalPrice,
      email,
      username,
      phone,
    }).then((response) => {
      console.log(response)
      const newData = `${response.response}`
      const converted = JSON.parse(newData)
      mConfig.data = {
        orderId: response.paytmParams.body.orderId,
        amount: response.paytmParams.body.txnAmount.value,
        token: converted.body.txnToken,
        tokenType: 'TXN_TOKEN',
        userDetail: {
          mobileNumber: phone,
          name: username,
          email,
        },
      }
      console.log(mConfig)
      loadCheckoutScript()
    })
  }

  const handleClick = (val) => {
    return {
      type: 'Delete',
      val,
    }
  }
  return (
    <>
      <Header />
      <div className='services-container'>
        <h1>Cart</h1>
        {showCheckout && (
          <CheckoutProvider
            config={mConfig}
            checkoutJsInstance={checkoutJsInstance}
            openInPopup={true}
            env='STAGE'>
            <Checkout />
          </CheckoutProvider>
        )}
        {products.length ? (
          <div className='cart-container'>
            <div className='section_form'>
              <form id='consultation-form' className='feed-form'>
                <input
                  placeholder='Name'
                  type='text'
                  onChange={onChangeUsername}
                  value={username}
                />
                <input
                  name='phone'
                  placeholder='Phone number'
                  onChange={onChangePhone}
                  value={phone}
                />
                <input
                  onChange={onChangeEmail}
                  value={email}
                  name='email'
                  required=''
                  placeholder='E-mail'
                  type='email'
                />
                <button className='button_submit' onClick={handlePayment}>
                  ORDER
                </button>
              </form>
            </div>
            <table className='table'>
              <thead>
                <tr>
                  <th>CourseName</th>
                  <th>Price</th>
                  <th></th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {products.map((eachItem, i) => (
                  <tr className='cart-items' key={i}>
                    <td>{eachItem.courseName}</td>
                    <td>
                      <span>&#8377;</span>
                      {Number(eachItem.price).toLocaleString('en-IN')}
                    </td>
                    <td>
                      <button onClick={() => dispatch(handleClick(eachItem))}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <span>&#8377;</span>
                    {Number(totalPrice).toLocaleString('en-IN')}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <p>Cart is empty</p>
        )}
      </div>
      <Footer />
    </>
  )
}

export default Cart
