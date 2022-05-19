import * as React from 'react'
import { Helmet } from 'react-helmet-async'

// The doc prop contains some metadata about the page being rendered that you can use.
const Wrapper = ({ children, doc }) => <React.Fragment>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Web3 Roadmap and free Resources</title>
        <link rel="icon"
            type="image/png"
              href="http://example.com/myicon.png"
        />
        <meta name="google-site-verification" content="265WW_7-86QEPex2YdmTgdbeqqlRkpWXe0A7ppqa9MY" />
    </Helmet>
    {children}
</React.Fragment>
export default Wrapper