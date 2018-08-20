import React from "react";

const FilterOption = ({ countryCode, countryName }) => {
  return <option value={countryCode}>{countryName}</option>;
};

export default FilterOption;