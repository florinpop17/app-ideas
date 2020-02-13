import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledHeader = styled.header`
  color: #fff;
  background: #211e1e;
  height: 5rem;
`;

export const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  margin: 0 2rem;
  list-style: none;
`;

export const NavItem = styled.li``;

export const NavLink = styled(Link)`
  text-decoration: none;
  padding: 0.5rem 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: 500;
`;
