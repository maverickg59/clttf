import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import { iconLibrary } from 'maverick-toolkit-react'
import { icons } from './lib'
import { Header, Footer, Banner } from './components'
import {
  Home,
  Coach,
  Support,
  Mission,
  Apply,
  About,
  Contact,
  PrivacyPage,
  PrivacyDelete,
} from './pages'
import './scss/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

axios.defaults.baseURL = 'https://clttf.herokuapp.com'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'

function App() {
  iconLibrary(icons)

  return (
    <Router>
      <div className='c-app'>
        <div className='c-app__body'>
          <Header />
          <Banner />
          <section>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/coach' component={Coach} />
              <Route exact path='/support' component={Support} />
              <Route exact path='/mission' component={Mission} />
              <Route exact path='/apply' component={Apply} />
              <Route exact path='/about' component={About} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/privacy' component={PrivacyPage} />
              <Route
                exact
                path='/delete-privacy-info'
                component={PrivacyDelete}
              />
            </Switch>
          </section>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
