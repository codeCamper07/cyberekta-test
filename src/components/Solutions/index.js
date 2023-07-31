import { Component } from 'react'
import './index.css'
import Header from '../Header'
import ServicesCard from '../Services-card'
import Footer from '../Footer'

const Sol = {
  name: 'Managed Security Solutions',
  img: 'https://static.wixstatic.com/media/f5b82e_12bb18c323c6434487cb79da30568429~mv2.jpeg',
  description: 'course --',
}

class Solutions extends Component {
  render() {
    return (
      <div>
        <Header />
        <hr />
        <div className='services-offered-section'>
          <ServicesCard key={1} cont={Sol} />
        </div>
        <Footer />
      </div>
    )
  }
}
export default Solutions
