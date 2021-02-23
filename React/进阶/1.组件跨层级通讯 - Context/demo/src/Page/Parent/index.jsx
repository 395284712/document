import React, { Component } from 'react'
import Child from '../Child'
import ChildHook from '../ChildHook'

export default class Parent extends Component {
    render () {
        return <div>
            <h2>Parent</h2> 
            <Child />
            <ChildHook />
        </div>
    }
}