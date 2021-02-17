import React, { useState } from 'react';
import { SearchContainer } from './styles';
import InputField from '../Input';
import StandardButton from '../Button';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <SearchContainer>
        <InputField
          placeholder="Search GitHub user..."
          name="username"
          onChange={handleSearch}
        />
        <StandardButton type="button">Search</StandardButton>
        <p>{searchValue}</p>
      </SearchContainer>
    </div>
  );
};

export default Search;
