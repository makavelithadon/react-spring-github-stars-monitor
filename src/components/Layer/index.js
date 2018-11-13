import React, { Component } from "react";
import LayerProvider from "./Provider";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

export default class Layer extends Component {
  static Modal = Modal;
  static Backdrop = Backdrop;
  render() {
    return <LayerProvider {...this.props}>{this.props.children}</LayerProvider>;
  }
}
