import '../Services-card/index.css'

const ServicesCard = (props) => {
  const { cont } = props
  const { name, description } = cont
  return (
    <div className='card '>
      <div className='content'>
        <p className='heading'>{name}</p>
        <p className='para'>{description}</p>
        <button className='btn'>Read more</button>
      </div>
    </div>
  )
}
export default ServicesCard
