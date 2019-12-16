import React, { Component, Fragment } from "react";
import { Table, Button } from "reactstrap";
import { bookEditPath } from "../utils/constants";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Dashboard_Listing extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    // this.handleEdit = this.handleEdit.bind(this);
  }
  // handleEdit(book) {
  //   this.props.handleEdit(book);
  // }
  handleDelete(book) {
    let confirmFlag = window.confirm("Are you sure to delete?");
    if (confirmFlag) {
      this.props.handleDelete(book);
    }
  }
  render() {
    console.error(this.props);
    const { allBooks } = this.props;
    return (
      <Fragment>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allBooks
              .sort((a, b) => b.id - a.id)
              .map(book => {
                return (
                  <Fragment key={book.id}>
                    <tr>
                      <th scope="row">{book.id}</th>
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td> {book.genre}</td>
                      <td>{parseInt(book.price).toFixed(2)}$</td>
                      <td>
                        <Link to={bookEditPath + "/" + book.id}>
                          <Button
                            // onClick={() => this.handleEdit(book)}
                            color="info"
                          >
                            Edit
                          </Button>
                        </Link>
                        {`  `}
                        <Button
                          onClick={() => this.handleDelete(book)}
                          color="danger"
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  </Fragment>
                );
              })}
          </tbody>
        </Table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { allBooks: state.listingReducer };
};

export default connect(mapStateToProps, null)(Dashboard_Listing);
