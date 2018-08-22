import React, { Component } from 'react';
import NewsCollection from './NewsCollection';
import DesktopContainer from '../components/Header';

export default class GoogleNews extends Component {

  constructor (props) {
    super(props)
    this.state = {
      news : [],
      selectedCountry: 'us',
      userId: null,
    }
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

    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://localhost:3000/api/v1/users",
      "method": "GET",
      "headers": {
        "Authorization": localStorage.getItem('token'),
        "Cache-Control": "no-cache",
      }
    }

    fetch('http://localhost:3000/api/v1/users', settings)
    .then(res => res.json())
    .then(user =>
      this.setState({
        userId: user.id
      })
    )

  }

  setCountry = value => {
    this.setState({ selectedCountry: value }, () => this.fetchNews());
  };

  render() {
    return (
      <React.Fragment>
        <DesktopContainer changeRoute={this.props.history}
          selectedCountry={this.selectedCountry}
          setCountry={this.setCountry}

        />
        <NewsCollection
          news={this.state.news}
          selectedCountry={this.state.selectedCountry}
          setCountry={this.setCountry}
          userId={this.state.userId}
        />
      </React.Fragment>
    );
  }
}
