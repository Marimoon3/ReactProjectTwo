import React from "react";

class RevStr extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      rev: ""
    };
  }

  onChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      rev: this.state.input
        .split("")
        .reverse()
        .join(""),
      input: ""
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "black" }}>{this.state.rev}</h1>
        <form onSubmit={this.onSubmit}>
          <input
            style={{
              outline: "none",
              color: "black"
            }}
            placeholder="enter string"
            type="text"
            value={this.state.input}
            onChange={this.onChange}
          />
          <br />
          <button
            type="submit"
            style={{
              marginTop: "10px",
              color: "white"
            }}
          >
            Reverse
          </button>
        </form>
      </div>
    );
  }
}

export default RevStr;
