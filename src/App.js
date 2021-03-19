import React, {Component} from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import OurTeam from './components/OurTeam'
import Services from './components/Services'
import Footer from './components/Footer'

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <Herosection/>
      <Services/>
      <OurTeam/>
      <Footer/>
      </>
    )
  }
}

