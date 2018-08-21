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

// const makeRows = (arr) => {
//   makeColumns(arr).forEach((elem, index)=> {
//    return
//    <Grid.Row>
//       {makeColumns(arr).map((article,index) => (
//         <Grid.Column>
//           <SingleCard key={article[index].title} article={article[index]}/>
//         </Grid.Column>
//       ))}
//     </Grid.Row>
//   })

// }

const NewsCard = ({withImages, withNoImages}) => (
  <React.Fragment>
    <Grid>
      {withImages.map( (article, index) =>
        <Grid.Column mobile={16} tablet={8} computer={4}>
        <SingleCard key={article.title} article={article}/>
        </Grid.Column>
        )} 
      <Grid.Row>
      {withNoImages.map( (article, index) =>
        <Grid.Column mobile={16} tablet={8} computer={4}>
        <SingleCard key={article.title} article={article}/>
        </Grid.Column>
        )} 
      </Grid.Row>
    </Grid>
  </React.Fragment>
)

export default NewsCard;
