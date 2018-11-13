import React, { Component } from "react";

const withLoading = ({ url, component: C }) => {
  return class WithLoading extends Component {
    state = {
      isLoading: true,
      data: null,
      hasError: false,
      error: null
    };

    componentDidMount = () => this.fetchData();

    fetchData = async () => {
      let finalState = {
        isLoading: false
      };
      try {
        const response = await window.fetch(url, {cache: "no-store"});
        if (!(response.status >= 200 && response.status < 300)) {
          const error = await response.json();
          throw new Error(error.message);
        }
        const data = await response.json();
        finalState = {
          ...finalState,
          data
        };
      } catch (error) {
        finalState = {
          ...finalState,
          hasError: true,
          error
        };
      } finally {
        this.setState(finalState);
      }
    };

    render() {
      const { data, hasError, error } = this.state;
      let render = "Loading...";
      if (data) {
        render = <C {...this.props} data={data}>{this.props.children}</C>;
      } else if (hasError) {
        render = (
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h2>Oops something was wrong.</h2>
            <p>{error.message}</p>
          </div>
        );
      }
      return render;
    }
  };
};

export default withLoading;
