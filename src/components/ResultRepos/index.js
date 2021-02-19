import React from 'react';
import { Text, Link } from './styles';

const ResultRepos = ({ name, description, url }) => (
  <li>
    <Text>{name}</Text>
    {description && <Text>{description}</Text>}
    <Link href={url}>Link to Repos</Link>
    <hr />
  </li>
);

export default ResultRepos;
