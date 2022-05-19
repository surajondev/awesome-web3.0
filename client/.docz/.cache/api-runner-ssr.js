var plugins = [{
      plugin: require('C:/Users/user/Desktop/Study_Material/Awesome-web3.0/awesome-web3.0/client/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"extensions":[".md",".mdx"],"remarkPlugins":[[null,{"type":"yaml","marker":"-"}],null],"rehypePlugins":[null,null],"gatsbyRemarkPlugins":[],"defaultLayouts":{"default":"C:\\Users\\user\\Desktop\\Study_Material\\Awesome-web3.0\\awesome-web3.0\\client\\node_modules\\gatsby-theme-docz\\src\\base\\Layout.js"},"lessBabel":false,"mediaTypes":["text/markdown","text/x-markdown"],"root":"C:\\Users\\user\\Desktop\\Study_Material\\Awesome-web3.0\\awesome-web3.0\\client\\.docz"},
    },{
      plugin: require('C:/Users/user/Desktop/Study_Material/Awesome-web3.0/awesome-web3.0/client/node_modules/gatsby-plugin-react-helmet-async/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
