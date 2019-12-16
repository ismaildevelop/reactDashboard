import React, { Component } from "react";
import LifeCycleMethodsChild from "./LifeCycleMethodsChild";

class LifeCycleMethods extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      count: 0,
      child1Array: [1, 6, 3, 4, 5],
      child2Array: [6, 3, 5, 7, 2],
      child3Array: [3, 4, 6, 8, 9],
      child1Color: "red",
      child2Color: "blue",
      child3Color: "yellow",
      defaultColors: ["red", "blue", "brown", "yellow", "white", "pink"]
    };
    this.incrementCount = this.incrementCount.bind(this);
    this.changeChild1Color = this.changeChild1Color.bind(this);
    this.changeChild2Color = this.changeChild2Color.bind(this);
    this.changeChild3Color = this.changeChild3Color.bind(this);
  }
  //   static getDerivedStateFromProps() {
  //     console.log("getDerivedStateFromProps");
  //     return {};
  //   }
  incrementCount() {
    this.setState({ count: 1 + this.state.count });
  }

  changeChild1Color() {
    this.setState({
      child1Color: this.state.defaultColors[
        Math.floor(Math.random() * this.state.defaultColors.length)
      ],
      child2Color: this.state.defaultColors[
        Math.floor(Math.random() * this.state.defaultColors.length)
      ],
      child3Color: this.state.defaultColors[
        Math.floor(Math.random() * this.state.defaultColors.length)
      ]
    });
  }

  changeChild2Color() {
    this.setState({
      child2Color: this.state.defaultColors[
        Math.floor(Math.random() * this.state.defaultColors.length)
      ]
    });
  }

  changeChild3Color() {
    this.setState({
      child3Color: this.state.defaultColors[
        Math.floor(Math.random() * this.state.defaultColors.length)
      ]
    });
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    const {
      child1Array,
      child2Array,
      child3Array,
      child1Color,
      child2Color,
      child3Color
    } = this.state;
    return (
      <div>
        <button onClick={this.incrementCount}>Change count</button>
        <h1>Life cycle methods - {this.state.count} </h1>
        {this.state.count % 2 !== 0 && (
          <div>
            <button onClick={this.changeChild1Color}>Change for child 1</button>
            <LifeCycleMethodsChild
              childArray={child1Array}
              childColor={child1Color}
            />
          </div>
        )}
      </div>
    );
  }
}

export default LifeCycleMethods;
