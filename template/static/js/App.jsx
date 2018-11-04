import React, { Component } from "react";
import Upload from "./Upload";
import Navbar from "./Navbar";
import Bootstrap from "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      button_name: "Upload",
      function_name: "upload"
    };
  }

  render() {
    return (
      <div>
        <Navbar />
        <div>
          <Upload
            button_name={this.state.button_name}
            function={this.state.function_name}
          />
        </div>
      </div>
    );
  }
}
export default App;
