import React from 'react';
import BookmarkCard from '../components/BookmarkCard'
export default class BookmarksCollection extends React.Component{
  state = {
    bookmarks: []
  }

  fetchBookmarks = () => {
    fetch("localhost:3000/api/v1/bookmarks")
    .then(r=> r.json())
    .then(data => this.setState({bookmarks: data}) )
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
        />
      </div>
    )
  }
}