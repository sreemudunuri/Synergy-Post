import React from 'react'
import { Grid,Button,Icon } from 'semantic-ui-react'
import SingleBookmark from './SingleBookmark'

const BookmarkCard = ({bookmarks, history}) => (



  <div style={{paddingTop:'20px'}}>
  <Button animated='vertical' onClick={() => { history.push('/news')}} style={{float:'left'}}>
    <Button.Content hidden>Back</Button.Content>
    <Button.Content visible>
      <Icon name='backward' />
    </Button.Content>
  </Button>
    <Grid>
      {bookmarks.map( article =>
        <Grid.Column mobile={16} tablet={8} computer={4}>
        <SingleBookmark key={article.title} article={article}/>
        </Grid.Column>
      )}
    </Grid>

  </div>
)

export default BookmarkCard
