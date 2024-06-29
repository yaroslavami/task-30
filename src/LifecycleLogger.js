import React, { Component } from 'react';
import './LifecycleLogger.css';

class LifecycleLogger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      log: []
    };
    this.increment = this.increment.bind(this);
    this.addLog = this.addLog.bind(this);
  }

  addLog(message) {
    this.setState((prevState) => ({
      log: [...prevState.log, message]
    }));
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }

  componentDidMount() {
    this.addLog('componentDidMount');
  }

  componentDidUpdate() {
    this.addLog('componentDidUpdate');
  }

  componentWillUnmount() {
    this.addLog('componentWillUnmount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.addLog('shouldComponentUpdate');
    return true;
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>Лічильник: {this.state.count}</button>
        <div className="log-console">
          {this.state.log.map((message, index) => (
            <React.Fragment key={index}>
              <p>{message}</p>
              <hr />
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default LifecycleLogger;
