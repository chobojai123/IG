import React, { Component } from 'react';

class TimerInput extends Component {
  render() {
    return (
      <div>
        <h3 style={{ display: 'inline-block' }}>Time for Count Down</h3>
        <input
          style={{ display: 'inline-block', marginLeft: '30px', height: 30, fontSize: 20 }}
          type="number"
          value={this.props.value}
          onChange={this.props.handleChange}
          required
        />
      </div>
    );
  }
}

export default TimerInput;
