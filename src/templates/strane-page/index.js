import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Strings } from '../../resources'
import Layout from '../../components/Layout'
import { Helmet } from 'react-helmet'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'
import './strane.scss'
import ReactMarkdown from 'react-markdown'
import { v4 } from 'uuid'
// import yellowbarvideo from '../../img/ScrollingBar.mp4'
// import Strane_flower_B from '../../img/Strane_flower_B.jpg'
import { Getit } from '../../components/Getit'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { Waypoint } from 'react-waypoint'

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => {
      setMatches(media.matches)
    }
    media.addListener(listener)
    return () => media.removeListener(listener)
  }, [matches, query])

  return matches
}

export const StranePageTemplate = ({ stranetoppart, stranepagesections }) => {
  const [renderAnnouncement, setRenderAnnouncement] = useState(false)
  const [isActive, setActive] = useState('false')
  const [currentActiveHandle, setCurrentActiveHandle] = useState(-1)
  const handleToggle = () => {
    setActive(!isActive)
  }

  // const [scrollStatus, setScrollStatus] = useState("")
  // var timeout = null;

  // if (typeof window !== `undefined`) {
  //   window.addEventListener(
  //     "scroll",
  //     () => {
  //       // handleScroll()
  //       document.body.style.setProperty(
  //         "--scroll",
  //         window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
  //       );
  //     },
  //     false
  //   );
  // }

  // const handleScroll = (event) => {
  //   if (timeout) { //if there is already a timeout in process cancel it
  //     clearTimeout(timeout);
  //   }
  //   timeout = setTimeout(() => {
  //     timeout = null;
  //     setScrollStatus('scroll stopped');
  //   }, 1);
  //   if (scrollStatus !== 'scroll') {
  //     setScrollStatus('scrolling');
  //   }
  // }

  // componentDidMount = () => {
  // window.addEventListener('scroll', () => {
  //   let activeClass = 'normal';
  //   if (window.scrollY === 0) {
  //     activeClass = 'top';
  //   }
  //   setActiveClass({ activeClass });
  // });
  // }

  return (
    <div>
      <section className="header-bottom">
        <div className="wrap">
          <div className="header-bottom-inner">
            <ul className="header-bottom-nav">
              {stranepagesections.map((stranepagesection) => (
                <li key={v4()}>
                  <a
                    onClick={() =>
                      scrollTo('#' + stranepagesection.stranepagesectionlink)
                    }
                  >
                    {stranepagesection.stranepagesectionname}
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
            <div className="logo-title">
              <PreviewCompatibleImage imageInfo={stranetoppart.stranelogo} />
            </div>
            <div className="text">
              <p>{stranetoppart.stranetopcontent}</p>
            </div>
          </div>
        </div>
      </section>
      {/* <Stranesection stranepagesections={stranepagesections} />               */}
      <div className="stranesections">
        {stranepagesections.map((stranepagesection, index) => (
          <section
            key={index}
            id={stranepagesection.stranepagesectionlink}
            className="innerpage-sec flower-wrap"
          >
            <div className="wrap">
              <div className="innerpage-sec-content">
                <div className="innerpage-sec-content-left">
                  <a>
                    <div className="gif">
                      <img
                        src={
                          stranepagesection.stranesectionimage.image.publicURL
                        }
                        alt={stranepagesection.stranesectionimage.alt}
                        className="gif"
                      />
                      <PreviewCompatibleImage
                        imageInfo={
                          stranepagesection.stranesectionimagereducemotion
                        }
                      />
                    </div>
                    <Waypoint
                      onEnter={() => setCurrentActiveHandle(index)}
                      onLeave={() => setCurrentActiveHandle(-1)}
                      topOffset="40%"
                      bottomOffset="65%"
                      debug
                    >
                      <div
                        className={
                          currentActiveHandle === index
                            ? 'hover-img active'
                            : 'hover-img'
                        }
                      >
                        <PreviewCompatibleImage
                          imageInfo={stranepagesection.stranesectionimage2}
                        />
                      </div>
                    </Waypoint>
                  </a>
                </div>
                <div className="innerpage-sec-content-right">
                  <ReactMarkdown>
                    {stranepagesection.stranesectioncontent}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section
        className="clip yellow"
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
        onClick={handleToggle}
      >
        <Waypoint onEnter={() => setRenderAnnouncement(true)} />
        {renderAnnouncement && (
          <div className="marquee" style={{ opacity: 1 }}>
            <div
              className={isActive ? 'marquee__inner' : 'marquee__inner active'}
            >
              <span className="step1">{Strings.smokeit}</span>
              <span className="step2">{Strings.dabit}</span>
              <span className="step3">{Strings.vapit}</span>
              <span className="step4">{Strings.smokeit}</span>
              <span className="step5">{Strings.dabit}</span>
              <span className="step6">{Strings.vapit}</span>
              <span className="step7">{Strings.smokeit}</span>
              <span className="step8">{Strings.dabit}</span>
              <span className="step9">{Strings.vapit}</span>
              <span className="step10">{Strings.smokeit}</span>
              <span className="step11">{Strings.dabit}</span>
              <span className="step12">{Strings.vapit}</span>
              <span className="step13">{Strings.smokeit}</span>
              <span className="step14">{Strings.dabit}</span>
              <span className="step15">{Strings.vapit}</span>
              <span className="step16">{Strings.smokeit}</span>
              <span className="step17">{Strings.dabit}</span>
              <span className="step18">{Strings.vapit}</span>
              <span className="step19">{Strings.smokeit}</span>
              <span className="step20">{Strings.dabit}</span>
              <span className="step21">{Strings.vapit}</span>
              <span className="step22">{Strings.smokeit}</span>
              <span className="step23">{Strings.dabit}</span>
              <span className="step24">{Strings.vapit}</span>
              <span className="step25">{Strings.smokeit}</span>
              <span className="step26">{Strings.dabit}</span>
              <span className="step27">{Strings.vapit}</span>
              <span className="step28">{Strings.smokeit}</span>
              <span className="step29">{Strings.dabit}</span>
              <span className="step30">{Strings.vapit}</span>
              <span className="step31">{Strings.smokeit}</span>
              <span className="step32">{Strings.dabit}</span>
              <span className="step33">{Strings.vapit}</span>
              <span className="step34">{Strings.smokeit}</span>
              <span className="step35">{Strings.dabit}</span>
              <span className="step36">{Strings.vapit}</span>
            </div>
          </div>
        )}
      </section>
      <Getit />
    </div>
  )
}

StranePageTemplate.propTypes = {
  stranetoppart: PropTypes.shape({
    stranelogo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    stranetopcontent: PropTypes.string,
  }),
  stranepagesections: PropTypes.array,
}

const StranePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Fragment>
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{Strings.stranetitle}</title>
          <meta name="description" content={Strings.stranedescription} />
        </Helmet>
        <StranePageTemplate
          stranetoppart={frontmatter.stranetoppart}
          stranepagesections={frontmatter.stranepagesections}
        />
      </Layout>
    </Fragment>
  )
}

StranePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default StranePage

export const stranePageQuery = graphql`
  query StranePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        stranetoppart {
          stranelogo {
            image {
              childImageSharp {
                fluid(maxWidth: 700, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          stranetopcontent
        }
        stranepagesections {
          stranesectionimage {
            image {
              publicURL
            }
            alt
          }
          stranesectionimagereducemotion {
            image {
              childImageSharp {
                fluid(maxWidth: 650, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          stranesectionimage2 {
            image {
              childImageSharp {
                fluid(maxWidth: 650, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          stranepagesectionname
          stranepagesectionlink
          stranesectioncontent
        }
      }
    }
  }
`
