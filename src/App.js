import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'

import Home from './components/Home'
import contactUs from './components/Contact us'
import Services from './components/Services'
import Solutions from './components/Solutions'
import About from './components/About'
import Trainings from './components/Trainings'
import Error from './components/Error'

const App = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/contactUs' component={contactUs} />
    <Route exact path='/services' component={Services} />
    <Route exact path='/solutions' component={Solutions} />
    <Route exact path='/about' component={About} />
    <Route exact path='/trainings' component={Trainings} />
    <Route exact path='/404-error' component={Error} />
    <Redirect to='/404-error' />
  </Switch>
)

export default App
