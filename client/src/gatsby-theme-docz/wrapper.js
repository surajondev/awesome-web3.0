import * as React from 'react'
import { Helmet } from 'react-helmet-async'

// The doc prop contains some metadata about the page being rendered that you can use.
const Wrapper = ({ children, doc }) => <React.Fragment>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Web3 Roadmap and free Resources</title>
        {/* META */}
        <meta name="google-site-verification" content="265WW_7-86QEPex2YdmTgdbeqqlRkpWXe0A7ppqa9MY" />
        {/* Global site tag (gtag.js) - Google Analytics */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-1QLM240D13" />
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'G-1QLM240D13');
        </script> */}
        {/* FAVICON */}
        <link rel="apple-touch-icon" sizes="180x180" href='../../public/favicon.png' />
        <link rel="icon" type="image/png" sizes="32x32" href='../../public/favicon.png' />
        <link rel="icon" type="image/png" sizes="16x16" href='../../public/favicon.png' />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        {/* Twitter */}

        <meta property='twitter:card' content='summary_large_image'/> 
        <meta property='twitter:url' content='https://web3-roadmap.netlify.app/'/>
        <meta property='twitter:title' content="Awesome Web3.0"/> 
        <meta property='twitter:description' content="Web3 Roadmap with free resources"/> 
        <meta property='twitter:image' content='../../public/header.png' />
    </Helmet>
    {children}
</React.Fragment>
export default Wrapper