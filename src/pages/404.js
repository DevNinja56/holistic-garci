import React from 'react'
import Layout from '../components/Layout'
import notFoundImage from '../img/404-illo.svg'
import { Helmet } from 'react-helmet'
import { Strings } from '../resources'

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{Strings.notfounttitle}</title>
      <meta name="description" content={Strings.notfountdescription} />
    </Helmet>
    <div className="notFound-container">
      <div className="wrap">
        <div className="notFound">
          <div className="notFound-content">
            <h1>WHOOPS!</h1>
            <p>
              Your request went up in smoke (404 error). Here are some options
              to keep your buzz going:
            </p>
            <div className="linkBtn">
              <a href="/">Visit Our Homepage</a>
            </div>
            <div className="linkBtn">
              <a href="/findastore">Find Strane Near You</a>
            </div>
          </div>
          <div className="notFoundImage">
            <img src={notFoundImage} alt="lit cannabis joint with smoke" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
