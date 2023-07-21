import { Component } from 'react'
import '../Azure30/index.css'
import Header from '../Header'
import Footer from '../Footer'
import DaysList from '../Day2dayList'

const Azure30List = [
  {
    title: 'Day 1',
    cardTitle: 'Introduction to Azure and Cloud Computing',
    cardDetailedText: [
      'Introduction to cloud computing concepts',
      'Benefits of cloud computing',
      'Understanding different cloud service models (IaaS, PaaS, SaaS)',
      'Exploring Azure as a cloud computing platform',
      'Azure subscriptions and management groups',
    ],
  },
  {
    title: 'Day 2',
    cardTitle: 'Azure Resource Manager and Azure Portal',
    cardDetailedText: [
      'Overview of Azure services and offerings',
      'Understanding Azure Resource Manager and its benefits',
      'Navigating the Azure portal',
      'Azure subscriptions and management groups - Hierarchy',
      'Working with Azure Resource Groups',
      'Creating and managing Azure resources using the portal',
    ],
  },
  {
    title: 'Day 3',
    cardTitle: 'Virtual Machines',
    cardDetailedText: [
      'Deploying and managing virtual machines in Azure',
      'Virtual machine scale sets and availability sets',
      'Virtual machine types',
      'Spot instances, on demand and reserved instances',
    ],
  },
  {
    title: 'Day 4',
    cardTitle: 'Azure Networking',
    cardDetailedText: [
      'Azure virtual networks and subnets',
      'Network security groups and Azure Firewall - The differences',
      'Azure Load Balancer and Application Gateway -  Overview',
      'VPN and ExpressRoute connectivity options - Overview',
    ],
  },
  {
    title: 'Day 5',
    cardTitle: 'Azure Firewall',
    cardDetailedText: ['Lab Activity'],
  },
  {
    title: 'Day 6',
    cardTitle: 'Azure Load balancer',
    cardDetailedText: ['Lab Activity'],
  },
  {
    title: 'Day 7',
    cardTitle: 'Azure App gateway',
    cardDetailedText: ['Lab Activity'],
  },
  {
    title: 'Day 8',
    cardTitle: 'Azure VPN',
    cardDetailedText: ['Lab Activity'],
  },
  {
    title: 'Day 9',
    cardTitle: 'Azure Storage account',
    cardDetailedText: [
      'BLOBS, Tables, Files and Queues',
      'Shared access signatures',
      'Azure storage Manager',
      'Securing Azure Storage account',
      'Azure Storage replication options & BCDR',
    ],
  },
  {
    title: 'Day 10',
    cardTitle: 'Azure Identity and Access Management (IAM) -  Entra part 1',
    cardDetailedText: [
      'Azure Active Directory (AAD) basics',
      'Managing users, groups, and roles in AAD',
      'Azure AD Connect and Azure AD Domain Services',
      'Implementing Azure Multi-Factor Authentication (MFA)',
      'Conditional Access',
      'Sign in logs and activity logs',
    ],
  },
  {
    title: 'Day 11',
    cardTitle: 'Azure Identity and Access Management (IAM) -  Entra part 2    ',
    cardDetailedText: [
      'SAML, OpenID Connect and Oauth',
      'Onboarding SAAS based applications',
      'App registrations',
      'Enterprise applications',
      'Role assignment and custom roles',
    ],
  },
  {
    title: 'Day 12',
    cardTitle: 'Azure Resource Management and Azure CLI',
    cardDetailedText: [
      'Azure CLI',
      'Azure Resource Manager (ARM) templates',
      'Azure Automation and PowerShell scripting',
    ],
  },
  {
    title: 'Day 13',
    cardTitle: 'Azure Databases',
    cardDetailedText: [
      'Azure SQL Database and Azure SQL Managed Instance',
      'Azure Cosmos DB and Azure Database for MySQL/PostgreSQL',
    ],
  },
  {
    title: 'Day 14',
    cardTitle: ' Azure Backup and BCDR',
    cardDetailedText: ['Azure Backup and Azure Site Recovery'],
  },
  {
    title: 'Day 15',
    cardTitle: 'Azure Architecture and Design',
    cardDetailedText: [
      'Azure regions, availability zones, and data centers',
      'Azure Virtual WAN and Azure Front Door',
      'Designing for scalability, high availability, and disaster recovery',
      'Azure best practices and design patterns',
      'Azure pricing and cost management',
      'Well Architected Framework',
    ],
  },

  {
    title: 'Day 16-19',
    cardTitle: 'Azure Security, Privacy, and Compliance',
    cardDetailedText: [
      'Overview of Azure Security Center and Azure Defender',
      'Azure Compliance',
      'Azure Security solutions',
      'Monitoring and maintaining Azure Defender',
    ],
  },

  {
    title: 'Day 20-25',
    cardTitle: 'Azure Governance, Risk, and Compliance',
    cardDetailedText: [
      'Overview of Azure Governance',
      'Azure Policy and Initiative',
      'Azure Resource Manager Templates',
      'Azure Blueprints',
    ],
  },

  {
    title: 'Day 26-29',
    cardTitle: 'Azure Operations and Service Management',
    cardDetailedText: [
      'Overview of Azure Service Management',
      'Azure Service Health and Service Health Alerts',
      'Azure Monitor and Azure Log Analytics',
      'Azure Automation and Resource Management',
    ],
  },

  {
    title: 'Day 30',
    cardTitle: 'Final Exam and Certification',
    cardDetailedText: [
      'Review key concepts and take the AZ-104 certification exam',
    ],
  },
]

class Azure30 extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='services-container'>
          <h1>Azure in 30 days</h1>
          <DaysList data={Azure30List} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Azure30
