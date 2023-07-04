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
  {
    courseId: 4,
    courseName: 'Cyber Security Boot Camp for MBA',
    description:
      'In the MBA studies with the Cybersecurity profile/specialization, candidate will learn about the directions of development of cyber threats faced by modern enterprises and institutions, as well as ways of dealing with such challenges.',
  },
  {
    courseId: 5,
    courseName: 'Graduate Certificate in Cyberpsychology',
    description:
      'Cyberpsychology is an introduction to the study of the psychological processes related to, and underlying, all aspects and features of technologically interconnected human behavior.',
  },
  {
    courseId: 6,
    courseName: 'Ethical Hacking',
    description:
      'Ethical hacking is a technology career with specific skills, and cybersecurity certifications help people break into the field. Many ethical hacking jobs still require a bachelors degree in information technology, or another technology or cybersecurity related degree.',
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
