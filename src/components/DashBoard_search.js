import React, { Component, Fragment } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { connect } from "react-redux";
import { GET_ALL_BOOK_LIST } from "../utils/constants";
import { filterBooksList } from "../redux/actions";

class Dashboard_Search extends Component {
  constructor(props) {
    super(props);
    this.handleNewBook = this.handleNewBook.bind(this);
    this.handleInput = this.handleInput.bind(this);
    // this.handleSearchButton = this.handleSearchButton.bind(this);
    this.state = {
      query: ""
    };
  }

  // handleSearchButton(e) {
  //   e.preventDefault();
  //   ;
  // }
  handleInput(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => this.props.filterBooksList(value));
  }
  handleNewBook() {
    this.props.history.push("/add");
  }
  render() {
    const { query } = this.state;
    return (
      <Fragment>
        <Form onSubmit={e => e.preventDefault()} inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label className="mb-2 mr-sm-2 mb-sm-0" for="exampleEmail">
              Search here...
            </Label>
            <Input
              type="text"
              name="query"
              value={query}
              onChange={this.handleInput}
              id="query"
              placeholder="Search here for books"
            />
          </FormGroup>
          <Button
            onClick={() => this.props.filterBooksList(query)}
            className="mb-2 mr-sm-2 mb-sm-0"
          >
            Search
          </Button>
          <Button onClick={this.handleNewBook} className="mb-2 mr-sm-2 mb-sm-0">
            Add new book
          </Button>
        </Form>
      </Fragment>
    );
  }
}

export default connect(null, { filterBooksList })(Dashboard_Search);
