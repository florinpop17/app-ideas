import styled from 'styled-components';
import { Link } from 'gatsby';

export const IdeaItem = styled.li`
  border: 1px solid #211e1e;
  border-color: ${props => props.borderColor || '#211e1e'};
  border-radius: 5px;
`;

export const IdeaItemLink = styled(Link)`
  text-decoration: none;
  color: #211e1e;
  display: block;
  height: 100%;
  padding: 1rem;
`;

export const IdeaTitle = styled.h2`
  letter-spacing: 1px;
  color: ${props => props.color || '#211e1e'};
`;

export const HR = styled.hr`
  margin: 5px 0;
`;

export const Tier = styled.small`
  background-color: ${props => props.backgroundColor || '#211e1e'};
  border-radius: 5px;
  color: #fff;
  font-weight: 500;
  padding: 2px 5px;
`;
