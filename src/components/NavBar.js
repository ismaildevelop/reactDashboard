import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

const MyNavBar = props => {
  const history = useHistory();
  const handleClick = e => {
    e.preventDefault();
    history.push("/");
  };
  console.log("navbar props", props);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand onClick={handleClick} href="/">
          Books inventory - Api integration - {props.allBooks.length}
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

const mapStateToProps = state => {
  return { allBooks: state.listingReducer };
};

export default connect(mapStateToProps, null)(MyNavBar);
