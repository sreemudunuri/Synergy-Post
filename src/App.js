import React, { Component } from "react";
import NewsContainer from "./NewsContainer";

class App extends Component {
  state = {
    articles: []
  };

  fetchNews = () => {
    const google_api_key = process.env.REACT_APP_GOOGLE_API_KEY;

    const url =
      "https://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      `apiKey=${google_api_key}`;

    fetch(url)
      .then(res => res.json())
      .then(json => this.setState({ articles: json.articles }));
  };

  componentDidMount() {
    this.fetchNews();
  }

  // renderNews = news => {
  //   return news.articles;
  // };

  render() {
    return (
      <div>
        <NewsContainer articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
