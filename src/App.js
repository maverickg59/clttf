import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { iconLibrary } from 'maverick-toolkit-react'
import { icons } from './lib'
import { Header, Footer } from './components'
import { Home } from './pages'
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
          {/* <section className='container'>
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </section> */}
          <Footer />
        </Fragment>
      </Router>
    </div>
  )
}

export default App
