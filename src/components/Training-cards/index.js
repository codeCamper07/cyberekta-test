import '../Training-cards/index.css'
import { useDispatch } from 'react-redux'

const TrainingCards = (props) => {
  const { list } = props
  const { courseName, description, path } = list
  const dispatch = useDispatch()
  const clickedEvent = (val) => {
    return {
      type: 'Add-To-Cart',
      val,
    }
  }

  return (
    <div className='cards'>
      <div className='content'>
        <p className='heading'>{courseName}</p>
        <p className='para'>{description}</p>
        <div className='btn-containers'>
          <a href={path}>
            <button className='btns'>Read more</button>
          </a>
          <button
            className='btns'
            type='submit'
            onClick={() => dispatch(clickedEvent(list))}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default TrainingCards
