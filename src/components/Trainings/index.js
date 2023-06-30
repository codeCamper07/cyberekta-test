import { Component } from 'react'
import './index.css'
import Header from '../Header'
import Footer from '../Footer'

class Trainings extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='trainings-container'>
          <h1>Trainings</h1>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Trainings
