import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    searchInput: ""
  };

  handleChange = event => {
    this.setState({ searchInput: event.target.value }, () =>
      console.log(this.state)
    );
  };

  render() {
    return (
      <form
        onSubmit={event =>
          this.props.setSearchTerm(event, this.state.searchInput)
        }
      >
        <input
          value={this.state.searchInput}
          onChange={event => this.handleChange(event)}
          type="text"
          placeholder="Search"
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
