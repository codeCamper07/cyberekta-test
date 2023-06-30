import { Button } from '@mui/material'
import './index.css'

const Error = () => (
  <div className='error-page'>
    <img
      className='error-img'
      src='https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=1800&t=st=1688112986~exp=1688113586~hmac=e2b9efbfce796a7c2fa49d8b4a743b84ef4089c17487c7bae5e320ff2e1962df'
      alt='404-page-not-found'
    />
    <h2>404 Page Not Found!</h2>
    <Button variant='contained' href='/'>
      Home
    </Button>
  </div>
)
export default Error
