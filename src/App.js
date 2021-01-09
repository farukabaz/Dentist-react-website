import React, {Component} from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Footer from './components/Footer'

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <Herosection/>
      <AboutUs/>
      <Services/>
      <Footer/>
      </>
    )
  }
}

