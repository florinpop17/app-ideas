import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/main-layout/layout.component';
import SEO from '../components/seo/seo.component';

import IdeaList from '../components/idea-list/idea-list.component';

const IntermediatePage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Beginner Ideas" />
      <IdeaList ideas={data.intermediateIdeas.edges} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    intermediateIdeas: allMarkdownRemark(
      sort: { fields: [frontmatter___title], order: ASC }
      filter: { frontmatter: { tier: { eq: "intermediate" } } }
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

export default IntermediatePage;
