import React, { Component, Fragment } from "react";
import Dashboard_Listing from "./DashBoard_listing";
import Dashboard_Search from "./DashBoard_search";
import Axios from "axios";
import { backendAPIBooks, bookEditPath } from "../utils/constants";
import { getBooksList } from "../redux/actions";
import { connect } from "react-redux";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBooks: []
    };
    this.handleDelete = this.handleDelete.bind(this);
    // this.handleEdit = this.handleEdit.bind(this)
  }

  componentDidMount() {
    this.props.getBooksList();
  }
  // handleEdit(book) {
  //   const { id } = book;

  //   this.props.history.push(bookEditPath + "/" + id);
  // }
  async handleDelete(book) {
    try {
      let response = await Axios.delete(backendAPIBooks + "/" + book.id);
      this.getBooksList();

      console.log(response);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(this.props);
    const { allBooks } = this.state;
    return (
      <Fragment>
        <h1>Dashboard</h1>
        <Dashboard_Search {...this.props} />
        <Dashboard_Listing
          handleDelete={this.handleDelete}
          // handleEdit={this.handleEdit}
          allBooks={allBooks}
        />
      </Fragment>
    );
  }
}

export default connect(null, { getBooksList })(Dashboard);
