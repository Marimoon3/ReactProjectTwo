import React from "react";

class FirstLast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  onChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "black" }}>
          {this.state.input
            .split("")
            .slice(1, -1)
            .join("")}
        </h1>
        <form onSubmit={this.onSubmit}>
          <input
            style={{
              outline: "none",
              background: "#white",
              color: "black"
            }}
            placeholder="enter text"
            type="text"
            value={this.state.input}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}

export default FirstLast;
