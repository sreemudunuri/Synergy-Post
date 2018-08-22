import React from 'react';
import BookmarkCard from '../components/BookmarkCard'


export default class BookmarksCollection extends React.Component{
  state = {
    bookmarks: []
  }

  fetchBookmarks = () => {
    let settings = {
      "method": "GET",
      "headers": {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token'),
      },
    }


    fetch("http://localhost:3000/api/v1/users", settings)
    .then(r=> r.json())
    .then(data => this.setState({bookmarks: data.articles}, console.log(this.state)))

  }


  componentDidMount(){
    this.fetchBookmarks()
  }

  render(){
    return(
      <div className="news-container">
        <BookmarkCard
          className="news-container"
          bookmarks={this.state.bookmarks}
          history={this.props.history}
        />
      </div>
    )
  }
}
