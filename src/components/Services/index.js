import { Component } from 'react'
import Footer from '../Footer'
import './index.css'
import Header from '../Header'
import { Button } from '@mui/material'
import ServicesCard from '../Services-card'

const ServicesList = [
  {
    id: 1,
    name: 'Application Security',
    img: 'https://static.wixstatic.com/media/f5b82e_12bb18c323c6434487cb79da30568429~mv2.jpeg',
    description: 'Content',
  },
  {
    id: 2,
    name: 'Network Security',
    img: 'https://static.wixstatic.com/media/f5b82e_12bb18c323c6434487cb79da30568429~mv2.jpeg',
    description: 'Content',
  },
  {
    id: 3,
    name: 'CERT-In Audit Services',
    img: 'https://static.wixstatic.com/media/f5b82e_12bb18c323c6434487cb79da30568429~mv2.jpeg',
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
          <div className='services-offered-section'>
            {ServicesList.map((eachItem) => (
              <ServicesCard key={eachItem.id} cont={eachItem} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Services
