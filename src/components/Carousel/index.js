import { Paper } from '@mui/material'
import '../Carousel/index.css'

const CarouselItems = (props) => {
  const { con } = props
  return (
    <Paper className='paper-style'>
      <h3 className='heading'>{con.name}</h3>
      <p className='para'>{con.testimonial}</p>
    </Paper>
  )
}
export default CarouselItems
