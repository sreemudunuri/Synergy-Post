import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ReadSaveButtons = ({url}) => (
  <div>
    <Button animated='vertical' href={url} target="_blank">
      <Button.Content hidden>Read</Button.Content>
      <Button.Content visible>
        <Icon name='eye' />
      </Button.Content>
    </Button>
    <Button animated='vertical'>
      <Button.Content hidden>Save</Button.Content>
      <Button.Content visible>
        <Icon name='bookmark' />
      </Button.Content>
    </Button>
  </div>
)

export default ReadSaveButtons
