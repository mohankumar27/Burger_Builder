import React, { Component } from "react";
import classes from "./Modal.module.css";
import { Aux } from "../../../hoc/Wrapper";
import BackDrop from "../BackDrop/BackDrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.showAnim !== this.props.showAnim ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <Aux>
        <BackDrop
          showAnim={this.props.showAnim}
          clicked={this.props.modalClosed}
        />
        <div
          className={classes.modal}
          style={{
            transform: this.props.showAnim
              ? "translateY(0)"
              : "translateY(-100vh)",
            opacity: this.props.showAnim ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
