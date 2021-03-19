import React, {Component} from 'react'
import './Services.css'

export default class Services extends Component {
    render() {
        return (
            <div id="services" className='aboutus-container'>
                <div className='instructions-heading'>
                <h1>Usluge</h1>
                <p>DR. Hajradinovic ordinacija</p>
            </div>

            <div className='instructions-links'>
                <div className='instructions-links-wraper'>
                    <div className='instructions-links-items'>
                        <a>Stomatološka ordinacija “Hajradinović” je ordinacija opće stomatologije,  gdje možete dobiti usluge iz oblasti oralne hirurgije, dječije i preventivne stomatologije, protetike, endodoncije i restaurativne stomatologije.</a>
                        <a>Naš tim čine specijalista oralne hirurgije, specijalista dječije i preventivne stomatologije te doktor dentalne medicine.</a>
                    </div>
                </div>
                <div className='instructions-links-wraper'>
                    <div className='instructions-links-items'>
                        <img className='img'
                        src='/images/ordinacija.jpg'/>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
