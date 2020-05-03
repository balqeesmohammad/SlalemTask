import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import Header from "./layout/Header";
import Dashboard from "./playlist/Dashboard";
//connect react with redux
import { Provider } from "react-redux";
import store from "../store";
// import { render } from "react-dom";
// import { Provider } from "react-redux";
// import store from "../store";



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <div className="container">
            <Dashboard />
          </div>
        </Fragment>    
      </Provider>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));