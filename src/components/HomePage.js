import React, { Component } from 'react'
import Header from './Header'
import PickGlass from './PickGlass'

export class HomePage extends Component {
    render() {
        return (
            <div>
                <div className='pt-3 bg-img'>
                    <Header></Header>
                    <PickGlass></PickGlass>
                </div>
            </div>
        )
    }
}

export default HomePage