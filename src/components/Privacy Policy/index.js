import Footer from '../Footer'
import Header from '../Header'
import './index.css'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const PrivacyPolicy = () => {
  return (
    <div>
      <Header />
      <div className='policy-header-container'>
        <h1 className='policy-heading'>Privacy Policy</h1>
        <p>
          This privacy policy has been created to assist those who are concerned
          about how their "personally identifiable information" (PII) is used
          online. In information security, personally identifiable information
          is information that can be used alone or in conjunction with other
          information to identify, contact, or locate a single person, or to
          identify an individual in context. Please read our privacy statement
          carefully to gain a thorough comprehension of how we collect, use,
          protect, and otherwise manage your Personally Identifiable Information
          in accordance with our website.
        </p>
      </div>
      <div className='policy-content-container'>
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'>
            <Typography>
              1. What personally identifiable information do we collect from
              visitors to our blog, website, and app
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              When ordering or registering on our site, you may be asked to
              enter your name, email address, mailing address, phone number, or
              other details to assist you with your experience.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2a-content'
            id='panel2a-header'>
            <Typography>2. When do we collect information?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We collect information from you when you place an order, subscribe
              to a newsletter, respond to a survey, fill out a form registering
              for a demonstration or webinar or enter information on our site.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel3a-content'
            id='panel3a-header'>
            <Typography>3. How do we use your information?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We may use the information we collect from you when you register,
              make a purchase, sign up for our newsletter, respond to a survey
              or marketing communication, surf the website, or use certain other
              site features in the following ways:
              <ul>
                <li>
                  To personalize user’s experience and to allow us to deliver
                  the type of content and product offerings in which you are
                  most interested.
                </li>
                <li>To improve our website in order to better serve you.</li>
                <li>
                  To allow us to better service you in responding to your
                  customer service requests
                </li>
                <li>
                  To administer a contest, promotion, survey or other site
                  feature.
                </li>
                <li>To quickly process your transactions.</li>
                <li>
                  To send periodic emails regarding your order or other products
                  and services.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel4a-content'
            id='panel4a-header'>
            <Typography>4. How do we safeguard visitor data?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Our website is routinely scanned for security holes and known
              vulnerabilities in order to ensure that your visit is as secure as
              feasible. Your personal information is only accessible to a small
              number of people who have special access rights to such systems
              and are required to keep the information confidential. In
              addition, Secure Socket Layer (SSL) technology is used to encrypt
              all sensitive/credit information you provide. When a user places
              an order, we implement a variety of security measures to protect
              your personal information. All transactions are handled by a
              third-party gateway and are not stored or processed on our
              servers.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel5a-content'
            id='panel5a-header'>
            <Typography>
              5. How does our site handle do not track signals?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We honor do not track signals and do not track, plant cookies, or
              use advertising when a Do Not Track (DNT) browser mechanism is in
              place.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel6a-content'
            id='panel6a-header'>
            <Typography>6. Ethics in Information Collection</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The Fair Information Practices Principles are the cornerstone of
              India's privacy law, and their concepts have played a significant
              role in the development of data protection laws around the world.
              It is essential to understand the Fair Information Practice
              Principles and how they should be implemented in order to comply
              with the various privacy laws that protect personal information.
              <br />
              In accordance with Fair Information Practices, we will adopt the
              following measures in the event of a data breach:
              <br /> The consumers will be notified via email.
              <br /> Other
              <br /> Within 10 business days of identifying the breach and
              collecting the complete scope of the breach details We will notify
              users through on-site notification. <br />
              Other
              <br /> Within 10 business days of identifying the breach and
              collecting the complete scope of the breach details.
              <br /> We also concur with the principle of individual redress,
              which requires that individuals have the right to pursue legally
              enforceable rights against data collectors and processors who
              violate the law. This principle requires not only that individuals
              have rights that are enforceable against data users, but also that
              they have recourse to courts or a government agency to investigate
              and/or prosecute noncompliance by data processors.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel7a-content'
            id='panel7a-header'>
            <Typography>7. Sharing of Information Collected</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Cyberekta will not rent or sell your Personal Data to others but
              may disclose Personal Data with contracted third-party vendors and
              service providers (including cloud service providers) that work
              with Cyberekta and are contractually bound by confidentiality
              obligations. We will only share Personal Data with these vendors
              and service providers to help us provide a product or service.
              <br />
              Cyberekta may also share customer information within our family of
              companies for a variety of purposes, for example to provide you
              with the latest information about our products and services and
              offer you our latest promotions. Cyberekta primarily stores data
              about its customers and users in the United States. Customer
              information, including Personal Data that we collect from you, may
              be transferred to, stored at and processed by us and our
              affiliates and other third parties outside the country in which
              you reside.
              <br />
              If Cyberekta sells any part of its operations, Cyberekta may
              transfer Personal Data in connection with the sale. If a sale does
              occur, Cyberekta will attempt to notify you of the disclosure of
              your Personal Data.
              <br />
              We reserve the right to disclose information by law, litigation,
              or as a matter of national security to comply with valid legal
              process including subpoenas, court orders or search warrants, and
              as otherwise required by applicable law. We may also need to
              disclose Personal Data in the event of an emergency that threatens
              an individual’s life, health, or security.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel8a-content'
            id='panel8a-header'>
            <Typography>8. Data Retention and Storage</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Cyberekta retains your information for business purposes, for as
              long as your account is active, and/or as long as is reasonably
              necessary to provide you with our products and services. Cyberekta
              will also retain your information as reasonably necessary to
              comply with our legal obligations, resolve disputes and enforce
              our agreements. We may also retain cached or archived copies of
              your information for a reasonable period of time.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <Footer />
    </div>
  )
}
export default PrivacyPolicy
