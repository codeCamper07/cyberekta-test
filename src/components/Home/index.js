import { Component } from 'react'
import Button from '@mui/material/Button'
import './index.css'
import Header from '../Header'
import Carousel from 'react-material-ui-carousel'
import CarouselItems from '../Carousel'
import Footer from '../Footer'

const items = [
  {
    name: 'CEO, Ameri Solutions',
    testimonial:
      'I feel comfort after Cyberekta took the workforce training in Cyber Security, all of the trainees showed tremendous performance increase after training.',
  },
  {
    name: 'CompTIA, South Asia Business Head',
    testimonial:
      'Cyberekta is a reputed partner with CompTIA. I strongly recommend you to nurture your skills with them for better job opportunities. ',
  },
]

class Home extends Component {
  renderCarousel = () => {
    return (
      <Carousel>
        {items.map((eachItem, i) => (
          <CarouselItems con={eachItem} key={i} />
        ))}
      </Carousel>
    )
  }

  render() {
    return (
      <div>
        <Header />
        <div className='welcome-container'>
          <div>
            <h1 className='heading'>
              Let us Unshakle
              <br /> your Cyber worries!
            </h1>
            <div className='btn'>
              <Button variant='contained' sx={{ fontSize: 10 }}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
        <div className='services-container'>
          <h5>Services</h5>
          <p className='sub'>Taking Your Business to Next Level!</p>
          <div className='content-container'>
            <div className='Trainings-card effects'>
              <img
                className='img'
                src='https://img.freepik.com/free-vector/flat-business-employees-meeting-teamwork-training-teaching_88138-990.jpg?w=2000&t=st=1687762572~exp=1687763172~hmac=ba05211fb03619c20358fefc773628a7ed18fc8a3ac5d20eaf1afd8797b8e7a2'
                alt='trigs'
              />
              <h5>Trainings & Certifications</h5>
              <p className='para'>
                We believe, Cyber Security begin with training your Workforce!
                <br />
                Know more!
              </p>
            </div>
            <div className='Trainings-card effects'>
              <img
                className='img'
                src='https://img.freepik.com/free-vector/hacker-breaking-lock-get-access-personal-information-computer-isometric_1284-63723.jpg?w=1060&t=st=1687763340~exp=1687763940~hmac=ae15daeb0c1dc24d98a3f5e39ffd39784755be3d26704fa07ac32c372dcc841d'
                alt='trigs'
              />
              <h5>CyberSecurity Services</h5>
              <p className='para'>
                In this 21st Century we are fighting unknown battles at digital
                front! We have all the necessary Solutions & tools to address
                your Security needs.
                <br /> Know more!
              </p>
            </div>
            <div className='Trainings-card effects'>
              <img
                className='img'
                src='https://img.freepik.com/free-vector/work-office-computer-man-woman-business-character-marketing-online-employee-technology-business-man-cartoon-co-working-flat-design-freelance_1150-41790.jpg?w=1800&t=st=1687763682~exp=1687764282~hmac=8b4302d8f24304f710a88e0c215521da35d34e17b30d8d1cac0a3dce6d77d221'
                alt='trigs'
              />
              <h5>Research</h5>
              <p className='para'>
                We work on next generation tools to address the latest and
                upcoming threat vectors.
                <br /> Know More!
              </p>
            </div>
          </div>
        </div>
        <div className='testimonial-container'>
          {this.renderCarousel(this.items)}
        </div>
        <Footer />
      </div>
    )
  }
}
export default Home
