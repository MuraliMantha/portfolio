import {Route, Switch} from 'react-router-dom'
import Header from './components/header/Header'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import './App.css'

const App = () => (
  <>
    <Nav />
    <Switch>
      <Route exact path="/" component={Header} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/experience" component={Experience} />
      <Route exact path="/portfolio" component={Portfolio} />
    </Switch>
  </>
)

export default App
