import "./App.css";
import React from "react";
import Note from "./Note";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: "",
      notes: [],
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
    let newSt = this.state;
    newSt.notes.push({
      txt: this.state.txt,
    });
    this.setState(newSt);
  }
  render() {
    let list = this.state.notes.map((el, id) => <Note txt={el.txt} key={id} />);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input type="text" id="nam" onChange={this.addTxt} />
        <br />
        <button onClick={this.addNote} className="button-33" role="button">
          Add
        </button>
        <br />
        <table id="table">
          <thead>
            <tr>
              <th>Text</th>
              <th>Time and Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
