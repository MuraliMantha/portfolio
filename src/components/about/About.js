import {Link} from 'react-router-dom'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {SiGooglescholar} from 'react-icons/si'
import {AiFillFolderOpen} from 'react-icons/ai'
import me from '../../assets/me.jpg'

const About = () => (
  <section>
    <h5>Get To Know</h5>
    <h2>About me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={me} alt="About me" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about_icon" />
            <h5>My Experience</h5>
            <small>Fresher</small>
          </article>
          <article className="about__card">
            <SiGooglescholar className="about_icon" />
            <h5>Certifications</h5>
            <small>
              7+ <br /> Earned
            </small>
          </article>
          <article className="about__card">
            <AiFillFolderOpen className="about_icon" />
            <h5>Projects</h5>
            <small>10+ Completed</small>
          </article>
        </div>
        <p>
          I'm a graduate from Ace Engineering College in Mechanical Engineering.
          A React.js and Node.js Developer. I'm a code enthusiast that enjoys
          experimenting with new technologies and building web apps, currently
          learning Full stack web development.
        </p>
        <Link to="/contact" className="btn btn-primary">
          Let's Talk
        </Link>
      </div>
    </div>
  </section>
)

export default About
