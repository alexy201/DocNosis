import React, { Component } from 'react'
import { image } from '../styles.js'
import DocCard from './DocCard.jsx'
import Divider from './Divider.jsx'
// import im from '../../public/favicon.ico'


export default class Row extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', float: 'left' }}>
                <img style={{ ...image }} src="<TODO READ FROM FLASK>"></img>
                {/* <img style={{ ...image }} src={{ image }}></img> */}
                {/* <img style={{ ...image }} src={{ im }}></img> */}

                <DocCard />
                <Divider />



            </div>
        )
    }
}