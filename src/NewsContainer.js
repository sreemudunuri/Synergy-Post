import React, { Component } from "react";

export default class NewsContainer extends Component {
  mapInfo = () => {
    return this.props.articles.map(song => song.title);
  };

  render() {
    console.log(this.props.articles);
    return <div>{this.mapInfo()}</div>;
  }
}
