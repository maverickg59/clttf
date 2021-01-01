import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { iconLibrary } from 'maverick-toolkit-react'
import { icons } from './lib'
import { Header, Footer, Banner } from './components'
import { Home, Coach, Support, Mission, Apply } from './pages'
import './scss/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  iconLibrary(icons)
  return (
    <div>
      <Router>
        <Fragment>
          <Header />
          <Banner />
          <section>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/coach' component={Coach} />
              <Route exact path='/support' component={Support} />
              <Route exact path='/mission' component={Mission} />
              <Route exact path='/apply' component={Apply} />
            </Switch>
          </section>
          <Footer />
        </Fragment>
      </Router>
    </div>
  )
}

export default App
