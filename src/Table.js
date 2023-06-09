import "./App.css";
import React from "react";
import Note from "./Note";

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: this.props.list,
    };
  }
  render() {
    let list;
    switch (this.props.type) {
      case "all":
        list = this.state.notes.map((el, id) => (
          <Note txt={el.txt} key={id} type={this.props.type} />
        ));
        break;
      case "marked":
        list = this.state.notes.filter((el) => el.done);
        list = this.state.notes.map((el, id) => (
          <Note txt={el.txt} key={id} type={this.props.type} />
        ));
        break;
      case "unmarked":
        list = this.state.notes.filter((el) => !el.done);
        list = this.state.notes.map((el, id) => (
          <Note txt={el.txt} key={id} type={this.props.type} />
        ));
        break;
    }
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        id="div0"
      >
        <table id="table">
          <thead>
            <tr>
              <th>Text</th>
              <th>Time and Date</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </table>
      </div>
    );
  }
}
