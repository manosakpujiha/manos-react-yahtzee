import React, { Component } from 'react';
import Die from './Die';
import './Dice.css';

class Dice extends Component {
  render() {
    return <div className="Dice">
      {this.props.dice.map((d, idx) => {
        return (<Die toggleLocked={this.props.toggleLocked}
            val={d}
            locked={this.props.locked[idx]}
            idx={idx}
            key={idx} />)
      }
      )}
    </div>
  }
}

export default Dice;