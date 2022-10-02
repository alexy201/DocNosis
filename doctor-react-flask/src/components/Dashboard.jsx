import React, { Component } from 'react'
import { card } from '../styles.js'
import { docName, docDate } from '../styles.js'

export default class DocCard extends Component {
    render() {
        return (
            <div style={{ ...card, }}>
                <h1 style={{ ...docName }}>Doctor Name</h1>
                <h2 style={{ ...docDate }}>Jun 11, 2022. 09:50:23</h2>
            </div>
        )
    }
}
