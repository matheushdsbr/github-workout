import React from 'react';
import { ContainerResult, Title, TextDescription, Link } from './styles';

const ResultRepos = ({ name, description, url }) => (
  <ContainerResult>
    <Title>{name}</Title>
    {description && <TextDescription>{description}</TextDescription>}
    <Link href={url}>Link to Repos</Link>
  </ContainerResult>
);

export default ResultRepos;
