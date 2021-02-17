import React from 'react';
import { SearchContainer } from './styles';
import InputField from '../Input';
import StandardButton from '../Button';

const Search = () => (
  <div>
    <SearchContainer>
      <InputField placeholder="Search GitHub user..." name="username" />
      <StandardButton type="button">Search</StandardButton>
    </SearchContainer>
  </div>
);

export default Search;
