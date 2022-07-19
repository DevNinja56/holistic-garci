import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Strings } from '../../resources'
import Layout from '../../components/Layout'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'
import './pax.scss'
import ReactMarkdown from 'react-markdown'
import { v4 } from 'uuid'
import { useRef } from 'react'
import { Getit } from '../../components/Getit'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/swiper.scss'
import { Waypoint } from 'react-waypoint'
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export const PaxPageTemplate = ({
  paxtoppart,
  paxpagesections,
  paxpagesliderheading,
  paxpageslider,
  paxpagesections2,
}) => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const [renderAnnouncement, setRenderAnnouncement] = useState(false)

  const [isActive, setActive] = useState('false')
  const handleToggle = () => {
    setActive(!isActive)
  }

  const [currentActiveHandle, setCurrentActiveHandle] = useState(-1)

  // const [scrollStatus, setScrollStatus] = useState("")
  // var timeout = null;

  // if (typeof window !== `undefined`) {
  //   window.addEventListener(
  //     "scroll",
  //     () => {
  //       handleScroll()
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
  //   }, 100);
  //   if (scrollStatus !== 'scrolling') {
  //     setScrollStatus('scrolling');
  //   }
  // }

  return (
    <div className="pax-page-container">
      <section className="innerpage-banner">
        <div className="wrap">
          <div className="innerpage-banner-content">
            <div className="wrap-content pax">
              <div className="logo-title">
                <PreviewCompatibleImage imageInfo={paxtoppart.paxpagelogo} />
              </div>
              <div className="x-text">
                <h2 className="h2-black-zilla-slab-—-90pt">x</h2>
              </div>
              <div className="pax-black-logo">
                <PreviewCompatibleImage
                  imageInfo={paxtoppart.paxpagelogoright}
                />
              </div>
            </div>
            <div className="text">
              <p>{paxtoppart.paxtopcontent}</p>
            </div>
          </div>
        </div>
      </section>
      <div className="stranesections">
        {paxpagesections.map((paxpagesection, index) => (
          <section className="innerpage-sec flower-wrap">
            <div className="wrap">
              <div className="innerpage-sec-content">
                {/* <div className="innerpage-sec-content-left">
                  <a>
                    <div className="gif">
                      <img src={paxpagesection.paxsectionimage.image.publicURL} alt={paxpagesection.paxsectionimage.alt} className="gif"/>
                      <PreviewCompatibleImage imageInfo={paxpagesection.paxsectionimagereducemotion} />
                    </div>
                    <div className="hover-img">
                      <PreviewCompatibleImage imageInfo={paxpagesection.paxsectionimage2} />
                    </div>
                  </a>
                </div> */}
                <div className="innerpage-sec-content-left">
                  <a>
                    <div className="gif">
                      <img
                        src={paxpagesection.paxsectionimage.image.publicURL}
                        alt={paxpagesection.paxsectionimage.alt}
                        className="gif"
                      />
                      <PreviewCompatibleImage
                        imageInfo={paxpagesection.paxsectionimagereducemotion}
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
                          imageInfo={paxpagesection.paxsectionimage2}
                        />
                      </div>
                    </Waypoint>
                  </a>
                </div>
                <div className="innerpage-sec-content-right">
                  <ReactMarkdown>
                    {paxpagesection.paxsectioncontent}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
      <section className="innerpage-slider">
        <div className="wrap">
          <h3 className="h3-black-zilla-slab-—-30pt">{paxpagesliderheading}</h3>
          <div className="innerpage-slider-content">
            <div ref={prevRef} className="left-arrow slider-arrow yellow"></div>
            <div
              className="right-arrow slider-arrow yellow"
              ref={nextRef}
            ></div>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation={{
                prevEl: prevRef.current ? prevRef.current : undefined,
                nextEl: nextRef.current ? nextRef.current : undefined,
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current
                swiper.params.navigation.nextEl = nextRef.current
                swiper.navigation.update()
              }}
              //onSwiper={(swiper) => console.log(swiper)}
              loop={true}
            >
              {paxpageslider.map((paxpageslider) => (
                <SwiperSlide key={v4()}>
                  <div className="slider-content">
                    <div className="right-text">
                      <p className="p-white-barlow-—-34pt">
                        {paxpageslider.paxpageslidercontent}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="small">
            <span>{Strings.paxslidersmalltext}</span>
          </div>
        </div>
      </section>
      <div className="stranesections paxlightsections">
        {paxpagesections2.map((paxpagesections2) => (
          <section key={v4()} className="innerpage-sec flower-wrap">
            <div className="wrap">
              <div className="innerpage-sec-content">
                <div className="innerpage-sec-content-left">
                  <div className="gif">
                    <PreviewCompatibleImage
                      imageInfo={paxpagesections2.paxsectionimage}
                    />
                  </div>
                </div>
                <div className="innerpage-sec-content-right">
                  <div className="rightcontentwitha">
                    <ReactMarkdown>
                      {paxpagesections2.paxsectioncontent}
                    </ReactMarkdown>
                    {paxpagesections2.paxsectioncontentlink ? (
                      <p>
                        <a
                          href={paxpagesections2.paxsectioncontenturl}
                          target="_blank"
                          rel="noreferrer"
                          className="paxdesktoplink"
                        >
                          {paxpagesections2.paxsectioncontentlink}
                        </a>
                      </p>
                    ) : null}
                    {paxpagesections2.paxsectioncontentlinkmobile ? (
                      <p>
                        <a
                          href={paxpagesections2.paxsectioncontenturlmobile}
                          target="_blank"
                          rel="noreferrer"
                          className="paxmobilelink"
                        >
                          {paxpagesections2.paxsectioncontentlinkmobile}
                        </a>{' '}
                      </p>
                    ) : null}
                  </div>
                  {paxpagesections2.paxsectioncontentimagelink ? (
                    <div className="innerpage-btn">
                      <a
                        href={paxpagesections2.paxsectioncontentimagelink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-img"
                      >
                        <PreviewCompatibleImage
                          imageInfo={paxpagesections2.paxsectioncontentimage}
                        />
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
      <section
        className="clip black"
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
              <span className="step1">{Strings.paxpockettext}</span>
              <span className="step2">{Strings.paxpockettext}</span>
              <span className="step3">{Strings.paxpockettext}</span>
              <span className="step4">{Strings.paxpockettext}</span>
              <span className="step5">{Strings.paxpockettext}</span>
              <span className="step6">{Strings.paxpockettext}</span>
              <span className="step7">{Strings.paxpockettext}</span>
              <span className="step8">{Strings.paxpockettext}</span>
              <span className="step9">{Strings.paxpockettext}</span>
              <span className="step10">{Strings.paxpockettext}</span>
              <span className="step11">{Strings.paxpockettext}</span>
              <span className="step12">{Strings.paxpockettext}</span>
              <span className="step13">{Strings.paxpockettext}</span>
              <span className="step14">{Strings.paxpockettext}</span>
              <span className="step15">{Strings.paxpockettext}</span>
              <span className="step16">{Strings.paxpockettext}</span>
              <span className="step17">{Strings.paxpockettext}</span>
              <span className="step18">{Strings.paxpockettext}</span>
              <span className="step19">{Strings.paxpockettext}</span>
              <span className="step20">{Strings.paxpockettext}</span>
              <span className="step21">{Strings.paxpockettext}</span>
              <span className="step22">{Strings.paxpockettext}</span>
              <span className="step23">{Strings.paxpockettext}</span>
              <span className="step24">{Strings.paxpockettext}</span>
              <span className="step25">{Strings.paxpockettext}</span>
              <span className="step26">{Strings.paxpockettext}</span>
              <span className="step27">{Strings.paxpockettext}</span>
              <span className="step28">{Strings.paxpockettext}</span>
              <span className="step29">{Strings.paxpockettext}</span>
              <span className="step30">{Strings.paxpockettext}</span>
              <span className="step31">{Strings.paxpockettext}</span>
              <span className="step32">{Strings.paxpockettext}</span>
              <span className="step33">{Strings.paxpockettext}</span>
              <span className="step34">{Strings.paxpockettext}</span>
              <span className="step35">{Strings.paxpockettext}</span>
              <span className="step36">{Strings.paxpockettext}</span>
            </div>
          </div>
        )}
      </section>
      <Getit />
    </div>
  )
}

PaxPageTemplate.propTypes = {
  paxtoppart: PropTypes.shape({
    paxlogo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    paxtopcontent: PropTypes.string,
  }),
  paxpagesections: PropTypes.array,
  paxpagesliderheading: PropTypes.string,
  paxpageslider: PropTypes.array,
  paxpagesections2: PropTypes.array,
}

const PaxPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Fragment>
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{Strings.paxtitle}</title>
          <meta name="description" content={Strings.paxdescription} />
        </Helmet>
        <PaxPageTemplate
          paxtoppart={frontmatter.paxtoppart}
          paxpagesections={frontmatter.paxpagesections}
          paxpagesliderheading={frontmatter.paxpagesliderheading}
          paxpageslider={frontmatter.paxpageslider}
          paxpagesections2={frontmatter.paxpagesections2}
        />
      </Layout>
    </Fragment>
  )
}

PaxPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PaxPage

export const paxPageQuery = graphql`
  query PaxPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        paxtoppart {
          paxpagelogo {
            image {
              childImageSharp {
                fluid(maxWidth: 700, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          paxpagelogoright {
            image {
              childImageSharp {
                fluid(maxWidth: 400, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          paxtopcontent
        }
        paxpagesections {
          paxsectionimage {
            image {
              publicURL
            }
            alt
          }
          paxsectionimagereducemotion {
            image {
              childImageSharp {
                fluid(maxWidth: 400, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          paxsectionimage2 {
            image {
              childImageSharp {
                fluid(maxWidth: 650, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          paxsectioncontent
        }
        paxpagesliderheading
        paxpageslider {
          paxpageslidercontent
        }
        paxpagesections2 {
          paxsectionimage {
            image {
              childImageSharp {
                fluid(maxWidth: 650, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          paxsectioncontent
          paxsectioncontentlink
          paxsectioncontenturl
          paxsectioncontentlinkmobile
          paxsectioncontenturlmobile
          paxsectioncontentimage {
            image {
              childImageSharp {
                fluid(maxWidth: 250, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          paxsectioncontentimagelink
        }
      }
    }
  }
`
