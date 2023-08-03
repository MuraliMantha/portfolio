import './experience.css'
import {HiCheck} from 'react-icons/hi'
import {BsLink45Deg} from 'react-icons/bs'

const Experience = () => (
  <>
    <section>
      <h5>What Skills I Have</h5>
      <h2>My Experiences</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <HiCheck className="experience__details-icon" />
              <div>
                <h4>React.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <HiCheck className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <HiCheck className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <HiCheck className="experience__details-icon" />
              <div>
                <h4>Git</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <HiCheck className="experience__details-icon" />
              <div>
                <h4>Css</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <HiCheck className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Certifications</h3>
          <div className="experience__content">
            <article className="experience__details">
              <HiCheck className="experience__details-icon" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <HiCheck className="experience__details-icon" />
              <div>
                <h4>Express.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <HiCheck className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <HiCheck className="experience__details-icon" />
              <div>
                <h4>Sqlite</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h5>What are my</h5>
      <h2>Certifications</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h2>Certifications</h2>
          </div>

          <ul className="service__list">
            <li>
              <BsLink45Deg className="service__list-icon" />

              <a
                href="https://certificates.ccbp.in/intensive/developer-foundations?id=GGOLWIHSTW"
                target="_blank"
                rel="noreferrer"
              >
                Developer Foundations
              </a>
            </li>

            <li>
              <BsLink45Deg className="service__list-icon" />

              <a
                href="https://certificates.ccbp.in/intensive/introduction-to-databases?id=GXANPZJKPZ"
                target="_blank"
                rel="noreferrer"
              >
                SQL
              </a>
            </li>

            <li>
              <BsLink45Deg className="service__list-icon" />

              <a
                href="https://certificates.ccbp.in/intensive/programming-foundations?id=LVFTFACVPV"
                target="_blank"
                rel="noreferrer"
              >
                Python
              </a>
            </li>

            <li>
              <BsLink45Deg className="service__list-icon" />

              <a
                href="https://certificates.ccbp.in/intensive/responsive-website?id=JZGSJNGECC"
                target="_blank"
                rel="noreferrer"
              >
                Responsive Web Design
              </a>
            </li>
          </ul>
        </article>
      </div>
    </section>
  </>
)

export default Experience
