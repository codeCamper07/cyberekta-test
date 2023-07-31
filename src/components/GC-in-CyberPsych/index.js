import { Component } from 'react'
import './index.css'
import Header from '../Header'
import Footer from '../Footer'
import { Chrono } from 'react-chrono'

const Lists = [
  { title: 'Sem 1', cardTitle: 'Semester 1' },
  { title: 'Sem 2', cardTitle: 'Semester 2' },
]

class GcInCyberPsych extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='services-container'>
          <h1>Graduate Certificate in Cyber Psychology</h1>
        </div>
        <div className='services-container'>
          <div className='chronos'>
            <Chrono mode='HORIZONTAL' items={Lists}>
              <div>
                <ol>
                  <li>
                    Introduction to Psychology
                    <ul>
                      <li>Motivation, Perception</li>
                      <li>Cognitive development</li>
                      <li>Personality & emotion</li>
                      <li>
                        Individual Difference & Biological basis of behavior
                      </li>
                      <li>Methodology in psychological research</li>
                    </ul>
                  </li>
                  <li>
                    Foundations of Cyberpsychology
                    <ul>
                      <li>Online Identity and relationships</li>
                      <li>Personality types in Cyber Space</li>
                      <li>
                        Transference to computers & addiction to computers &
                        Internet
                      </li>
                      <li>
                        Regressive behavior in cyberspace & online
                        gender-switching
                      </li>
                      <li>
                        Behavioral and psychological sciences on individuals and
                        groups
                      </li>
                    </ul>
                  </li>
                  <li>
                    Computers, Society & Ethics
                    <ul>
                      <li>Evolution of Computers</li>
                      <li>
                        Implications in home, business, government, medicine &
                        education
                      </li>
                      <li>Automation</li>
                      <li>Privacy & Legal</li>
                      <li>Ethical Issues</li>
                    </ul>
                  </li>
                </ol>
              </div>
              <div>
                <ol>
                  <li>
                    Social Network Analysis
                    <ul>
                      <li>
                        Grabbing information from social networking systems
                        (like Facebook, LinkedIn etc.)
                      </li>
                      <li>Hidden information and interconnectionst</li>
                      <li>
                        Qualitative Research Methods in the Social & Behavioral
                        Sciences
                      </li>
                      <li>AI & the Human Mind</li>
                      <li>Sociocultural Factors</li>
                    </ul>
                  </li>
                  <li>
                    Understanding Cyber Criminality through psychology
                    <ul>
                      <li>Child Pornography/Pornography</li>
                      <li>Human Tendency of Using Devices</li>
                      <li>Online gaming – effects on children and adults</li>
                      <li>Darknet presence</li>
                      <li>Digital Footprint</li>
                    </ul>
                  </li>
                  <li>
                    Discovering User needs for UX (User Experience)
                    <ul>
                      <li>
                        Understanding how people use products and services
                      </li>
                      <li>Ethnography & focus groups</li>
                      <li>Interviewing & analyzing qualitative data</li>
                      <li>Seminar / Case Study-1</li>
                      <li>Activity-1</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </Chrono>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default GcInCyberPsych
