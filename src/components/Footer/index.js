import { Component } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import EmailIcon from '@mui/icons-material/Email'
import './index.css'

class Footer extends Component {
  render() {
    return (
      <>
        <footer className='footer'>
          <h1 className="contact" >Contact</h1>
          <div className='content-section'>
            <div className='contact-footer-section'>
              <ul className='address'>
                <div className='Icons'>
                  <LocationOnIcon fontSize='small' />
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
                <h5>Links</h5>
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
