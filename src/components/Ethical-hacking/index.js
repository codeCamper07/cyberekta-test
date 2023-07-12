import { Component } from 'react'
import './index.css'
import Header from '../Header'
import Footer from '../Footer'
import DaysList from '../Day2dayList'

const EthicalList = [
  {
    title: 'Module 1',
    cardTitle: 'Information Security Fundamentals',
    cardDetailedText: [
      'Understand the need for security',
      'Describe the elements of information security',
      'Describe the security, functionality, and usability triangle',
      'Explain the motives, goals, and objectives of information security attacks',
      'Explain the classification of attacks',
      'Describe the information security attack vectors',
      'Know about the information security laws and regulations.',
    ],
  },
  {
    title: 'Module 2',
    cardTitle: 'Ethical Hacking Fundamentals',
    cardDetailedText: [
      'Explain the cyber kill chain methodology',
      'Describe the tactics, techniques, and procedures (TTPs)',
      'Describe the Indicators of Compromise (IoCs)',
      'Explain the hacking concepts and hacker classes',
      'Explain ethical hacking concepts and scope',
      'Understand the different phases of hacking cycle',
      'Understand the ethical hacking concepts and its scope',
      'Know about the skills of an ethical hacker',
      'Understand various ethical hacking tools',
    ],
  },
  {
    title: 'Module 3',
    cardTitle: 'Information Security Threats and Vulnerability Assessment',
    cardDetailedText: [
      'Explain the threat and threat sources',
      'Understand malware and components of malware',
      'Describe the common techniques attackers use to distribute malware on the web',
      'Describe different types of malware and malware countermeasures',
      'Explain the vulnerability and vulnerability classification',
      'Understand the vulnerability research',
      'Understand vulnerability assessment and the types of vulnerability assessment',
      'Explain vulnerability scoring systems and vulnerability management life cycle',
      'Know about the vulnerability assessment tools and vulnerability exploitation',
    ],
  },
  {
    title: 'Module 4',
    cardTitle: 'Password Cracking Techniques and Countermeasures',
    cardDetailedText: [
      'Understand the password cracking and password complexity',
      'Describe the Microsoft authentication mechanisms',
      'Explain various types of password attacks',
      'Use different password cracking tools',
      'Adopt countermeasures against password cracking attacks',
    ],
  },
  {
    title: 'Module 5',
    cardTitle: 'Social Engineering Techniques and Countermeasures',
    cardDetailedText: [
      'Describe social engineering concepts',
      'Perform social engineering using various techniques',
      'Describe insider threats',
      'Describe identity theft',
      'Apply social engineering countermeasures',
      'Apply knowledge of insider threats and identity theft countermeasures',
    ],
  },
  {
    title: 'Module 6',
    cardTitle: 'Network Level Attacks and Countermeasures',
    cardDetailedText: [
      'Understand packet sniffing and types of sniffing',
      'Explain different types of sniffing techniques',
      'Use different sniffing tools',
      'Apply various sniffing countermeasures',
      'Explain different types of DoS and DDoS attacks',
      'Use different DoS/DDoS attack tools',
      'Apply knowledge of DoS/DDoS attack countermeasures',
      'Implement different DoS/DDoS protection tools',
      'Explain the session hijacking process and types of session hijacking',
      'Use different session hijacking tools',
      'Apply knowledge of session-hijacking countermeasures',
    ],
  },
  {
    title: 'Module 7',
    cardTitle: 'Web Application Attacks and Countermeasures',
    cardDetailedText: [
      'Describe web-server operations and security issues',
      'Explain various web-server attacks and web-server attack tools',
      'Adopt countermeasures against web-server attacks',
      'Use different web-server security tools',
      'Describe the web-application architecture and vulnerability stack',
      'Explain various web-application threats and attacks',
      'Use different web-application attack tools',
      'Adopt countermeasures against web-application attacks',
      'Use different web-application security tools',
      'Understand different types of SQL injection attacks',
      'Use different SQL injection tools',
      'Adopt countermeasures against SQL injection attacks',
      'Use different detection tools for SQL injection',
    ],
  },
  {
    title: 'Module 8',
    cardTitle: 'Wireless Attacks and Countermeasures',
    cardDetailedText: [
      'Describe wireless terminology',
      'Explain different wireless encryption algorithms',
      'Describe wireless network-specific attack techniques',
      'Use different wireless attack tools',
      'Describe Bluetooth attack techniques',
      'Apply wireless attack countermeasures',
      'Use different wireless security tools',
    ],
  },
  {
    title: 'Module 9',
    cardTitle: 'Mobile Attacks and Countermeasures',
    cardDetailedText: [
      'Understand anatomy of mobile attacks',
      'Understand mobile platform attack vectors and vulnerabilities',
      'Understand the importance of mobile device management (MDM)',
      'Adopt various mobile security countermeasures',
      'Use various mobile security tools',
    ],
  },
  {
    title: 'Module 10',
    cardTitle: 'IOT & OT Attacks and Countermeasures',
    cardDetailedText: [
      'Explain IoT concepts',
      'Understand different IoT threats and attacks',
      'Use different IoT attack tools',
      'Apply countermeasures to protect devices from IoT attacks',
      'Use different IoT security tools',
      'Explain OT concepts',
      'Understand different OT threats and attacks',
      'Use different OT attack tools',
      'Apply countermeasures to protect industrial facilities from OT attacks',
      'Use different OT security tools',
    ],
  },
  {
    title: 'Module 11',
    cardTitle: 'Cloud Computing Threats and Countermeasures',
    cardDetailedText: [
      'Understand cloud computing concepts',
      'Understand container technology',
      'Understand cloud computing threats',
      'Understand cloud computing attacks',
      'Apply cloud computing security measures',
      'Use various cloud computing security tools',
    ],
  },
  {
    title: 'Module 12',
    cardTitle: ' Penetration Testing Fundamentals',
    cardDetailedText: [
      'Understand penetration testing and its benefits',
      'Understand types and phases of penetration testing',
      'Explain penetration testing methodologies',
      'Understand various guidelines and recommendations for penetration testing',
      'Describe various risks associated with penetration testing',
    ],
  },
]

class EthicalHacking extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='services-container'>
          <h1>Ethical Hacking</h1>
          <DaysList data={EthicalList} />
          <button className='btns'>Add To Cart</button>
        </div>
        <Footer />
      </div>
    )
  }
}
export default EthicalHacking
