import '../HomeCards/index.css'

const HomeCards = (props) => {
  const { cons } = props
  const { main, des } = cons
  return (
    <div className='homecard'>
      <div className='contents'>
        <p className='heading'>{main}</p>
        <p className='para'>{des}</p>
        <button className='btn'>Read more</button>
      </div>
    </div>
  )
}
export default HomeCards
