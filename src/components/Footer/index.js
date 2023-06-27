import { Component } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded'
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
      <footer className='footer'>
        <h1>Contact</h1>
        <div className='content-section'>
          <div className='contact-footer-section'>
            <div>
              <ul className='address'>
                <div className='Icons'>
                  <LocationOnIcon />
                  <span className='address-heading'>Address</span>
                </div>
                <li>Telangana</li>
                <li>Andra Pradesh</li>
                <li>Bangaluru</li>
                <li>Chennai</li>
              </ul>
            </div>
            <div>
              <div className='Icons'>
                <LocalPhoneIcon />
                <p className='phone-heading'>Phone </p>
                <span>: +91 99852 29237</span>
              </div>
              <div className='Icons'>
                <ContactMailRoundedIcon />
                <span className='phone-heading'>Email</span>
                <span>: info@cyberekta.com</span>
              </div>
            </div>
          </div>
          <div>
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
                    sx={{ width: 300 }}
                    id='outlined-basic'
                    label='email'
                    type='email'
                    value={email}
                    placeholder='email@example.com'
                    onChange={this.onChangeEmail}
                    variant='outlined'
                  />
                  <Button sx={{ width: 120 }} type='submit' variant='contained'>
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
export default Footer
