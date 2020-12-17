import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { iconLibrary } from 'maverick-toolkit-react'
import { icons } from './lib'
import { Header, Footer } from './components'
import { Home, Coach } from './pages'
import './scss/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  iconLibrary(icons)
  return (
    <div className='bg-dark'>
      <Router>
        <Fragment>
          <Header />
          <Route exact path='/' component={Home} />
          <section>
            <Switch>
              <Route exact path='/coach' component={Coach} />
            </Switch>
          </section>
          <Footer />
        </Fragment>
      </Router>
    </div>
  )
}

export default App
