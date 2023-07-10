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
    path: '/trainings-Azurein15days',
  },
  {
    courseId: 2,
    courseName: 'Azure in 30 days',
    description: 'Learn Basics and Fundamentals with Lab Activities and Az-104',
    path: '/trainings-Azurein30days',
  },
  {
    courseId: 3,
    courseName: 'Cyber Security Training Program (L1)',
    description:
      'Cyber Security Basics to Advanced with Project Support or Certification',
    path: '/trainings-Cyber-security-training-program',
  },
  {
    courseId: 4,
    courseName: 'Cyber Security Training Program (L2)',
    description: 'Cyber Security Advance with Project Support or Certification',
    path: '/trainings-Cyber-security-training-program',
  },
  {
    courseId: 5,
    courseName: 'Cyber Security Boot Camp for MBA',
    description:
      'In the MBA studies with the Cybersecurity profile/specialization, candidate will learn about the directions of development of cyber threats faced by modern enterprises and institutions, as well as ways of dealing with such challenges.',
    path: '/trainings-Cyber-security-boot-camp-for-MBA',
  },
  {
    courseId: 6,
    courseName: 'Graduate Certificate in Cyberpsychology',
    description:
      'Cyberpsychology is an introduction to the study of the psychological processes related to, and underlying, all aspects and features of technologically interconnected human behavior.',
    path: '/trainings-Graduate-certificate-in-cyberpsychology',
  },
  {
    courseId: 7,
    courseName: 'Ethical Hacking',
    description:
      'Ethical hacking is a technology career with specific skills, and cybersecurity certifications help people break into the field. Many ethical hacking jobs still require a bachelors degree in information technology, or another technology or cybersecurity related degree.',
    path: '/trainings-Ethical-hacking',
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
