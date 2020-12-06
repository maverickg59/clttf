import React, { Fragment } from 'react'
import './scss/index.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { iconLib, Header } from './components'
import { Home } from './pages'
import 'maverick-toolkit-css'

function App() {
  iconLib()
  return (
    <div>
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
        </Fragment>
      </Router>
    </div>
  )
}

export default App
