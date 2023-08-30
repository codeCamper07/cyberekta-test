import { Component } from 'react'
import './index.css'
import Header from '../Header'

class contactUs extends Component {
  state = { name: '', email: '', comment: '' }

  onChangeName = (event) => {
    this.setState({ name: event.target.value })
  }

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  onChangeComment = (event) => {
    this.setState({ comment: event.target.value })
  }

  render() {
    const { name, email, comment } = this.state
    return (
      <div>
        <Header />
        <div className='services-container'>
          <h1>Contact us</h1>
          <div className='contact-us-container'>
            <div className='contact-cards'>
              <span className='title'>Tell us About your Query</span>
              <form className='forms'>
                <div className='group'>
                  <input
                    placeholder=''
                    type='text'
                    value={name}
                    onChange={this.onChangeName}
                    required
                  />
                  <label for='name'>Name</label>
                </div>
                <div className='group'>
                  <input
                    placeholder=''
                    value={email}
                    onChange={this.onChangeEmail}
                    type='email'
                    id='email'
                    name='email'
                    required
                  />
                  <label for='email'>Email</label>
                </div>
                <div className='group'>
                  <textarea
                    placeholder=''
                    value={comment}
                    onChange={this.onChangeComment}
                    id='comment'
                    name='comment'
                    rows='5'
                    required></textarea>
                  <label for='comment'>Comment</label>
                </div>
                <button type='submit'>Submit</button>
              </form>
            </div>
            <iframe
              title='maps'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.054845589388!2d78.54320127488116!3d17.361093703562613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99dd7083da17%3A0x293f5a1729f8e934!2sCyberekta%20Security%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1693368864645!5m2!1sen!2sin'
              width='700'
              height='550'
              style={{ border: 0 }}
              allowfullscreen=''
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'></iframe>
          </div>
        </div>
      </div>
    )
  }
}
export default contactUs
