import React, { createContext, Component } from "react";
const LayerContext = createContext({ open: false });
const { Provider, Consumer } = LayerContext;

export default class LayerProvider extends Component {
  state = {
    open: this.props.open
  };

  static defaultProps = {
    open: false
  };

  onOpen = () => this.setState({ open: true });

  onClose = () => this.setState({ open: false });

  render() {
    const { open } = this.state;
    const { children } = this.props;
    const { onOpen, onClose } = this;
    return (
      <Provider
        value={{
          open,
          onOpen,
          onClose
        }}
      >
        {children}
      </Provider>
    );
  }
}

export { Consumer };
