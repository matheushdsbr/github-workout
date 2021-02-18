import React, { useState } from 'react';
import { SearchContainer } from './styles';
import FormField from '../Form';
import InputField from '../Input';
import StandardButton from '../Button';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataResponse = await fetch(
      `https://api.github.com/users/${searchValue}`,
    );
    const data = await dataResponse.json();
    console.log(data);
  };

  return (
    <SearchContainer>
      <FormField onSubmit={handleSubmit}>
        <InputField
          placeholder="Search GitHub user..."
          name="username"
          onChange={handleSearch}
        />
        <StandardButton type="submit">Search</StandardButton>
      </FormField>
    </SearchContainer>
  );
};

export default Search;
