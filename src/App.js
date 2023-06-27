import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'

import Home from './components/Home'
import contactUs from './components/Contact us'
import Services from './components/Services'
import Solutions from './components/Solutions'
import About from './components/About'
import Trainings from './components/Trainings'

const App = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/contactUs' component={contactUs} />
    <Route exact path='/services' component={Services} />
    <Route exact path='/solutions' component={Solutions} />
    <Route path='/about' component={About} />
    <Route path='/trainings' component={Trainings} />
  </Switch>
)

export default App
