import React from 'react'
import { Grid } from 'semantic-ui-react'
import SingleBookmark from './SingleBookmark'
const BookmarkCard = ({bookmarks}) => (
  <React.Fragment>
    <Grid>
      {bookmarks.map( article =>
        <Grid.Column mobile={16} tablet={8} computer={4}>
        <SingleBookmark key={article.title} article={article}/>
        </Grid.Column>
      )} 
    </Grid>
  </React.Fragment>
)

export default BookmarkCard