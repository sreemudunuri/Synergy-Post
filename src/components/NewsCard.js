import React from 'react';
import { Grid } from 'semantic-ui-react'
import SingleCard from './SingleCard';

const NewsCard = ({withImages, withNoImages}) => (
  <React.Fragment>
    <Grid>
      <Grid.Row>
      {withImages.map( (article, index) =>
        <Grid.Column mobile={16} tablet={8} computer={4}>
        <SingleCard key={article.title} article={article}/>
        </Grid.Column>
        )} 
      </Grid.Row>
    </Grid>

  </React.Fragment>
)

export default NewsCard;
