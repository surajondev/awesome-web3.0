exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    // siteMetadata: {
    //     siteUrl: `https://web3-roadmap.netlify.app`,
    //   },
    //   plugins: [`gatsby-plugin-sitemap`],
    // }
    module :{
        siteMetadata: {
            siteUrl: `https://www.example.com`,
        }
    }, 
    plugins: [`gatsby-plugin-sitemap`]
)}