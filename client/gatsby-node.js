exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    module :{
        siteMetadata: {
            siteUrl: `https://www.example.com`,
          },
          plugins: [`gatsby-plugin-sitemap`],
    }
})}