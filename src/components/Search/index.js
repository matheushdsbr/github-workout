import React, { useState } from 'react';
import { SearchContainer } from './styles';
import FormField from '../Form';
import InputField from '../Input';
import StandardButton from '../Button';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [avatar, setAvatar] = useState('');
  const [nameFull, setNameFull] = useState('');
  const [userBio, setUserBio] = useState('');
  const [userUrl, setUserUrl] = useState('');
  const [userError, setUserError] = useState(false);

  const userData = ({ name, bio, ...data }) => {
    setUserError(false);
    setAvatar(data.avatar_url);
    setNameFull(name);
    setUserBio(bio);
    setUserUrl(data.html_url);
  };

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${searchValue}`)
      .then((response) => response.json())
      .then((data) => (data.message ? setUserError(true) : userData(data)));
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
      {userError ? (
        <p>User Not Found!</p>
      ) : (
        <>
          {nameFull === '' ? (
            <></>
          ) : (
            <>
              <img src={avatar} alt="" />
              <p>{nameFull}</p>
              <p>{userBio}</p>
              <a href={userUrl} target="_blank" rel="noreferrer">
                Link Repos
              </a>
            </>
          )}
        </>
      )}
    </SearchContainer>
  );
};

export default Search;
