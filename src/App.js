import React, { Component } from 'react';


class App extends Component {

  fetchNews = () => {
    const google_api_key = process.env.REACT_APP_GOOGLE_API_KEY

    const url = 'https://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            `apiKey=${google_api_key}`;

    fetch(url).then(res => res.json()).then(json => this.renderNews(json))
  }

  componentDidMount() {
    this.fetchNews()
  }

  renderNews = (news) => {
    console.log(news.articles)
  }

  render() {

    return (
      <div>

      </div>
    );
  }
}

export default App;
