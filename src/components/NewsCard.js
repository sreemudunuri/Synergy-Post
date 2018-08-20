import React from 'react';
import { Grid } from 'semantic-ui-react'
import SingleCard from './SingleCard';

const NewsCard = ({news}) => (
  <React.Fragment>
    {news.map( article => 
      <Grid.Column key={article.title} mobile={16} tablet={8} computer={4}>
        <SingleCard key={article.title} article={article}/>
      </Grid.Column>
    )}
  </React.Fragment>
)

export default NewsCard;
