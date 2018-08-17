import React, { Component } from 'react';
import NewsCollection from './NewsCollection';

export default class GoogleNews extends Component {

  state = {
    news : []
  }

  fetchNews = () => {
    const google_api_key = process.env.REACT_APP_GOOGLE_API_KEY

    const url = 'https://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            `apiKey=${google_api_key}`;

    fetch(url).then(res => res.json()).then(json => this.setState({news: json.articles}))
  }

  componentDidMount() {
    this.fetchNews()
  }

  render() {
    return (
      <div>
        <NewsCollection news={this.state.news}/>
      </div>
    );
  }
}

