import React, {Component} from 'react';
import {Dimmer, Card, Image} from 'semantic-ui-react'
import ReadSaveButtons from './Buttons'

export default class SingleCard extends Component {

  state = {

  }

  handleMouseEnter = () => {
    this.setState({active: true})
  }

  handleMouseLeave = () => {
    this.setState({active: false})
  }

  saveArticle = (event) => {
    event.preventDefault()

    const data = {
          title: this.props.article.title,
          content: this.props.article.description,
          url: this.props.article.url,
          urlToImage: this.props.article.urlToImage,
          sourceName: this.props.article.source.name,
    }

    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token'),
      },
      body: JSON.stringify(data),
    }
    console.log(settings)

    fetch('http://localhost:3000/api/v1/articles', settings)
    .then(res => res.json())
    .then(article => this.saveBookmark(article.id))
  }

  saveBookmark = (articleId) => {
    let  settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token'),
      },
      body: JSON.stringify({
        user_id: this.props.userId,
        article_id: articleId
      }),
    }

    fetch('http://localhost:3000/api/v1/bookmarks', settings)
    .then(res => res.json())
    .then(json => console.log(json))

  }

  render(){
    const {active} = this.state
    const content = (
      <div>
        <ReadSaveButtons url={this.props.article.url} saveBookmark={this.saveArticle} bookmarked={this.state.bookmarked}/>
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
          <Card.Meta>{this.props.article.source.name}</Card.Meta>
          <Card.Description>{this.props.article.description}</Card.Description>
        </Card.Content>
      </Card>
    )
  }
}
