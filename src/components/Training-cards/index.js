import '../Training-cards/index.css'

const TrainingCards = (props) => {
  const { list } = props
  const { courseName, description, path } = list

  return (
    <div className='cards'>
      <div className='content'>
        <p className='heading'>{courseName}</p>
        <p className='para'>{description}</p>
        <a href={path}>
          <button className='btns'>Read more</button>
        </a>
      </div>
    </div>
  )
}
export default TrainingCards
