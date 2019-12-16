import React, { Component } from "react";
import PropTypes from "prop-types";
class LifeCycleMethodsChild extends Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(prevProp, prevState) {
    return this.props.childColor !== prevProp.childColor;
  }
  componentWillUnmount() {
    console.error("willun mount");
    alert("this component is going to be delted");
  }
  render() {
    console.log("render");
    return (
      <div style={{ backgroundColor: this.props.childColor }}>
        <ul>
          {this.props.childArray.map(e => {
            console.log("iterating");
            return <li key={e}> {e} </li>;
          })}
        </ul>
      </div>
    );
  }
}

LifeCycleMethodsChild.prototypes = {
  childArray: PropTypes.array,
  childColor: PropTypes.string
};

LifeCycleMethodsChild.defaultProps = {
  childArray: [1, 2, 3],
  childColor: "white"
};

export default LifeCycleMethodsChild;
