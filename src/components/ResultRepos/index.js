import React from 'react';
import { ContainerResult, TextDescription, Link } from './styles';

const ResultRepos = ({ name, description, url }) => (
  <ContainerResult>
    <Link href={url} target="_blank">
      {name}
    </Link>
    {description && <TextDescription>{description}</TextDescription>}
  </ContainerResult>
);

export default ResultRepos;
