import React, {Component} from 'react';
import {Dimmer, Card, Image} from 'semantic-ui-react'
import {ReadDeleteButtons} from './Buttons'

export default class SingleCard extends Component {
  state = {}

  handleMouseEnter = () => {
    this.setState({active: true})
  }

  handleMouseLeave = () => {
    this.setState({active: false})
  }

  render(){
    const {active} = this.state
    const content = (
      <div>
        <ReadDeleteButtons url={this.props.article.url}/>
      </div>
    )
    return(
      <Card
        style={{boxShadow:'none'}}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          size='medium'
          src={this.props.article.urlToImage}
        />
        <Card.Content>
          <Card.Header>{this.props.article.title}</Card.Header>
          <Card.Meta>{this.props.article.sourceName}</Card.Meta>
          <Card.Description>{this.props.article.description}</Card.Description>
        </Card.Content>
      </Card>
    )
  }
}
