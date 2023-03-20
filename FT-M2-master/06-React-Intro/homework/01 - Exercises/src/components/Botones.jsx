import React, { Component } from 'react'

export default class Botones extends Component {
    constructor(props){
        super(props)
    }
  render() {
    const prop1 = this.props.props.m1;
    const prop2 = this.props.props.m2;
    return (
      <div>
        <button onClick={() => alert(prop1)}>Módulo 1</button>
        <button onClick={() => alert(prop2)}>Módulo 2</button>
      </div>
    )
  }
}
