import React from 'react';
import IdeaListItem from '../idea-list-item/idea-list-item.component';

import { IdeasList } from './idea-list.styles';

const IdeaList = ({ ideas }) => (
  <IdeasList>
    {ideas.map(({ node }) => (
      <IdeaListItem key={node.id} idea={node} />
    ))}
  </IdeasList>
);

export default IdeaList;
