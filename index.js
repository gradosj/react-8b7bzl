import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Hello extends Component {
  constructor() {
    super();
    this.state = {
      nombre: 'React',
      apellido: 'Pepe'
    };
  }

  render() {
    return (
      <div>
        <Hello nombre={this.state.nombre} apellido = {this.state.apellido} />
        
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<Hello />, document.getElementById('root'));
