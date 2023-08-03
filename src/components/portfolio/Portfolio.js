import './portfolio.css'
import IMG5 from '../../assets/IMG5.png'
import IMG1 from '../../assets/IMG1.png'
import IMG6 from '../../assets/IMG6.png'
import IMG7 from '../../assets/IMG7.png'
import IMG8 from '../../assets/IMG8.png'
import IMG2 from '../../assets/IMG2.png'
import IMG3 from '../../assets/IMG3.png'
import IMG4 from '../../assets/IMG4.png'

const data = [
  {
    id: 1,
    image: IMG5,
    title: 'Nxt Trendz App,{usrnme: rahul,passwd: rahul@2021}',
    github: 'https://github.com/MuraliMantha/specificProductNxtTrendz',
    demo: 'https://nxtz.ccbp.tech/',
  },
  {
    id: 2,
    image: IMG1,
    title: 'Money Manager App',
    github: 'https://https://github.com/MuraliMantha/MoneyManager',
    demo: 'https://moneymanmmk.ccbp.tech/',
  },
  {
    id: 3,
    image: IMG6,
    title: 'My Journey Time-line',
    github: 'https://github.com/MuraliMantha/ccbpTimeline',
    demo: 'https://ccbptimelinemmk.ccbp.tech/',
  },
  {
    id: 4,
    image: IMG7,
    title: 'Emoji Game',
    github: 'https://github.com/MuraliMantha/EmojiGame',
    demo: 'https://emojgamemmk.ccbp.tech/',
  },
  {
    id: 5,
    image: IMG8,
    title: 'Password Manager',
    github: 'https://github.com/MuraliMantha/passwordManagerreact',
    demo: 'https://https://passmmk.ccbp.tech//',
  },
  {
    id: 6,
    image: IMG3,
    title: 'To-do-List App',
    github: 'https://github.com/MuraliMantha/todoList',
    demo: 'https://updatedtodo320.ccbp.tech/',
  },
  {
    id: 7,
    image: IMG4,
    title: 'Wikepedia Search App',
    github: 'https://github.com',
    demo: 'https://wikiseaarch.ccbp.tech/',
  },

  {
    id: 8,
    image: IMG2,
    title: 'FoodMunch App',
    github: 'https://github.com/MuraliMantha/FoodmunchWebsite',
    demo: 'https://fm.ccbp.tech/',
  },
]

const Portfolio = () => (
  <section>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio__container">
      {data.map(({id, title, image, github, demo}) => (
        <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className="btn" target="_blank" rel="noreferrer">
              {' '}
              Github{' '}
            </a>
            <a
              href={demo}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              Live Demo{' '}
            </a>
          </div>
        </article>
      ))}
    </div>
  </section>
)

export default Portfolio
