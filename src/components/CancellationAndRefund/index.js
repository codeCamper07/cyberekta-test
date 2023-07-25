import Footer from '../Footer'
import Header from '../Header'
import './index.css'

const CancellationAndRefund = () => {
  return (
    <div>
      <Header />
      <h1 style={{ 'text-align': 'center' }}>Cancellation And Refund</h1>
      <div style={{ padding: '10px', 'font-size': '18px' }}>
        <p>
          Any Capitalized terms used but not defined herein shall have the
          meaning assigned to them under the Terms of Use which govern your use
          of our website www.Cyberekta.com (the “Website”) and our ‘Cyberekta’
          application for mobile and handheld devices (the “App”). The Website
          and the App are jointly referred to as the “Platform”.
        </p>
        <h3>Customer Cancellation</h3>
        <ul>
          <li>
            As a general rule Buyer shall not be entitled to cancel Order once
            placed. Buyer may choose to cancel Order in that scenario customer
            should reach out via email (info@cyberekta.com) with in 24 hours to
            get approval or refund. However, subject to Buyer’s previous
            cancellation history, Cyberekta reserves the right to deny any
            refund to Buyer pursuant to a cancellation initiated by Buyer even
            if the same is within one business day followed by suspension of
            account, as may be necessary in the sole discretion of Cyberekta.
          </li>
          <li>
            If Buyer cancels his/her Order after placing it, Cyberekta shall
            have a right to collect a penalty of 100% of the Order amount for
            breach of contract terms as a compensation for the damages suffered
            by Cyberekta, with a right to either not to refund the Order value
            in case Buyer’s Order is prepaid or recover from the Buyer’s
            subsequent Order in case his/her Order is postpaid, to compensate
            the Merchants.
          </li>
        </ul>
        <h3>Cancellations or rescheduling of courses by Cyberekta.</h3>
        <ul>
          <li>
            Cyberekta reserves the right to cancel or reschedule a course at any
            time, including but not limited to, insufficient registrations,
            trainer unavailability, or if the trainer could not attend due to
            unforeseen circumstances.
          </li>
          <li>
            Cyberekta not liable for any direct, indirect, consequential, or
            special damages that may be incurred due to a cancellation of a
            scheduled class.
          </li>
        </ul>
        <h3>Refunds</h3>
        <ul>
          <li>
            Buyer may be entitled to a refund for prepaid Orders.  Cyberekta
            retains the right to retain the penalty payable by the Buyer from
            the amount refundable to him/her. The Buyer shall also be entitled
            to a refund of proportionate value in the event packaging of an item
            in an Order or the complete Order, is either tampered or damaged and
            the Buyer refuses to accept at the time of delivery for the said
            reason;
          </li>
          <li>
            Buyer may be entitled to a refund up to 100% of the Order value if
            courier (all) fails to deliver the Order due to a cause attributable
            to either PDP or Cyberekta, however such refunds will be assessed on
            a case to case basis by Cyberekta
          </li>
          <li>Our decision on refunds shall be final and binding.</li>
          <li>
            All refund amounts shall be credited to Buyer’s account as may be
            stipulated as per the payment of Buyer’s choice
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}
export default CancellationAndRefund
