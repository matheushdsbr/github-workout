import React, { useState, useEffect } from 'react';
import {
  Container,
  ContainerUser,
  Image,
  Title,
  Text,
  Link,
  ContainerButton,
  ContainerResultRepos,
} from './styles';
import { ButtonField } from '../Button/styles';
import ResultRepos from '../ResultRepos';

const ResultSearch = ({ src, userName, userBio, href, login }) => {
  const [userDataRepos, setUserDataRepos] = useState([]);
  const [errorRepos, setErrorRepos] = useState(false);

  useEffect(() => {
    setUserDataRepos([]);
  }, [userName]);

  const handleRepos = () => {
    fetch(`https://api.github.com/users/${login}/repos`)
      .then((response) => response.json())
      .then((data) =>
        data.message ? setErrorRepos(true) : setUserDataRepos(data),
      );
  };

  const handleStarred = () => {
    fetch(`https://api.github.com/users/${login}/starred`)
      .then((response) => response.json())
      .then((data) =>
        data.message ? setErrorRepos(true) : setUserDataRepos(data),
      );
  };

  return (
    <Container>
      <ContainerUser>
        <Image src={src} alt="User Image" />
        <Title>{userName}</Title>
        <Text>{userBio}</Text>
        <Link href={href} target="_blank">
          Link Repos
        </Link>
      </ContainerUser>

      <ContainerButton>
        <ButtonField onClick={handleRepos}>Repos</ButtonField>
        <ButtonField onClick={handleStarred}>Starred</ButtonField>
      </ContainerButton>

      <>
        {errorRepos ? (
          <p>Repos not Found!!</p>
        ) : (
          <>
            {userDataRepos.map((item) => (
              <ContainerResultRepos key={item.id}>
                <ResultRepos
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  url={item.html_url}
                />
              </ContainerResultRepos>
            ))}
          </>
        )}
      </>
    </Container>
  );
};

export default ResultSearch;
