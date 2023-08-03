import './contact.css'
import {Link} from 'react-router-dom'
import {FiMail} from 'react-icons/fi'
import {FaWhatsapp, FaGithub} from 'react-icons/fa'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()
  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_ea5wb5v',
        'template_29ql6tp',
        form.current,
        '_2g9yYF43mqCUIq4v',
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        },
      )
    e.target.reset()
  }

  return (
    <>
      <section>
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <FiMail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>muralikrishnam056@gmail.com</h5>
              <a
                href="mailto:muralikrishnam056@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <FaWhatsapp className="contact__option-icon" />
              <h4>Whatsapp</h4>
              <h5>+918801589971</h5>
              <a
                href="https://api.whatsapp.com/send?phone+918801589971"
                target="_blank"
                rel="noreferrer"
              >
                Send a message
              </a>
            </article>

            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                placeholder="your Full Name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="your Email"
                required
              />
              <textarea
                name="message"
                rows="7"
                placeholder="Your Message"
                required
              />
              <button type="submit" className="btn btn-primary but">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <Link to="/" className="footer__logo">
          <h1>Murali Krishna</h1>
        </Link>

        <ul className="permalinks">
          <li>
            <Link to="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link to="/experience">
              <p>Experience</p>
            </Link>
          </li>
          <li>
            <Link to="/portfolio">
              <p>Portfolio</p>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <p>Contact</p>
            </Link>
          </li>
        </ul>

        <div className="footer__socials">
          <a
            href="https://www.linkedin.com/in/murali-krishna-3646881a5"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin />
          </a>
          <a
            href="https://github.com/MuraliMantha"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Murali Krishna. All rights reserved.</small>
        </div>
      </footer>
    </>
  )
}

export default Contact
