import React from "react";
import PropTypes from "prop-types";

function Mycustomcomponent(props) {
  console.log(props);
  const { k1, count } = props;
  return (
    <h1>
      my custom class component {k1} - {count}
    </h1>
  );
}

Mycustomcomponent.propTypes = {
  count: PropTypes.number.isRequired
};

Mycustomcomponent.defaultProps = {
  count: 10
};

export default Mycustomcomponent;
