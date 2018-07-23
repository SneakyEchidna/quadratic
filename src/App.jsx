import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { a: 1, b: 0, c: 0, roots: [] };
  coeffChange = ({ target: { name, value } }) => {
    this.setState(
      state => ({
        ...state,
        [name]: value,
      }),
      () =>
        this.setState(state => ({ ...state, roots: this.findSolution(state) })),
    );
  };

  findSolution = ({ a, b, c }) => {
    function precise(x) {
      return Number.parseFloat(x).toPrecision(4);
    }
    const discr = b * b - 4 * a * c;
    let firstRoot;
    let secondRoot;
    if (discr < 0) {
      firstRoot = `${precise((-1 * b) / (2 * a))} + ${precise(
        (Math.sqrt(-discr) / 2) * a,
      )}i`;
      secondRoot = `${precise((-1 * b) / (2 * a))} - ${precise(
        (Math.sqrt(-discr) / 2) * a,
      )}i`;
    } else {
      firstRoot = precise((-1 * b + Math.sqrt(discr)) / (2 * a));
      secondRoot = precise((-1 * b - Math.sqrt(discr)) / (2 * a));
    }

    return [firstRoot, secondRoot];
  };

  render() {
    return (
      <div className="App">
        <div>
          <header className="Quadratic">Input</header>
          <input
            onChange={this.coeffChange}
            name="a"
            type="number"
            defaultValue="1"
          />
          <i>x^2</i>
          <input
            onChange={this.coeffChange}
            name="b"
            type="number"
            defaultValue="0"
          />
          <i>x</i>
          <input
            onChange={this.coeffChange}
            name="c"
            type="number"
            defaultValue="0"
          />
          <i>= 0</i>
        </div>
        <div>
          <header className="output">output</header>
          {this.state.roots[0] !== null ? <i>x={this.state.roots[0]}</i> : ''}
          {this.state.roots[1] !== null ? <i>x={this.state.roots[1]}</i> : ''}
        </div>
      </div>
    );
  }
}

export default App;
