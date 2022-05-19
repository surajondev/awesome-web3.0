const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Web3.0 Awesome',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [
          'Introduction',
          'Web2 VS Web3',
          'Blockchain',
          'Ethereum',
          'Decentralized Application(dApp)',
          'Smart Contract',
          'Solidity',
          'Remix IDE',
          'Crypto Wallet',
          'Interaction with Blockchain',
          'Local blockchain development environment',
          'Framework',
        ],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root:
          'C:\\Users\\user\\Desktop\\Study_Material\\Web 3.0\\web3.0-awesome\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Web3.0 Awesome',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root:
            'C:\\Users\\user\\Desktop\\Study_Material\\Web 3.0\\web3.0-awesome',
          templates:
            'C:\\Users\\user\\Desktop\\Study_Material\\Web 3.0\\web3.0-awesome\\node_modules\\docz-core\\dist\\templates',
          docz:
            'C:\\Users\\user\\Desktop\\Study_Material\\Web 3.0\\web3.0-awesome\\.docz',
          cache:
            'C:\\Users\\user\\Desktop\\Study_Material\\Web 3.0\\web3.0-awesome\\.docz\\.cache',
          app:
            'C:\\Users\\user\\Desktop\\Study_Material\\Web 3.0\\web3.0-awesome\\.docz\\app',
          appPackageJson:
            'C:\\Users\\user\\Desktop\\Study_Material\\Web 3.0\\web3.0-awesome\\package.json',
          appTsConfig:
            'C:\\Users\\user\\Desktop\\Study_Material\\Web 3.0\\web3.0-awesome\\tsconfig.json',
          gatsbyConfig:
            'C:\\Users\\user\\Desktop\\Study_Material\\Web 3.0\\web3.0-awesome\\gatsby-config.js',
          gatsbyBrowser:
            'C:\\Users\\user\\Desktop\\Study_Material\\Web 3.0\\web3.0-awesome\\gatsby-browser.js',
          gatsbyNode:
            'C:\\Users\\user\\Desktop\\Study_Material\\Web 3.0\\web3.0-awesome\\gatsby-node.js',
          gatsbySSR:
            'C:\\Users\\user\\Desktop\\Study_Material\\Web 3.0\\web3.0-awesome\\gatsby-ssr.js',
          importsJs:
            'C:\\Users\\user\\Desktop\\Study_Material\\Web 3.0\\web3.0-awesome\\.docz\\app\\imports.js',
          rootJs:
            'C:\\Users\\user\\Desktop\\Study_Material\\Web 3.0\\web3.0-awesome\\.docz\\app\\root.jsx',
          indexJs:
            'C:\\Users\\user\\Desktop\\Study_Material\\Web 3.0\\web3.0-awesome\\.docz\\app\\index.jsx',
          indexHtml:
            'C:\\Users\\user\\Desktop\\Study_Material\\Web 3.0\\web3.0-awesome\\.docz\\app\\index.html',
          db:
            'C:\\Users\\user\\Desktop\\Study_Material\\Web 3.0\\web3.0-awesome\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
