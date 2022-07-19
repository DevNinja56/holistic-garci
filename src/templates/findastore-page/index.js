import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Strings } from '../../resources'
import Layout from '../../components/Layout'
import './findastore.scss'
import { Map } from '../../components/Map'

export const FindastorePageTemplate = () => {
  return (
    <StaticQuery
      query={graphql`
        query storeaddressquery {
          markdownRemark(
            frontmatter: { templateKey: { eq: "findastore-page" } }
          ) {
            frontmatter {
              storeaddress {
                storeaddress
                storecity
                storelat
                storelng
                storename
                storenumber
                storestate
                storeurl
                storezip
                license
              }
            }
          }
        }
      `}
      // <StaticQuery
      //   query={graphql`
      //     query RandomStoreQuery {
      //         storeAddress {
      //           data {
      //               name
      //               address1
      //               latitude
      //               longitude
      //               dutchieEmbedUrl
      //               city
      //               state
      //               stateCode
      //               postalCode
      //               type
      //               address2
      //               phone
      //               locationHours{
      //                 text
      //               }
      //           }
      //         }
      //       }
      // `}
      render={(data) => (
        <div className="findastore-page-container">
          <Map data={data.markdownRemark.frontmatter.storeaddress} />
        </div>
      )}
    />
  )
}

const FindastorePage = () => {
  return (
    <Fragment>
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{Strings.find_storetitle}</title>
          <meta name="description" content={Strings.find_storedescription} />
        </Helmet>
        <FindastorePageTemplate />
      </Layout>
    </Fragment>
  )
}

export default FindastorePage
