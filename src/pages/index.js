import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <q>There is nothing we can't do if we work hard, never sleep, and shirk all other responsibilities in our lives.</q>
  </Layout>
)

export default IndexPage
