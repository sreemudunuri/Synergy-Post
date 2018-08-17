import React from "react";
import FilterOption from "./FilterOption";
import countries from "./data/countries";

class Filter extends React.Component {
  mapOptions = () => {
    const mappedComponents = countries.map(countryObj => (
      <FilterOption
        countryCode={countryObj.countryCode}
        countryName={countryObj.countryName}
      />
    ));
    return mappedComponents;
  };

  render() {
    return (
      <select
        value={this.props.selectedCountry}
        onChange={event => this.props.setCountry(event.target.value)}
      >
        {this.mapOptions()}
      </select>
    );
  }
}

export default Filter;
