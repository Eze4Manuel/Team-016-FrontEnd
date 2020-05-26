import React from "react";
import ReactDOM from "react-dom";


const startApp = async () => {
  class HelloMessage extends React.Component {
    render() {
      return <div>Hello {this.props.name}</div>;
    }
  }
  ReactDOM.render(<HelloMessage name="Front End Team" />, document.getElementById("app"));
};

document.addEventListener('DOMContentLoaded', startApp);