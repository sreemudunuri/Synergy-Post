import React, { Component } from "react";
import NewsCollection from "./NewsCollection";

export default class GoogleNews extends Component {
  state = {
    news: [],
    selectedCountry: "us",
    searchTerm: ""
  };

  fetchNews = () => {
    const google_api_key = process.env.REACT_APP_GOOGLE_API_KEY;
    let url = null;
    if (this.state.searchTerm.length > 0) {
      url =
        "https://newsapi.org/v2/everything?" +
        `q=${this.state.searchTerm}&` +
        `apiKey=${google_api_key}`;
    } else {
      url =
        "https://newsapi.org/v2/top-headlines?" +
        `country=${this.state.selectedCountry}&` +
        `apiKey=${google_api_key}`;
    }

    console.log(url);
    console.log(this.state);

    fetch(url)
      .then(res => res.json())
      .then(json => this.setState({ news: json.articles }));
  };

  componentDidMount() {
    this.fetchNews();
  }

  setCountry = value => {
    this.setState({ selectedCountry: value }, () => this.fetchNews());
  };

  setSearchTerm = (event, value) => {
    event.preventDefault();
    console.log(value);
    this.setState({ searchTerm: value }, () => this.fetchNews());
  };

  render() {
    return (
      <div>
        <NewsCollection
          news={this.state.news}
          selectedCountry={this.state.selectedCountry}
          setCountry={this.setCountry}
          setSearchTerm={this.setSearchTerm}
        />
      </div>
    );
  }
}
