import { Chrono } from 'react-chrono'
import './index.css'

const DaysList = (props) => {
  const { data } = props
  return (
    <div className='chrono-container'>
      <Chrono mode='HORIZONTAL' items={data} cardWidth={365} />
    </div>
  )
}
export default DaysList
