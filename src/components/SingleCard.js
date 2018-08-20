import React, {Component} from 'react';
import {Card, Image } from 'semantic-ui-react'
import ReadSaveButtons from './Buttons'

export default class SingleCard extends Component {
  state = {
    hover : false,
    selectedNews : {}
  }

  handleMouseEnter = () => {
    this.setState({hover: true})
  }

  handleMouseLeave = () => {
    this.setState({hover: false})
  }

  render(){
    return(
      <Card className="card" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <Image src={this.props.article.urlToImage}/>
        <Card.Content>
          <Card.Header>{this.props.article.title}</Card.Header>
          <Card.Meta>{this.props.article.source.name}</Card.Meta>
          <Card.Description>{this.props.article.description}</Card.Description>
        </Card.Content>
        {this.state.hover ? <ReadSaveButtons imgURL={this.props.article.url}/> : null}
      </Card>
    )
  }
}