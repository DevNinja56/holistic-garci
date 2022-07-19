import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import ReactMarkdown from 'react-markdown'
import { Helmet } from 'react-helmet'
import { Strings } from '../../resources'

export const PrivacypolicyTemplate = ({ privacypolicy }) => {
  return (
    <div className="cms-content">
      <section className="innerpage-banner">
        <div className="wrap">
          <div className="innerpage-banner-content">
            <h1 className="h1-zilla-slab-—-90pt">
              {Strings.privacypolicytext}
            </h1>
          </div>
        </div>
      </section>
      <div className="wrap">
        <ReactMarkdown>{privacypolicy}</ReactMarkdown>
      </div>
    </div>
  )
}

PrivacypolicyTemplate.propTypes = {
  privacypolicy: PropTypes.string,
}

const PrivacypolicyPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{Strings.privacytitle}</title>
        <meta name="description" content={Strings.privacydescription} />
      </Helmet>
      <PrivacypolicyTemplate privacypolicy={frontmatter.privacypolicy} />
    </Layout>
  )
}

PrivacypolicyPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PrivacypolicyPage

export const PrivacypolicyPageQuery = graphql`
  query PrivacypolicyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        privacypolicy
      }
    }
  }
`
