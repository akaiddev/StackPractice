import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Docs from './screens/Docs'
import Feature from './screens/Feature'
import Home from './screens/Home'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Home' component={Home} />
        <Route exact path='/Feature' component={Feature} />
        <Route exact path='/Docs' component={Docs} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
