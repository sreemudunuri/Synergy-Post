import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import NewsCard from '../components/NewsCard';

export default class NewsCollection extends Component{
  sortNewsWithImages = () => {
    return this.props.news.sort((a,b) => (a.urlToImage===null)-(b.urlToImage===null) || +(a>b)||-(a<b))
  }

  render(){
    console.log(this.sortNewsWithImages())
    return(
      <div className="grid-container">
        <Grid> 
          <NewsCard news={this.sortNewsWithImages()}/>
        </Grid>
      </div>
    )
  }
}

  


