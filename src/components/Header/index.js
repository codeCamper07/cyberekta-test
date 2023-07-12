import { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import './index.css'

class Header extends Component {
  state = { mobileMenuActive: false }

  menuToggle = () => {
    this.setState((prevState) => ({
      mobileMenuActive: !prevState.mobileMenuActive,
    }))
  }

  render() {
    const { mobileMenuActive } = this.state

    return (
      <>
        <div className='nav-bar-style'>
          <a href='/'>
            <img
              className='logo-image'
              src='https://static.wixstatic.com/media/f5b82e_19d46c131f714e3d95a79c728fe8b8e3~mv2.png'
              alt='logo'
            />
          </a>
          <div className='mobile-view'>
            <button className='menu-btn' onClick={this.menuToggle}>
              {mobileMenuActive ? <CloseIcon /> : <MenuIcon />}
            </button>
            {mobileMenuActive && (
              <nav className='mobile-nav'>
                <ul className='nav-mobile-items'>
                  <li>
                    <Link className='nav-mobile-items item' to='/services'>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link className='nav-mobile-items item' to='/solutions'>
                      Solution
                    </Link>
                  </li>
                  <li>
                    <Link className='nav-mobile-items item' to='/contactUs'>
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link className='nav-mobile-items item' to='/about'>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className='nav-mobile-items item' to='/trainings'>
                      Trainings
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </div>
          <nav className='desktop-view'>
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
              <li>
                <Link className='nav-items item' to='/cart'>
                  Cart
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </>
    )
  }
}
export default Header
