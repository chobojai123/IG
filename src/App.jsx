import React, { Component } from 'react';
import Timer from './Timer.jsx';
import TimerInput from './TimerInput.jsx';
import Start from './Start.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      seconds: '00',
    };

    this.handleChange = this.handleChange.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  tick() {
    const min = Math.floor(this.secondsRemaining / 60);
    const sec = this.secondsRemaining - min * 60;

    this.setState({
      value: min,
      seconds: sec,
    });

    if (sec < 10) this.setState({ seconds: '0' + this.state.seconds });
    if (min < 10) this.setState({ value: '0' + min });
    if ((min === 0) & (sec === 0)) clearInterval(this.intervalHandle);

    this.secondsRemaining--;
  }

  startCountDown() {
    const { value } = this.state;

    this.intervalHandle = setInterval(this.tick, 1000);
    this.secondsRemaining = value * 60;

    document.querySelector('.btn').style['pointer-events'] = 'none';
  }

  render() {
    return (
      <div className="App">
        <TimerInput value={this.state.value} handleChange={this.handleChange} />

        <Start startCountDown={this.startCountDown} value={this.state.value} />

        <Timer value={this.state.value} seconds={this.state.seconds} />
      </div>
    );
  }
}

export default App;
