import './index.css'

const ServicesCard = (props) => {
  const { cont } = props
  const { name, img, description } = cont
  return (
    <div className='card effect'>
      <img className='service-images' src={img} alt='app-img' />
      <div className='card-content'>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}
export default ServicesCard
