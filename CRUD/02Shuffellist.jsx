import React, { useState } from 'react';

const countries = [
  {
    name: 'India',
    value: 'IN',
    cities: ['Delhi', 'Mumbai'],
  },
  {
    name: 'Pakistan',
    value: 'PK',
    cities: ['Lahore', 'Karachi'],
  },
  {
    name: 'United Kingdom',
    value: 'UK',
    cities: ['London', 'Manchester'],
  },
];

function Shuffellist(props) {
  const [countryIndex, setCountryIndex] = useState(0);

  return (
    <div>
      <select
        name="country"
        id="country"
        value={countryIndex}
        onChange={(e) => {
          setCountryIndex(e.target.value);
        }}
      >
        {countries.map((item, index) => (
          <option key={index} value={index}>
            {item.name}
          </option>
        ))}
      </select>

      <select name="city" id="city">
        {countries[countryIndex].cities.map((item, index) => (
          <option key={index} value={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Shuffellist;
