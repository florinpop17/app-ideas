import PropTypes from 'prop-types';
import React from 'react';

import { StyledHeader, Nav, NavItem, NavLink } from './header.styles';

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Nav>
      <NavItem>
        <NavLink to="/">All</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/beginner">Beginner</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/intermediate">Intermediate</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/advanced">Advanced</NavLink>
      </NavItem>
    </Nav>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
