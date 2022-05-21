exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    module :{
        siteMetadata: {
            siteUrl: `https://web3-roadmap.netlify.app/`,
        }
    }, 
    plugins: [`gatsby-plugin-sitemap`]
})}