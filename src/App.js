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
import Azure15 from './components/Azure15'
import Azure30 from './components/Azure30'
import CsTrainingProgram from './components/CS-Training-program'
import CsMBA from './components/CS-MBA'
import GcInCyberPsych from './components/GC-in-CyberPsych'
import EthicalHacking from './components/Ethical-hacking'

const App = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/contactUs' component={contactUs} />
    <Route path='/services' component={Services} />
    <Route path='/solutions' component={Solutions} />
    <Route path='/about' component={About} />
    <Route path='/trainings' component={Trainings} />
    <Route exact path='/trainings-Azurein15days' component={Azure15} />
    <Route path='/trainings-Azurein30days' component={Azure30} />
    <Route
      path='/trainings-Cyber-security-training-program'
      component={CsTrainingProgram}
    />
    <Route
      exact
      path='/trainings-Cyber-security-boot-camp-for-MBA'
      component={CsMBA}
    />
    <Route
      path='/trainings-Graduate-certificate-in-cyberpsychology'
      component={GcInCyberPsych}
    />
    <Route exact path='/trainings-Ethical-hacking' component={EthicalHacking} />
    <Route exact path='/404-error' component={Error} />
    <Redirect to='/404-error' />
  </Switch>
)

export default App
