import React from 'react';
import { Grid } from 'semantic-ui-react'
import SingleCard from './SingleCard';
const makeColumns = (arr) => {
  const splitArr = []
  arr.forEach((elem, index) => {
    if(index % 4){
      splitArr.push([arr[index-3], arr[index-2],arr[index-1], arr[index]])
    }
  })
  return splitArr
}


const NewsCard = ({withImages, withNoImages, userId}) => (
  <React.Fragment>
    <Grid>
      {withImages.map( (article, index) =>
        <Grid.Column key={article.title} mobile={16} tablet={8} computer={4}>
        <SingleCard  article={article} userId={userId}/>
        </Grid.Column>
        )}
    </Grid>
  </React.Fragment>
)

export default NewsCard;

// <Grid.Row>
// {withNoImages.map( (article, index) =>
//   <Grid.Column key={article.title} mobile={16} tablet={8} computer={4}>
//   <SingleCard article={article}/>
//   </Grid.Column>
//   )}
// </Grid.Row>
