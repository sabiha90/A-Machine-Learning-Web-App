import React from "react";
import axios, { post } from "axios";

class Upload extends React.Component {
  render() {
    const function_name = this.props.function;
    const button_name = this.props.button_name;
    return (
      <form
        onSubmit={this.formSubmit}
        action={`http://localhost:5000/${function_name}`}
        method="POST"
        encType="multipart/form-data"
        className="md-form"
      >
        <input type="file" name="file" />
        <input
          type="submit"
          value={button_name}
          className="btn btn-secondary btn-sm"
        />
      </form>
    );
  }
}

export default Upload;
