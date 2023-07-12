import { Component } from 'react'
import './index.css'
import Header from '../Header'
import Footer from '../Footer'

class Cart extends Component {
  render() {
    return (
      <>
        <Header />
        <div className='services-container'>
          <h1>Cart</h1>
        </div>
        <Footer />
      </>
    )
  }
}

export default Cart
