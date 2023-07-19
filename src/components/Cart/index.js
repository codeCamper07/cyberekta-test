import './index.css'
import Header from '../Header'
import Footer from '../Footer'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
  let totalPrice = 0
  const products = useSelector((state) => state.products)
  products.map((items) => (totalPrice += items.price))
  const dispatch = useDispatch()
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
        ) : (
          <p>Cart is empty</p>
        )}
      </div>
      <Footer />
    </>
  )
}

export default Cart
