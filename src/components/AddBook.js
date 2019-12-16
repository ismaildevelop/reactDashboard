import React, { Component, Fragment } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Axios from "axios";
import { backendAPIBooks } from "../utils/constants";

class AddBook extends Component {
  constructor(props) {
    super(props);
    const {
      match: { params }
    } = this.props;
    this.state = {
      formData: {
        title: "",
        author: "",
        genre: "",
        price: ""
      },
      editId: params.id
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    const { name, value } = e.target;
    const { formData } = this.state;
    this.setState({ formData: { ...formData, [name]: value } });
  }

  componentDidMount() {
    this.fetchSingleBook(this.state.editId);
  }

  async fetchSingleBook() {
    const { editId } = this.state;
    try {
      const apiconfig = {
        url: backendAPIBooks + "/" + editId,
        method: "GET"
      };
      const response = await Axios(apiconfig);
      this.setState({ formData: { ...response.data } });
    } catch (error) {
      if (error.response.status === 404) {
        alert(error.response.statusText);
        this.props.history.push("/");
      }
    }
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { formData, editId } = this.state;
    try {
      let config = {
        method: "POST",
        url: backendAPIBooks,
        data: formData
      };

      if (editId) {
        config = {
          method: "PUT",
          url: backendAPIBooks + "/" + formData.id,
          data: formData
        };
      }

      const response = await Axios(config);
      alert(`data ${editId ? "updated" : "created"} successfully`);

      this.props.history.push("/");

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {
      formData: { title, author, genre, price },
      editId
    } = this.state;
    return (
      <Fragment>
        <h3>{editId ? "Edit" : "Add"} Book</h3>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              type="text"
              required
              name="title"
              id="title"
              value={title}
              onChange={this.handleInput}
              placeholder="enter title"
            />
          </FormGroup>
          <FormGroup>
            <Label for="author">Author</Label>
            <Input
              type="text"
              required
              name="author"
              id="author"
              value={author}
              onChange={this.handleInput}
              placeholder="enter author"
            />
          </FormGroup>
          <FormGroup>
            <Label for="genre">Genre</Label>
            <Input
              type="text"
              name="genre"
              value={genre}
              required
              onChange={this.handleInput}
              id="genre"
              placeholder="enter genre"
            />
          </FormGroup>
          <FormGroup>
            <Label for="price">Price</Label>
            <Input
              type="number"
              name="price"
              value={price}
              onChange={this.handleInput}
              id="price"
              required
              placeholder="enter price"
            />
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </Fragment>
    );
  }
}

export default AddBook;
