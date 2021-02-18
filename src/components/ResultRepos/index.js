import React from 'react';
import { UL, Text, Link } from './styles';

const ResultRepos = ({ name, description, url }) => (
  <UL>
    <li>
      <Text>{name}</Text>
      {description && <Text>{description}</Text>}
      <Link href={url}>Link to Repos</Link>
      <hr />
    </li>
  </UL>
);

export default ResultRepos;
