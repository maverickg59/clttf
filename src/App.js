import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { iconLibrary } from 'maverick-toolkit-react'
import { icons } from './lib'
import { Header, Footer, Banner } from './components'
import { Home, Coach, Support, Mission, Apply, About } from './pages'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './scss/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  iconLibrary(icons)
  return (
    <Row>
      <Col xs={12}>
        <Router>
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
            </Switch>
          </section>
          <Footer />
        </Router>
      </Col>
    </Row>
  )
}

export default App
