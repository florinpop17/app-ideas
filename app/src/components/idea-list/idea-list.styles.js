import styled from 'styled-components';

export const IdeasList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;

  margin: 2rem;
  list-style: none;
`;
