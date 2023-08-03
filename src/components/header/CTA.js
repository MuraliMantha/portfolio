import {Link} from 'react-router-dom'
import mmk from '../../assets/mmk.pdf'

const CTA = () => (
  <div className="cta">
    <a href={mmk} download className="btn">
      Download CV
    </a>
    <Link to="/contact" className="btn btn-primary">
      Let's Talk
    </Link>
  </div>
)

export default CTA
