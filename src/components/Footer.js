import React, {Component} from 'react'
import './Footer.css'
import {GoLocation} from 'react-icons/go'
import ContactForm from '../components/ContactForm'

export default class Footer extends Component {
    render() {
        return (
            <div id="footer" className='footer-container'>
                <div class='footer-links'>
                    <div className='footer-link-wrapper'>
                        <div class='footer-link-items'>
                            <p>Radno vrijeme</p>
                            <a>Radnim danima</a>
                            <a>09:00 - 17:00</a>
                            <a>Vikendom</a>
                            <a>10:00 - 15:00</a>
                        </div>
                        <div class='footer-link-items'>
                            <p>Lokacija</p>
                            <a>Bolnička 44, Sarajevo 71000</a>
                            <a
                            href='https://www.google.com/maps/place/Bolni%C4%8Dka+38,+Sarajevo+71000/@43.8677686,18.4190508,19.61z/data=!4m5!3m4!1s0x4758c8d4ade39ccf:0xf94a345182a4a949!8m2!3d43.8680795!4d18.4187746'
                            className='location-icon'>
                                <GoLocation/>
                            </a>
                        </div>
                    </div>
                    <div className='footer-link-wrapper'>
                        <div class='footer-link-items'>
                            <p>Kontakt</p>
                            <a>Broj telefona:</a>
                            <a>061 700 982</a>
                        </div>
                        <div class='footer-link-items'>
                            <p>Ili nam pošaljite mail</p>
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
