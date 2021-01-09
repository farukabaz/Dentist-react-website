import React, {Component} from 'react'
import './Herosection.css'
import Navbar from './Navbar'

export default class Herosection extends Component {
    render() {
        return (
            <div id="herosection" className='herosection-container'>
                <h2>Stomatološka Ordinacija</h2>
                <h1>Hajradinović</h1>
                <p>Mi činimo svijet boljim, osmijeh po osmijeh</p>
            </div>
        )
    }
}
