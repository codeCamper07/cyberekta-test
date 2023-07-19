import { Component } from 'react'
import './index.css'
import Header from '../Header'
import Footer from '../Footer'
import DaysList from '../Day2dayList'

const Azure15List = [
  {
    title: 'Day 1',
    cardTitle: 'Introduction to Cloud Computing',
    cardDetailedText: [
      'What is cloud computing?',
      'Benefits of cloud computing',
      'Types of cloud services (IaaS, PaaS, SaaS)',
      'Cloud deployment models (public, private, hybrid)',
    ],
  },
  {
    title: 'Day 2',
    cardTitle: 'Azure Fundamentals',
    cardDetailedText: [
      'Introduction to Microsoft Azure',
      'Azure global infrastructure',
      'Azure Services and Solutions Overview',
      'Azure Management Tools and Portals',
    ],
  },
  {
    title: 'Day 3',
    cardTitle: 'Azure Subscriptions and Management Groups',
    cardDetailedText: [
      'Azure subscriptions and billing',
      'Azure management groups',
      'Role-based access control (RBAC) in Azure',
    ],
  },
  {
    title: 'Day 4',
    cardTitle: 'Azure Virtual Machines',
    cardDetailedText: [
      'Introduction to Azure Virtual Machines',
      'Creating and managing Azure VMs',
      'Availability sets and availability zones',
      'Azure VM pricing and sizing considerations',
    ],
  },
  {
    title: 'Day 5',
    cardTitle: 'Azure Storage',
    cardDetailedText: [
      'Introduction to Azure Storage',
      'Azure Blob Storage',
      'Azure file Storage',
      'Azure Table Storage',
      'Azure Queue Storage',
    ],
  },
  {
    title: 'Day 6',
    cardTitle: 'Azure Networking',
    cardDetailedText: [
      'Azure Virtual Network (VNet)',
      'Network security groups (NSGs)',
      'Azure Load Balancer',
      'Azure Application Gateway',
      'Azure VPN Gateway',
    ],
  },
  {
    title: 'Day 7',
    cardTitle: 'Azure Identity and Access Management (IAM)',
    cardDetailedText: [
      'Azure Active Directory (AD)',
      'Azure AD identities and tenants',
      'Azure AD authentication methods',
      'Azure AD access management',
    ],
  },
  {
    title: 'Day 8',
    cardTitle: 'Azure Governance and Security',
    cardDetailedText: [
      'Azure Policy',
      'Azure Resource Manager (ARM)',
      'Azure Security Center',
      'Azure monitoring and logging',
      'Azure Advisor',
    ],
  },
  {
    title: 'Day 9',
    cardTitle: 'Azure Databases',
    cardDetailedText: [
      'Introduction to Azure databases',
      'Azure SQL Database',
      'Azure Cosmos DB',
      'Azure Database for MySQL',
      'Azure Database for PostgreSQL',
    ],
  },
  {
    title: 'Day 10',
    cardTitle: 'Azure App Services',
    cardDetailedText: [
      'Introduction to Azure App Services',
      'Azure Web Apps',
      'Azure Functions',
      'Azure Logic Apps',
      'Azure API Management',
    ],
  },
  {
    title: 'Day 11',
    cardTitle: 'Azure Serverless Computing',
    cardDetailedText: [
      'Serverless computing concepts',
      'Azure Functions',
      'Azure Logic Apps',
      'Azure Event Grid',
      'Azure Service Bus',
    ],
  },
  {
    title: 'Day 12',
    cardTitle: 'Azure AI and Machine Learning',
    cardDetailedText: [
      'Introduction to Azure AI services',
      'Azure Cognitive Services',
      'Azure Machine Learning',
    ],
  },
  {
    title: 'Day 13',
    cardTitle: 'Azure DevOps and DevTest Labs',
    cardDetailedText: [
      'Introduction to Azure DevOps',
      'Azure DevTest Labs',
      'CI/CD pipelines with Azure DevOps',
    ],
  },
  {
    title: 'Day 14',
    cardTitle: 'Azure IoT and Edge Computing',
    cardDetailedText: [
      'Introduction to Azure IoT',
      'Azure IoT Hub',
      'Azure IoT Edge',
    ],
  },
  {
    title: 'Day 15',
    cardTitle: 'Exam Preparation and Practice Tests',
    cardDetailedText: [
      'Review of all topics covered',
      'Practice exams and sample questions',
      'Tips for exam preparation and test-taking strategies',
    ],
  },
]

class Azure15 extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Header />
        <div className='services-container'>
          <h1>Azure in 15 days</h1>
          <DaysList data={Azure15List} />
          <button className='btnss'>Add To Cart</button>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Azure15
