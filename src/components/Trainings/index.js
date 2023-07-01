import { Component } from 'react'
import '../Trainings/index.css'
import Header from '../Header'
import Footer from '../Footer'
import TrainingCards from '../Training-cards'

const CourseList = [
  {
    courseId: 1,
    courseName: 'Azure in 15 days',
    description: 'Learn Basics and Fundamentals of Cloud Computing',
  },
  {
    courseId: 2,
    courseName: 'Azure in 30 days',
    description: 'Learn Basics and Fundamentals with Lab Activities and Az-104',
  },
  {
    courseId: 3,
    courseName: 'Cyber Security Training Program',
    description:
      'Cyber Security Basics to Advanced with Project Support or Certification',
  },
]

class Trainings extends Component {
  render() {
    return (
      <div>
        <Header />
        <hr />
        <div className='trainings-container'>
          <h1>Trainings</h1>
          <div className='course-cards'>
            {CourseList.map((eachItem) => (
              <TrainingCards list={eachItem} key={eachItem.courseId} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Trainings
