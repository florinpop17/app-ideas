import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/main-layout/layout.component';
import SEO from '../components/seo/seo.component';

import IdeasList from '../components/idea-list/idea-list.component';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <IdeasList ideas={data.ideas.edges} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    ideas: allMarkdownRemark {
      edges {
        node {
          excerpt
          frontmatter {
            path
            title
            tier
          }
        }
      }
    }
  }
`;

export default IndexPage;
