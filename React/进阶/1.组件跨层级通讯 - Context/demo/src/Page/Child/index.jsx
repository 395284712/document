import React, { Component } from 'react'
import Context from '../../Context'

export default class Child extends Component {

    static contextType = Context

    render () {
        return <div>
            <h1>class child: {this.context}</h1>
        </div>
    }
}