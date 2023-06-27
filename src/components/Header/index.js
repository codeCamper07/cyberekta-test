import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './index.css'

const Header = () => (
  <>
    <nav className='nav-bar-style'>
      <a href='/'>
        <img
          className='logo-image'
          src='https://static.wixstatic.com/media/f5b82e_19d46c131f714e3d95a79c728fe8b8e3~mv2.png'
          alt='logo'
        />
      </a>
      <ul className='align-nav-items'>
        <li>
          <Link className='nav-items item' to='/services'>
            Services
          </Link>
        </li>
        <li>
          <Link className='nav-items item' to='/solutions'>
            Solution
          </Link>
        </li>
        <li>
          <Link className='nav-items item' to='/contactUs'>
            Contact us
          </Link>
        </li>
        <li>
          <Link className='nav-items item' to='/about'>
            About
          </Link>
        </li>
        <li>
          <Link className='nav-items item' to='/trainings'>
            Trainings
          </Link>
        </li>
      </ul>
    </nav>
  </>
)
export default Header
