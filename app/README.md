# TODO

- Filter and Sort for all pages (home page probably most important as it displays all tiers of ideas)

- If this gets accepted and merged update CONTRIBUTING.md to have new md app idea files to include necessary fields for Gatsby markdown plugin

- Style could use some love in general - currently just super simple css grid

- Update SEO for all pages to return accurate title for content

- IdeaTemplate needs a lof styling love. Currently only showing the HTML that is derived from the markdown files

  - Look into possibly adding more fields to each markdown file to allow for more custom styling on each page (this can still be done by creating tight styling components
    based on the exact structure of the markdown parsed HTML)

- look into some way to trigger rebuild of gatsby site when hosted(probably Netlify) every time a new Idea is merged in from a PR

  - I believe github actions can do this?

  <br />

# Gatsby

## Plugins

- gatsby-plugin-react-helmet
- gatsby-source-filesystem
- gatsby-transformer-sharp
- gatsby-plugin-sharp
- gatsby-plugin-manifest
- gatsby-source-filesystem
- gatsby-transformer-remark
- gatsby-plugin-styled-components

<br />

# NOTES

- each page is querying only the tier of idea that coincides with the page tier
- Gatsby createPages being used to create a new page for each project that displays the markdown file in HTML format currently
