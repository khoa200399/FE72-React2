import React, { Component } from 'react'

export class GlassItem extends Component {
    render() {
        const glass = this.props.data;
        return (
            <div className='col-2 px-1 my-2' onClick={(e) => this.props.onPickGlass(e,glass)}>
                <img className='p-2 a' id={glass.id} style={{ width: '80%', border: '1px solid #cecece' }} src={require(`../glassesImage/${glass.url}.png`)} alt={glass.name}></img>
            </div>
        )
    }
}

export default GlassItem