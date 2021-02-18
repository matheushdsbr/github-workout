import React, { useState } from 'react';
import { SearchContainer } from './styles';
import FormField from '../Form';
import InputField from '../Input';
import StandardButton from '../Button';
import ResultSearch from '../ResultSearch';

const Search = () => {
  const [login, setLogin] = useState('');
  const [avatar, setAvatar] = useState('');
  const [userName, setUserName] = useState('');
  const [userBio, setUserBio] = useState('');
  const [userUrl, setUserUrl] = useState('');
  const [userError, setUserError] = useState(false);
  const [resetRepos, setResetRepos] = useState(false);

  const userData = ({ name, bio, ...data }) => {
    setResetRepos(true);
    setUserError(false);
    setAvatar(data.avatar_url);
    setUserName(name);
    setUserBio(bio);
    setUserUrl(data.html_url);
  };

  const handleSearch = (event) => {
    setLogin(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${login}`)
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
          {userName === '' ? (
            <></>
          ) : (
            <ResultSearch
              src={avatar}
              userName={userName}
              userBio={userBio}
              href={userUrl}
              login={login}
              resetRepos={resetRepos}
            />
          )}
        </>
      )}
    </SearchContainer>
  );
};

export default Search;
