import React from 'react';
import { SearchContainer } from './styles';
import InputField from '../Input';

const Search = () => (
  <div>
    <SearchContainer>
      <InputField placeholder="Search GitHub user..." name="username" />
    </SearchContainer>
  </div>
);

export default Search;
