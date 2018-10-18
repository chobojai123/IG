import React, { Component } from 'react';

class Start extends Component {
  render() {
    return (
      <div style={{ margin: '0 0 50px 355px' }}>
        <button
          className="btn"
          style={{ fontSize: 20, backgroundColor: 'lightgreen', color: 'black', cursor: 'pointer' }}
          disabled={!this.props.value}
          onClick={this.props.startCountDown}
        >
          Start the clock!
        </button>
      </div>
    );
  }
}

export default Start;
