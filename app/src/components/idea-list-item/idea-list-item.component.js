import React from 'react';

import {
  IdeaItem,
  IdeaItemLink,
  IdeaTitle,
  Tier,
  HR,
} from './idea-list-item.styles';

const tierColor = tier => {
  switch (tier) {
    case 'beginner':
      return '#67cc3f';
    case 'intermediate':
      return '#1670e5';
    case 'advanced':
      return '#ce1010';
    default:
      break;
  }
};

const IdeaListItem = ({
  idea: {
    excerpt,
    frontmatter: { path, title, tier },
  },
}) => (
  <IdeaItem borderColor={tierColor(tier)}>
    <IdeaItemLink to={path}>
      <IdeaTitle>{title}</IdeaTitle>
      <Tier backgroundColor={tierColor(tier)}>{tier}</Tier>
      <HR color={tierColor(tier)} />
      <p>{excerpt}</p>
    </IdeaItemLink>
  </IdeaItem>
);

export default IdeaListItem;
