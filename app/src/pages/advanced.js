import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/main-layout/layout.component';
import SEO from '../components/seo/seo.component';

import IdeaList from '../components/idea-list/idea-list.component';

const AdvancedPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Beginner Ideas" />
      <IdeaList ideas={data.advancedIdeas.edges} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    advancedIdeas: allMarkdownRemark(
      sort: { fields: [frontmatter___title], order: ASC }
      filter: { frontmatter: { tier: { eq: "advanced" } } }
    ) {
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

export default AdvancedPage;
