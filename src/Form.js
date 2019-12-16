import React, { Component, Fragment } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        fName: "John",
        lName: "Doe",
        phone: "1234",
        email: "Jogndoe@google.com",
        password: "mypassword",
        description: "description",
        gender: "female",
        department: "MECH",
        skills: ["java", "node"]
      }
    };
    this.handleInputField = this.handleInputField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log(this.state.formData);
    window.location.replace("/submitted");
    console.log("form is submitted");
  }

  handleInputField(e) {
    let { name, value, type, checked } = e.target;
    const { formData } = this.state;
    console.log(name, value, type, checked);
    if (type === "checkbox") {
      let prevValue = formData[name];
      if (checked) {
        prevValue.push(value);
      } else {
        prevValue = prevValue.filter(e => e !== value);
      }

      value = prevValue.filter((e, i) => i === prevValue.indexOf(e));
    }
    this.setState({ formData: { ...this.state.formData, [name]: value } });
  }

  render() {
    // console.log(this.state);
    // console.log(this.state.formData);
    const { formData } = this.state;
    return (
      <Fragment>
        <h1> Controlled Inputs </h1>
        <form onSubmit={this.handleSubmit}>
          Enter First Name :
          <input
            type="text"
            value={formData.fName}
            onChange={this.handleInputField}
            placeholder="enter first name"
            name="fName"
          />
          <div>
            Last name :
            <input
              type="text"
              value={formData.lName}
              onChange={this.handleInputField}
              placeholder="enter last name"
              name="lName"
            />
          </div>
          <div>
            Email :
            <input
              type="text"
              value={formData.email}
              onChange={this.handleInputField}
              placeholder="enter email"
              name="email"
            />
          </div>
          <div>
            phone :
            <input
              type="number"
              value={formData.phone}
              onChange={this.handleInputField}
              placeholder="enter phone"
              name="phone"
            />
          </div>
          <div>
            password :
            <input
              type="password"
              value={formData.password}
              onChange={this.handleInputField}
              placeholder="enter password"
              name="password"
            />
          </div>
          <div>
            Description :
            <input
              type="textarea"
              value={formData.description}
              onChange={this.handleInputField}
              placeholder="enter text area"
              name="description"
            />
          </div>
          <div>
            male :
            <input
              value="male"
              type="radio"
              defaultChecked={formData.gender === "male"}
              onChange={this.handleInputField}
              name="gender"
            />
          </div>
          <div>
            female :
            <input
              type="radio"
              defaultChecked={formData.gender === "female"}
              value="female"
              onChange={this.handleInputField}
              name="gender"
            />
          </div>
          <div>
            <select
              value={formData.department}
              name="department"
              onChange={this.handleInputField}
            >
              <option>ECE</option>
              <option>MECH</option>
              <option>CIVIL</option>
            </select>
          </div>
          <div>
            <input
              type="checkbox"
              name="skills"
              value="react"
              onChange={this.handleInputField}
              checked={formData.skills.includes("react")}
            />
            react
          </div>
          <div>
            <input
              type="checkbox"
              name="skills"
              value="node"
              onChange={this.handleInputField}
              checked={formData.skills.includes("node")}
            />
            node
          </div>
          <div>
            <input
              type="checkbox"
              name="skills"
              value="java"
              onChange={this.handleInputField}
              checked={formData.skills.includes("java")}
            />
            java
          </div>
          <div>
            <input
              type="checkbox"
              name="skills"
              value="javascript"
              onChange={this.handleInputField}
              checked={formData.skills.includes("javascript")}
            />
            javascript
          </div>
          <div>
            <button type="submit">Submit this form</button>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default App;
