import React, { Fragment, Component } from "react";
import Navbar from "./components/NavBar";
import Dashboard from "./components/Dashboard";

import { Route, Switch } from "react-router-dom";
import AddBook from "./components/AddBook";
import { bookEditPath, bookAddPath } from "./utils/constants";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path={bookAddPath} component={AddBook} />
          <Route path={bookEditPath + "/:id"} component={AddBook} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
