import React, { Component } from "react";
import "./App.css";
import Mycustomcomponent from "./MycustomComponent";

const temp = "temp"; //Date.now()
// function App() {
//   const functemp = new Date();
//   return (
//     <div className="App">
//       <h1>welcome to react js training</h1>
//       {functemp.toString()}
//       <Mycustomcomponent />
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 100,
      k1: "v1"
    };
    this.incrementCounter = this.incrementCounter.bind(this);
  }
  incrementCounter() {
    this.setState({ count: 1 + this.state.count });
  }
  render() {
    const { k1, count } = this.state;
    return (
      <div>
        <Mycustomcomponent myProp="yyy" k1={k1} count={count} />
        <button onClick={this.incrementCounter}> click to increment</button>
      </div>
    );
  }
}

export default App;
