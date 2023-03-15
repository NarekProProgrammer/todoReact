import React from "react";
export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: this.props.txt,
      done: false,
      deleted: false,
      saved: true,
    };
  }
  txtClick = this.txtClick.bind(this);
  delete = this.delete.bind(this);
  edit = this.edit.bind(this);
  edited = this.edited.bind(this);
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
  edit() {
    if (this.state.saved) {
      let nS = this.state;
      nS.saved = false;
      this.setState(nS);
    } else {
      let nS = this.state;
      nS.saved = true;
      this.setState(nS);
    }
  }
  edited(e) {
    let nS = this.state;
    nS.txt = e.target.value;
    this.setState(nS);
  }
  render() {
    if (this.state.deleted) {
      return;
    }
    if (this.state.done && this.props.type === "unmarked") {
      return;
    }
    if (this.state.done === false && this.props.type === "marked") {
      return;
    }
    let d = new Date();
    return (
      <tr>
        {this.state.saved ? (
          <th
            onClick={this.txtClick}
            style={
              this.state.done
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            {this.state.txt}
          </th>
        ) : (
          <th>
            <input
              type="text"
              placeholder={this.state.txt}
              onChange={this.edited}
            ></input>
          </th>
        )}
        <th>
          {d.getDay()}/{d.getHours()}:{d.getMinutes()}
        </th>
        <th>
          <button className="button-33" role="button" onClick={this.delete}>
            X
          </button>
        </th>
        <th>
          <button className="button-33" role="button" onClick={this.edit}>
            {this.state.saved ? "Edit" : "Save"}
          </button>
        </th>
      </tr>
    );
  }
}
