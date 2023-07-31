import { Component } from 'react'
import './index.css'
import Header from '../Header'
import Footer from '../Footer'
import DaysList from '../Day2dayList'

const CsList = [
  {
    title: 'Day 1',
    cardTitle: 'Introduction to Information Security / Cyber Security',
    cardDetailedText:
      'Will understand the evolution of Information security and how Cyber Security a subset of Information security is, different job roles, skill sets required. Why we need Cyber Security? Career Paths and the life of Security Expert.',
  },
  {
    title: 'Day 2',
    cardTitle: 'Basics of System Administration',
    cardDetailedText:
      'System Hardware like RAM, SSD, CD. Different connector types and Cables, Mobile devices, Network Cables and user roles, privileges & System Troubleshooting.',
  },
  {
    title: 'Day 3',
    cardTitle: 'Operating Systems',
    cardDetailedText:
      'Understanding common operating system types & their purposes. OS – installation, upgradation & different versions. Command lin tools windows & Linux.',
  },
  {
    title: 'Day 4',
    cardTitle: 'Physical – Logical – Wireless Security',
    cardDetailedText:
      'Understanding Physical Security Controls, Access control Vestibules, Drones – Surveillance, CCTV, WEP, Secure Data Destruction etc.',
  },
  {
    title: 'Day 5',
    cardTitle: 'Basics of Networking',
    cardDetailedText:
      'OSI Model, Topologies, IP addressing &amp; Classes, Ports &amp; Protocols, Organizational Policies, Defense in depth, Zero Trust',
  },
  {
    title: 'Day 6',
    cardTitle: 'Lab -1 (Performance Evaluation-1) - Networking',
    cardDetailedText:
      'Windows Commands, Linux Commands, Wireshark, Nmap, Angry IP Scanner, Acrylic Wi-Fi.',
  },
  {
    title: 'Day 7',
    cardTitle: 'Digital Footprint – Digital Wellbeing',
    cardDetailedText:
      'Understanding what you leave on internet when you do something. Unique Identifiers, Organizational policies for digital platform handling, Personal & Social behavior on Internet.',
  },
  {
    title: 'Day 8',
    cardTitle: 'Different Types of Vulnerabilities &; Threats',
    cardDetailedText:
      'Compare & Contrast different types of social engineering techniques. Analyzing potential indicators to determine the type of attack along with Application &; Network Attacks.',
  },
  {
    title: 'Day 9',
    cardTitle: 'Cyber Bullying &; Cyber Warfare – PII Protection',
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
    cardTitle: 'Deep web – Tor Project – Investigations',
    cardDetailedText:
      'Understanding how the deep web works, peer-to-peer network connections, VPN over TOR, Crime Ring, Investigations.',
  },
  {
    title: 'Day 12',
    cardTitle: 'OSINT Framework – Tools',
    cardDetailedText:
      'Tools: Open-Source Intelligence framework provides large collection of resources for huge variety of tasks from harvesting email address to tracing back to an hacker/criminal. Revers image analysis, geo-location tracking etc.',
  },
  {
    title: 'Day 13',
    cardTitle:
      'Threat &amp; Vulnerability Management – TTPs – Threat Intelligence',
    cardDetailedText:
      'Threat Classification, Intelligent Sources, Attack Models – MITRE ATT&amp;CK, Cyber Kill Chain. Tactics, Techniques &Procedures &amp; Threat Intelligence.',
  },
  {
    title: 'Day 14',
    cardTitle: 'LAB -2 (Performance Evaluation-2) - VAPT',
    cardDetailedText: 'OWASP Top 10 Vulnerabilities, Burp suite.',
  },
  {
    title: 'Day 15',
    cardTitle: 'Cloud Concepts',
    cardDetailedText:
      'Understanding Service Models – SAAS/IAAS/PAAS. Public-Private Hybrid Clouds. Characteristics of cloud – Elasticity, Scalability, Availability, Pay-As-you go models. Understanding Cap-Ex, Op-Ex & SLA’s.',
  },
  {
    title: 'Day 16',
    cardTitle:
      'Cyber Security – Regulations, Frameworks, Laws, Auditing, Compliance',
    cardDetailedText:
      'Country wise frameworks applicable, GDPR, NIST, HIPPA, PCI-DSS. Understanding SOC Type-1, Type-2 & Type-3 Audits. IT Act – PDP Bill - Data Protection Bill & compliances.',
  },
]

class CsTrainingProgram extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='services-container'>
          <h1>Cyber Security Training program</h1>
        </div>
        <DaysList data={CsList} />
        <Footer />
      </div>
    )
  }
}
export default CsTrainingProgram
