import React, { Component } from 'react';
import NewsCollection from './NewsCollection';
import DesktopContainer from '../components/Header';

export default class GoogleNews extends Component {

  state = {
    news : [],
    selectedCountry: 'us'
  }

  fetchNews = () => {
    const google_api_key = process.env.REACT_APP_GOOGLE_API_KEY

    const url = 'https://newsapi.org/v2/top-headlines?' +
            `country=${this.state.selectedCountry}&` +
            `apiKey=${google_api_key}`;

    fetch(url)
    .then(res => res.json())
    .then(json => this.setState({news: json.articles}))
  }

  componentDidMount() {
    this.fetchNews()
  }

  setCountry = value => {
    this.setState({ selectedCountry: value }, () => this.fetchNews());
  };

  render() {
    return (
      <React.Fragment>
        <DesktopContainer 
          selectedCountry={this.selectedCountry} 
          setCountry={this.setCountry}
        />
        <NewsCollection 
          news={this.state.news} 
          selectedCountry={this.state.selectedCountry}
          setCountry={this.setCountry}
        />
      </React.Fragment>
    );
  }
}

