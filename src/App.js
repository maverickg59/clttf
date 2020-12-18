import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { iconLibrary } from 'maverick-toolkit-react'
import { icons } from './lib'
import { Header, Footer, Banner } from './components'
import { Home, Coach, Support } from './pages'
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
            </Switch>
          </section>
          <Footer />
        </Fragment>
      </Router>
    </div>
  )
}

export default App
