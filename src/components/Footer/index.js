import { Component } from 'react'

import './index.css'

class Footer extends Component {
  render() {
    return (
      <>
        <footer className='footer'>
          <hr />
          <div className='legal-doc'>
            <p>
              2023 by Cyber_ekta_Security Solutions pvt ltd
              <br />
              *A Cyber Security Company*
            </p>
            <div className='policy-info'>
              <a href='/privacy-policy'>Privacy Policy </a> \
              <a href='/terms-and-conditions'> Terms & Conditions</a> \
              <a href='/cancellation-and-refund'> Cancellation And Refund</a>
            </div>
          </div>
        </footer>
      </>
    )
  }
}
export default Footer
