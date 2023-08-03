import {useState} from 'react'
import {Link} from 'react-router-dom'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FiUser} from 'react-icons/fi'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {TiMessage} from 'react-icons/ti'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('/')

  return (
    <nav>
      <Link
        to="/"
        onClick={() => setActiveNav('/')}
        className={activeNav === '/' ? 'active' : ''}
      >
        <AiOutlineHome />
      </Link>
      <Link
        to="/about"
        onClick={() => setActiveNav('/about')}
        className={activeNav === '/about' ? 'active' : ''}
      >
        <FiUser />
      </Link>
      <Link
        to="/experience"
        onClick={() => setActiveNav('/experience')}
        className={activeNav === '/experience' ? 'active' : ''}
      >
        <BiBook />
      </Link>
      <Link
        to="/portfolio"
        onClick={() => setActiveNav('/portfolio')}
        className={activeNav === '/portfolio' ? 'active' : ''}
      >
        <RiServiceLine />
      </Link>
      <Link
        to="/contact"
        onClick={() => setActiveNav('/contact')}
        className={activeNav === '/contact' ? 'active' : ''}
      >
        <TiMessage />
      </Link>
    </nav>
  )
}

export default Nav
