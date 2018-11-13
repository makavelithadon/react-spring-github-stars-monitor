import React, { createContext, Component } from "react";
const RepositoryContext = createContext({ open: false });
const { Provider, Consumer } = RepositoryContext;

export default class RepositoryProvider extends Component {
  state = {
    repository: this.props.data,
    isFetching: false
  };

  static defaultProps = {
    repository: {}
  };

  refresh = async () => {
    this.setState({ isFetching: true, })
    try {
      const response = await window.fetch(this.state.repository.url, {cache: "no-store"});
      const repository = await response.json();
      this.setState({ repository, isFetching: false });
    } catch (e) {
      console.error('Oops.');
    }
  }

  render() {
    const {
      repository: {
        name,
        stargazers_count: stars,
        description,
        owner: author,
        html_url: link
      },
      isFetching,
    } = this.state;
    const { refresh } = this;
    return (
      <Provider
        value={{
          name,
          stars,
          description,
          author,
          link,
          isFetching,
          refresh,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer };
