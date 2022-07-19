import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Strings } from '../../resources'
import Layout from '../../components/Layout'
import './faq.scss'
import ReactMarkdown from 'react-markdown'
import { v4 } from 'uuid'
import FAQs_Dropdown from '../../img/FAQs_Dropdown.png'
import scrollTo from 'gatsby-plugin-smoothscroll'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

export const FaqPageTemplate = ({
  faqpageheading,
  faqcategorylist,
  faqcategorycontentlist,
}) => {
  return (
    <div className="faq-page-container">
      <section className="header-bottom">
        <div className="wrap">
          <div className="header-bottom-inner">
            <ul className="header-bottom-nav">
              {faqcategorylist.map((faqcategorylist) => (
                <li key={v4()}>
                  <a
                    onClick={() =>
                      scrollTo('#' + faqcategorylist.faqcategoryheaderlink)
                    }
                  >
                    {faqcategorylist.faqcategoryheadername}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="innerpage-banner">
        <div className="wrap">
          <div className="innerpage-banner-content">
            <h1 className="h1-zilla-slab-—-100pt">{faqpageheading}</h1>
          </div>
        </div>
      </section>
      <section className="faq">
        {faqcategorylist.map((faqcategorylist) => (
          <div
            id={faqcategorylist.faqcategoryheaderlink}
            className="faq-cat"
            key={v4()}
          >
            <div className="wrap">
              <div className="faq-cat-title">
                <h2 className="h2-black-zilla-slab-—-90pt">
                  {faqcategorylist.faqcategoryheading}
                </h2>
              </div>
              <Accordion>
                {faqcategorylist.faqcategorycontentlist.map(
                  (faqcategorycontentlist) => (
                    <AccordionItem key={v4()}>
                      <div className="faq-cat-content">
                        <div className="faq-accor">
                          <div className="accor-content">
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                <div className="accor-img">
                                  <img
                                    src={FAQs_Dropdown}
                                    alt="Toggle open/close"
                                  />
                                </div>
                                <div className="accr-title">
                                  <h3 className="h3-black-zilla-slab-—-30pt">
                                    {faqcategorycontentlist.faqcontenttitle}
                                  </h3>
                                </div>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <div className="accr-body">
                                <ReactMarkdown>
                                  {faqcategorycontentlist.faqcontentbody}
                                </ReactMarkdown>
                              </div>
                            </AccordionItemPanel>
                          </div>
                        </div>
                      </div>
                    </AccordionItem>
                  )
                )}
              </Accordion>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

FaqPageTemplate.propTypes = {
  faqpageheading: PropTypes.string,
  faqcategorylist: PropTypes.array,
}

const FaqPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Fragment>
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{Strings.faqtitle}</title>
          <meta name="description" content={Strings.faqdescription} />
        </Helmet>
        <FaqPageTemplate
          faqpageheading={frontmatter.faqpageheading}
          faqcategorylist={frontmatter.faqcategorylist}
        />
      </Layout>
    </Fragment>
  )
}

FaqPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default FaqPage

export const faqPageQuery = graphql`
  query FaqPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        faqpageheading
        faqcategorylist {
          faqcategoryheading
          faqcategoryheadername
          faqcategoryheaderlink
          faqcategorycontentlist {
            faqcontenttitle
            faqcontentbody
          }
        }
      }
    }
  }
`
