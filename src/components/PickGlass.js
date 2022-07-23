import React, { Component } from 'react'
import images from '../image'
import GlassItem from './GlassItem';

export class PickGlass extends Component {
    state = {
        pickedGlass: null,
        key: null
    }
    handlePickGlass = (e,glass) => {
        document.getElementById('info').style.display = 'block';
        this.setState({
            pickedGlass: glass,
            key: true
        });

        if (this.state.key !== null && document.getElementById(this.state.key) !== null) {
            document.getElementById(this.state.key).classList.remove('active');
            this.setState({key: glass.id});
            document.getElementById(e.target.id).classList.add('active');
        } else {
            this.setState({key: glass.id});
            document.getElementById(glass.id).classList.add('active')
        }
    }

    render() {
        const glasses = [
            {
                "id": 1,
                "price": 30,
                "name": "GUCCI G8850U",
                "url": "v1",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 2,
                "price": 50,
                "name": "GUCCI G8759H",
                "url": "v2",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 3,
                "price": 30,
                "name": "DIOR D6700HQ",
                "url": "v3",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 4,
                "price": 70,
                "name": "DIOR D6005U",
                "url": "v4",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 5,
                "price": 40,
                "name": "PRADA P8750",
                "url": "v5",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 6,
                "price": 60,
                "name": "PRADA P9700",
                "url": "v6",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 7,
                "price": 80,
                "name": "FENDI F8750",
                "url": "v7",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 8,
                "price": 100,
                "name": "FENDI F8500",
                "url": "v8",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
            {
                "id": 9,
                "price": 60,
                "name": "FENDI F4300",
                "url": "v9",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            }
        ];

        return (
            <div className='container' style={{position:'relative', zIndex:'100'}}>
                <div className='row mt-5'>
                    <div className='col-6 d-flex flex-column align-items-center ' style={{ position: 'relative'}}>
                        <img style={{ width: '45%' }} src={images.Model} alt="" />
                        <div id='info' className='info' style={{ width: '45%', display: 'none' }}>
                            {this.state.pickedGlass == null ? null : <div className='py-1' style={{ background: 'rgba(250,173,20,0.7)', margin: '0 6px' }}>
                                <h2 style={{fontSize:'20px'}}>{this.state.pickedGlass.name}</h2>
                                <p className='px-3 my-1' style={{ textAlign: 'left',fontSize:'14px' }}>{this.state.pickedGlass.desc}</p>
                            </div>}

                        </div>
                        <div className='glassImg' id='glassImg'>
                            {this.state.pickedGlass == null ? null : <img className='p-2' style={{ width: '100%' }} src={require(`../glassesImage/${this.state.pickedGlass.url}.png`)} alt=""></img>}
                        </div>
                    </div>
                    <div className='col-6'>
                        <img style={{ width: '45%' }} src={images.Model} alt="" />
                    </div>
                </div>

                <div className='py-3 mt-5 d-flex flex-wrap justify-content-center' style={{ backgroundColor: 'white' }}>
                    {glasses.map(glass => {
                        return (
                            <GlassItem key={glass.id} onPickGlass={this.handlePickGlass} data={glass}></GlassItem>
                        )
                    })}
                </div>
            </div>
        )
    }
}

// let imageName = glass.url.split('/').slice(-1);
// imageName = imageName[0].split('.').slice(0, 1).toString();

export default PickGlass