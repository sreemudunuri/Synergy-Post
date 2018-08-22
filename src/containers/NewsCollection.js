import React, { Component } from 'react';
import NewsCard from '../components/NewsCard';

export default class NewsCollection extends Component{
  sortNewsWithImages = () => {
    return this.props.news.sort((a,b) => (a.urlToImage===null)-(b.urlToImage===null) || +(a>b)||-(a<b))
  }

  newsArrWithImages = () => {
    return this.props.news.filter(article => article.urlToImage !== null)
  }

  newsArrWithNoImages = () => {
    return this.props.news.filter(article => article.urlToImage === null)
  }

  render(){
    return(
      <div>

        <div className="news-container">
          <NewsCard
            className="news-container"
            withImages={this.newsArrWithImages()}
            withNoImages={this.newsArrWithNoImages()}
            userId={this.props.userId}
          />
        </div>
      </div>
    )
  }
}
