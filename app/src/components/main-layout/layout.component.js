/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../header/header.component';
import { MainLayout } from './layout.styles';
import AppIdeaBanner from '../app-idea-banner/app-idea-banner.component';

import './main.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <MainLayout>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div style={{ position: 'relative' }}>
        <AppIdeaBanner />
        <span
          style={{
            display: 'block',
            position: 'absolute',
            height: '100%',
            width: '100%',
            top: '0',
            left: '0',
            background: 'rgba(0, 0, 0, 0.2)',
          }}
        ></span>
      </div>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </MainLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
