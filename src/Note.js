import React from "react";
export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      deleted: false,
    };
  }
  txtClick = this.txtClick.bind(this);
  delete = this.delete.bind(this);
  txtClick() {
    let newSt = this.state;
    newSt.done = !newSt.done;
    this.setState(newSt);
  }
  delete() {
    let newSt = this.state;
    newSt.deleted = true;
    this.setState(newSt);
  }
  render() {
    if (this.state.deleted) {
      return;
    }
    let d = new Date();
    return (
      <tr>
        <th
          onClick={this.txtClick}
          style={
            this.state.done
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {this.props.txt}
        </th>
        <th>
          {d.getDay()}/{d.getHours()}:{d.getMinutes()}
        </th>
        <th>
          <button className="button-33" role="button" onClick={this.delete}>
            X
          </button>
        </th>
      </tr>
    );
  }
}
