import './index.css'
import Header from '../Header'
import Footer from '../Footer'
import { useDispatch, useSelector } from 'react-redux'

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)
  })
}

const Cart = () => {
  let totalPrice = 0
  const products = useSelector((state) => state.products)
  products.map((items) => (totalPrice += items.price))

  const dispatch = useDispatch()

  const displayRazorpay = async () => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?')
      return
    }

    const url =
      'https://feynw9kv0e.execute-api.ap-south-1.amazonaws.com/dev/create/orderId'
    const urlOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        price: totalPrice,
        email: 'Bhargav@gmail.com',
      }),
    }
    const response = await fetch(url, urlOptions)
    const result = await response.json()
    const data = result.order

    const options = {
      key: 'rzp_test_z1knXzTq5LfW7g',
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      name: 'Cyberekta course purchase',
      description: 'Thank you for choosing us',
      image: '',
      handler: function (response) {
        console.log(response)
        alert(response.razorpay_payment_id)
        alert(response.razorpay_order_id)
        alert(response.razorpay_signature)
      },
      prefill: {
        name: 'Bhargav',
        email: 'bhargav@gmail.com',
        phone_number: '9899999999',
      },
    }
    const paymentObject = new window.Razorpay(options)
    paymentObject.on('payment.failed', function (response) {
      alert(response.error.code)
      alert(response.error.description)
      alert(response.error.source)
      alert(response.error.step)
      alert(response.error.reason)
      alert(response.error.metadata.order_id)
      alert(response.error.metadata.payment_id)
    })
    paymentObject.open()
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
        {products.length ? (
          <div>
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
            <div>
              <button onClick={displayRazorpay}>Pay now</button>
            </div>
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
