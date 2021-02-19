import React, { useState } from 'react';
import { SearchContainer } from './styles';
import NegativeMessage from '../NegativeMessage/index';
import FormField from '../Form';
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
    <div className="container">
      <div className="row">
        <SearchContainer className="col-12">
          <FormField
            onSubmit={handleSubmit}
            name="username"
            onChange={handleSearch}
          />
          {userError ? (
            <NegativeMessage>User not found!!</NegativeMessage>
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
      </div>
    </div>
  );
};

export default Search;
