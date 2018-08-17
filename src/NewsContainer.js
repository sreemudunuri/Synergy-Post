import React, { Component } from "react";
import Filter from "./Filter";

export default class NewsContainer extends Component {
  mapInfo = () => {
    return this.props.articles.map(article => article.title);
  };

  render() {
    console.log(this.props.articles);
    return (
      <div>
        <Filter
          selectedCountry={this.props.selectedCountry}
          setCountry={this.props.setCountry}
        />
        {this.mapInfo()}
      </div>
    );
  }
}
