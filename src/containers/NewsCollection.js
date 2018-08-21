import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import NewsCard from '../components/NewsCard';
import Filter from '../components/Filter'
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
    console.log(this.newsArrWithNoImages())
    return(
      <div>
        <div>
          <Filter 
            selectedCountry={this.props.selectedCountry}
            setCountry={this.props.setCountry}
          />
        </div>
        <div className="grid-container" style={{display:'flex'}}>
          <Grid> 
            <NewsCard 
              withImages={this.newsArrWithImages()}
              withNoImages={this.newsArrWithNoImages()}
            />
          </Grid>
        </div>
      </div>
    )
  }
}

  


