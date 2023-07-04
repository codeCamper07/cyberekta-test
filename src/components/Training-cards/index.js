import { Link } from 'react-router-dom/cjs/react-router-dom'
import '../Training-cards/index.css'

const TrainingCards = (props) => {
  const { list } = props
  const { courseName, description, path } = list

  return (
    <div className='cards'>
      <div className='content'>
        <p className='heading'>{courseName}</p>
        <p className='para'>{description}</p>
        <Link to={path}>
          <button className='btns'>Read more</button>
        </Link>
      </div>
    </div>
  )
}
export default TrainingCards
