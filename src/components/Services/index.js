import { Component } from 'react'
import './index.css'
import Header from '../Header'
import { Button } from '@mui/material'

const ServicesList = [
  {
    name: 'Application Security',
    description: 'Content',
  },
  {
    name: 'Network Security',
    description: 'Content',
  },
  {
    name: 'CERT-In Audit Services',
    description: 'Content',
  },
]

class Services extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='services-section'>
          <div className='main-banner'>
            <h1 className='heading'>Our Services</h1>
            <p>
              content content content content content content content content
              content content content content content content content content
              content content content content content content content content
              content content content content content content content content
              content content content content content content content
            </p>
            <div>
              <Button variant='contained'>Contact us</Button>
            </div>
          </div>
          <div className='services-offered-section'></div>
        </div>
      </div>
    )
  }
}
export default Services
