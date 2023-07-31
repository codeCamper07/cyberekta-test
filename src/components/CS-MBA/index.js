import { Component } from 'react'
import './index.css'
import Header from '../Header'
import Footer from '../Footer'
import DaysList from '../Day2dayList'

const CsMbaList = [
  {
    title: 'Day 1',
    cardTitle:
      'Introduction to Information Security Management / Cyber Security Management',
    cardDetailedText:
      'Will understand the evolution of Information security management and how Cyber Security a subset of Information security is, different job roles, skill sets required. Why do we need Cyber Security? Career Paths and the life of a Security Expert. Also, it gives the Incident response and crisis management.',
  },
  {
    title: 'Day 2',
    cardTitle: 'Basics of IT Systems / Administration',
    cardDetailedText:
      'System Hardware like RAM, SSD, CD. Different connector types and Cables, Mobile devices, Network Cables and user roles, privileges &; System Troubleshooting. User management, about Domain controller and roles division across organization. Access Control.',
  },
  {
    title: 'Day 3',
    cardTitle: 'Cyber Security Risks',
    cardDetailedText:
      'Understanding cyber security risks &; why they exist. Role of corporate cyber security. Tips to avoid organizations falling into the traps. Understanding the cost of Cyber Attack.',
  },
  {
    title: 'Day 4',
    cardTitle: 'Impact of Cyber Security on business',
    cardDetailedText:
      'Understanding how cyber-attacks causes of major damage to the business, how it will affect the business standing and consumer trust. How to deal with theft of corporate information, theft of financial information, theft of money, disruption to trading etc.',
  },
  {
    title: 'Day 5',
    cardTitle: 'Network Vulnerabilities – Learning a Scripting Language',
    cardDetailedText:
      'Common Types of Network Vulnerabilities, OSI Model, Topologies, IP addressing &; Classes, Ports &; Protocols, Organizational Policies. Finding network vulnerabilities, VAPT (Internal – External). Importance of Scripting Languages and how to get hands on one!',
  },
  {
    title: 'Day 6',
    cardTitle: 'Lab -1 Networking',
    cardDetailedText:
      'Windows Commands, Linux Commands, Wireshark, Nmap, Various tools for various tasks.',
  },
  {
    title: 'Day 7',
    cardTitle: 'Digital Footprint – Digital Wellbeing',
    cardDetailedText:
      'Understanding what you leave on the internet when you do something. Unique Identifiers, Organizational policies for digital platform handling, Personal &; Social behavior on Internet.',
  },
  {
    title: 'Day 8',
    cardTitle: 'Different Types of Vulnerabilities &; Threats',
    cardDetailedText:
      'Compare &; Contrast different types of social engineering techniques. Analyzing potential indicators to determine the type of attack along with Application &; Network Attacks.',
  },
  {
    title: 'Day 9',
    cardTitle:
      'Cyber Bullying &; Cyber Warfare – PII Protection, How to Protect your Organization',
    cardDetailedText:
      'Concepts of Cyber bullying – Human Trafficking, Drug abuse on social media platforms etc. Understanding different types of threat actors – State sponsored, Organized cyber criminals & Hacktivists. Understanding how it will affect the nation. PII (Personal Identifiable Information) – What is it? How to protect our identity? What are the consequences of losing it?',
  },
  {
    title: 'Day 10',
    cardTitle: 'Encryption – Cryptography – CIA Triad',
    cardDetailedText:
      'Understanding what Hashing is & Encryption. Types of encryptions – Symmetrical & Asymmetrical. Encryption Algorithms – AES, 3-DES, RSA. Brute force in encryption. Cryptography concepts - CIA (Confidentiality, Integrity Availability) concepts.',
  },
  {
    title: 'Day 11',
    cardTitle: 'Cyber Security Strategies – Corporate Strategy',
    cardDetailedText:
      'Defense in depth, Zero Trust, Cyber Security strategy for Enterprises VS small business, Cyber Insurance, Affordable Security Options available for SMBs.',
  },
  {
    title: 'Day 12',
    cardTitle: 'Business Continuity Planning - Supply Chain - Use Cases',
    cardDetailedText:
      'Essential Elements of Supply Chain continuity planning, remote business operations, security across multiple locations, diagnosing multiple areas of risk exposure, Supply chain and real time use-cases we are going to discuss in this module.',
  },
  {
    title: 'Day 13',
    cardTitle: 'A touch to Computer Forensics & Roles of AI & Big Data',
    cardDetailedText:
      'In this module we are going to discuss how forensics will help to reconstruct a cyber-attack and in which it will eventually lead to finding culprits behind the attack. We also discuss cutting edge forensic tools that are available in the market to get the job done.',
  },
  {
    title: 'Day 14',
    cardTitle: 'Information Risk Management Policy',
    cardDetailedText:
      'This policy sets out the principles that the organization uses to identify, assess and manage information risk.',
  },
  {
    title: 'Day 15',
    cardTitle: 'Security, Privacy, reliability, safety through management',
    cardDetailedText:
      'Understanding the difference between Security & Privacy. How these two are reliable for a sustainable and safety business across organization.',
  },
  {
    title: 'Day 16',
    cardTitle:
      'Principles of Communication & Leadership – Corporate Social Responsibility',
    cardDetailedText:
      'In this module we are going to discuss corporate social responsibility and principles of communication',
  },
  {
    title: 'Day 17',
    cardTitle:
      'Cyber Security – Regulations, Frameworks, Laws, Auditing, Compliance:',
    cardDetailedText:
      'NIST, EU-GDPR, India’s DPB bill etc. ISMS Audit, SOC type-2 Audit, HIPPA, PCI-DSS etc. are going to be discussed in this module.',
  },
  {
    title: 'Day 18',
    cardTitle: 'Assessment',
    cardDetailedText:
      'A 30-minute assessment of 50 questions will be conducted at the end, qualified students will only get the training certification.',
  },
]

class CsMBA extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='services-container'>
          <h1>Cyber Security for MBA</h1>
        </div>
        <DaysList data={CsMbaList} />
        <Footer />
      </div>
    )
  }
}
export default CsMBA
