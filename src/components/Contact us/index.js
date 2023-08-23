import { Component } from 'react'
import './index.css'
import Header from '../Header'

class contactUs extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='services-container'>
          <h1>Contact us</h1>
          <div className='contact-cards'>
            <span className='title'>Tell us About your Query</span>
            <form className='forms'>
              <div className='group'>
                <input placeholder='' type='text' required='' />
                <label for='name'>Name</label>
              </div>
              <div className='group'>
                <input
                  placeholder=''
                  type='email'
                  id='email'
                  name='email'
                  required=''
                />
                <label for='email'>Email</label>
              </div>
              <div className='group'>
                <textarea
                  placeholder=''
                  id='comment'
                  name='comment'
                  rows='5'
                  required=''></textarea>
                <label for='comment'>Comment</label>
              </div>
              <button type='submit'>Submit</button>
            </form>
          </div>
          <iframe
            title='maps'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1847799236793!2d78.3742871748821!3d17.40291780235813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb950b65b74cf5%3A0xccc113c69247c4b2!2sNIRMALA%20NILAYAM%20MANIKONDA!5e0!3m2!1sen!2sin!4v1692775164448!5m2!1sen!2sin'
            width='600'
            height='450'
            style={{ border: 0 }}
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'></iframe>
        </div>
      </div>
    )
  }
}
export default contactUs
