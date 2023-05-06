import React, { Component } from "react";

const style = {
  padding: "2em",
  textAlign: "center",
  marginBottom: "10px",
  backgroundColor: "yellowgreen",
};

export class ClassComponent1 extends React.Component {
  render() {
    return (
      <div style={style}>
        <h3>Hello Class Component</h3>
      </div>
    );
  }
}
export class ClassComponent2 extends Component {
  render() {
    console.log(this.props);
    return (
      <div style={style}>
        <h3>{this.props.title}</h3>
        <p>{this.props.message}</p>
        {this.props.children}
      </div>
    );
  }
}
