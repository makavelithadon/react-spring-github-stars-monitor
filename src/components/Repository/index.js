import React, { Component } from "react";
import RepositoryProvider from "./Provider";
import Name from "./Name";
import Description from "./Description";
// import Author from "./Author";
import Stars from "./Stars";
import Link from "./Link";
import RefreshButton from "./RefreshButton";

export default class Layer extends Component {
  static Name = Name;
  static Stars = Stars;
  static Description = Description;
  static Link = Link;
  static RefreshButton = RefreshButton;
  /* static Author = Author; */
  render() {
    return <RepositoryProvider {...this.props}>{this.props.children}</RepositoryProvider>;
  }
}
