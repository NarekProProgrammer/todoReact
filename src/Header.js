import "./App.css";
import React from "react";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: "",
    };
  }
  addTxt = this.addTxt.bind(this);
  addNote = this.addNote.bind(this);
  addTxt(e) {
    let newSt = this.state;
    newSt.txt = e.target.value;
    this.setState(newSt);
  }
  addNote() {
    this.props.add(this.state.txt);
  }
  render() {
    return (
      <div id="div1" style={{ padding: "10px" }}>
        <h1>Notes</h1>
        <input type="text" onChange={this.addTxt} />
        <br />
        <br />
        <button onClick={this.addNote} className="button-33" role="button">
          Add
        </button>
      </div>
    );
  }
}
