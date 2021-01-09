import React, {Component} from 'react'
import './AboutUs.css'

export default class AboutUs extends Component {
    render() {
        return (
            <div id="services" className='aboutus-container'>
                <div className='instructions-heading'>
                <h1>Usluge</h1>
                <p>DR. Hajradinovic ordinacija</p>
                <p>s vama od 1977</p>
            </div>

            <div className='instructions-links'>
                <div className='instructions-links-wraper'>
                    <div className='instructions-links-items'>
                        <a>Stomatološka ordinacija „Dr. Hajradinović 1977“ je registrovana kao ordinacija polivalentne prakse. Pruža usluge iz oblasti: Oralne hirurgije, dentalne implantologije, protetike, restaurativne, estetske stomatologije, endodoncije, parodontalne hirurgije, RTG dijagnostike: 2D, 3D, CBCT i Rvg.</a>
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
