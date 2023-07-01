import '../Training-cards/index.css'

const TrainingCards = (props) => {
  const { list } = props
  const { courseName, description } = list
  return (
    <div className='cards'>
      <div className='content'>
        <p className='heading'>{courseName}</p>
        <p className='para'>{description}</p>
        <button className='btns'>Read more</button>
      </div>
    </div>
  )
}
export default TrainingCards
