import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/main-layout/layout.component';
import SEO from '../components/seo/seo.component';

import IdeaList from '../components/idea-list/idea-list.component';

const BeginnerPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Beginner Ideas" />
      <IdeaList ideas={data.beginnerIdeas.edges} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    beginnerIdeas: allMarkdownRemark(
      sort: { fields: [frontmatter___title], order: ASC }
      filter: { frontmatter: { tier: { eq: "beginner" } } }
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

export default BeginnerPage;
