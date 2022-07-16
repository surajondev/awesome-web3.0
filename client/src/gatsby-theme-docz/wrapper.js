import * as React from 'react'
import { Helmet } from 'react-helmet-async'

// The doc prop contains some metadata about the page being rendered that you can use.
const Wrapper = ({ children, doc }) => <React.Fragment>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Web3 Roadmap and free Resources</title>
        <meta name="google-site-verification" content="265WW_7-86QEPex2YdmTgdbeqqlRkpWXe0A7ppqa9MY" />
        <link rel="apple-touch-icon" sizes="180x180" href='../../public/favicon.png' />
        <link rel="icon" type="image/png" sizes="32x32" href='../../public/favicon.png' />
        <link rel="icon" type="image/png" sizes="16x16" href='../../public/favicon.png' />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
    </Helmet>
    {children}
</React.Fragment>
export default Wrapper
