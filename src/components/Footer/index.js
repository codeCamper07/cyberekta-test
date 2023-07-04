import { Component } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import EmailIcon from '@mui/icons-material/Email'
import { Button, TextField } from '@mui/material'
import './index.css'

class Footer extends Component {
  state = { email: '' }

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  render() {
    const { email } = this.state
    console.log(email)
    return (
      <>
        <footer className='footer'>
          <h1>Contact</h1>
          <div className='content-section'>
            <div className='contact-footer-section'>
              <ul className='address'>
                <div className='Icons'>
                  <LocationOnIcon fontSize='medium' />
                  <span className='address-heading'>Address</span>
                </div>
                <li>Telangana</li>
                <li>Andra Pradesh</li>
                <li>Bangaluru</li>
                <li>Chennai</li>
              </ul>
              <div className='contact-info'>
                <div className='Icons'>
                  <LocalPhoneIcon fontSize='small' />
                  <span className='phone-heading'>
                    Phone: <span className='con-val'> +91 99852 29237 </span>
                  </span>
                </div>
                <div className='Icons'>
                  <EmailIcon fontSize='small' />
                  <span className='phone-heading'>
                    Email: <span className='con-val'>info@cyberekta.com</span>
                  </span>
                </div>
              </div>
            </div>
            <div className='links'>
              <ul className='address'>
                <h3>Links</h3>
                <li>
                  <a href='/'>Home</a>
                </li>
                <li>
                  <a href='/services'>Services</a>
                </li>
                <li>
                  <a href='/solutions'>Solutions</a>
                </li>
                <li>
                  <a href='/tranings'>Trainings</a>
                </li>
              </ul>
            </div>
            <div>
              <div className='form-container'>
                <div>
                  <form className='login-form'>
                    <TextField
                      className='form-input'
                      id='outlined-basic'
                      label='email'
                      type='email'
                      value={email}
                      placeholder='email@example.com'
                      onChange={this.onChangeEmail}
                      variant='outlined'
                    />
                    <Button
                      className='form-btn'
                      type='submit'
                      variant='contained'>
                      Subscribe
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='legal-doc'>
            <hr />
            <p>
              2022 by Cyber_ekta_Security Solutions pvt ltd
              <br />
              *A Cyber Security Company*
            </p>
          </div>
        </footer>
      </>
    )
  }
}
export default Footer
