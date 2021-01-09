import React, {Component} from 'react'
import './Services.css'
import {FaFacebookF} from 'react-icons/fa'
import ReactRoundedImage from 'react-rounded-image'
import amar from './images/amar.jpg'

export default class Services extends Component {
    render() {
        return (
            <div id="services" className='services-container'>

                <h1>Naš tim</h1>
            
        <ReactRoundedImage 
        image={amar}
        roundedColor='lightblue'
        imageWidth='400'
        imageHeight='300'
        roundedSize='20'
        />

        <h4>Dr. Sci. dr. Hajradinović Amar</h4>
        <a 
          href='https://www.facebook.com/amar.hajradinovic'
          className='media-icon'>
            <FaFacebookF/>    
        </a>
        </div>
        )
    }
}