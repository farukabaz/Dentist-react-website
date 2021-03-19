import React, {Component} from 'react'
import './OurTeam.css'
import ReactRoundedImage from 'react-rounded-image'

import nijazija from './images/nijazija.jpg'
import emina from './images/emina.jpg'

export default class OurTeam extends Component {
    render() {
        return (
            <div id="ourteam" className='services-container'>
                <h1>Naš tim</h1>
                
                <div className='aboutus-links'>
                    
                    <div className ='nijazija-wraper'>
                            <ReactRoundedImage 
                            image={nijazija}
                            roundedColor='lightblue'
                            imageWidth='300'
                            imageHeight='300'
                            roundedSize='20'
                            />
                            <h2>Dr. Hajradinović Nijazija,</h2>
                            <h4>spec. oralne hirurgije</h4>
                            <h4>Rođen 1963 godine </h4>
                            <p>Stomatološki fakultet u Sarajevu završava 1987 godine. Nakon završetka studija karijeru započinje u Domu zdravlja gdje ostaje sedam godina, zatim osniva privatnu stomatološku ordinaciju. Specijalizaciju iz oralne hirurgije završava 2000. godine u Beogradu. Sa više od trideset godina iskustva u oblastima oralne hirurgije i polivantne stomatologije mentor je mladim doktorima dentalne medicine u stomatološkoj ordinaciji “Hajradinović”.</p>
                            <a 
                            href='https://www.facebook.com/amar.hajradinovic'
                            className='media-icon'>

                            </a>
                    </div>
                    
                    <div className='emina-wraper'>
                            <ReactRoundedImage 
                            image={emina}
                            roundedColor='lightblue'
                            imageWidth='300'
                            imageHeight='300'
                            roundedSize='20'
                            />
                            <h2>Dr. Hajradinović Emina,</h2>
                            <h4>spec. dječije i preventivne stomatologije</h4>
                            <h4>Rođena 1963 godine </h4>
                            <p>Stomatološki fakultet u Sarajevu završava 1987 godine kao student generacije, te je dobitnik zlatne značke. Nakon završetka studija karijeru započinje u Domu zdravlja, a specijalizaciju iz dječije i preventivne stomatologije završava 2000. godine u Beogradu.</p>
                            <a 
                            href='https://www.facebook.com/amar.hajradinovic'
                            className='media-icon'>

                            </a>
                    </div>

                </div>
                
            </div>
        )
    }
}