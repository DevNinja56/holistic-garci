import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Strings } from '../../resources'
import Layout from '../../components/Layout'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'
import './live.scss'
import ReactMarkdown from 'react-markdown'
import { v4 } from 'uuid'
import star from '../../img/Icon_Star4_black-2.png'
import { Getit } from '../../components/Getit'
import { useRef } from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/swiper.scss'
import { Waypoint } from 'react-waypoint'
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export const LivePageTemplate = ({
  livetoppart,
  livepagesliderheading,
  livepageslider,
  livepagesections,
  livepagebottomcontent,
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
    <div>
      <section className="header-bottom">
        <div className="wrap">
          <div className="header-bottom-inner">
            <ul className="header-bottom-nav">
              {livepagesections.map((livepagesection) => (
                <li key={v4()}>
                  <a
                    onClick={() =>
                      scrollTo('#' + livepagesection.livepagesectionlink)
                    }
                  >
                    {livepagesection.livepagesectionname}
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
              <PreviewCompatibleImage imageInfo={livetoppart.livepagelogo} />
            </div>
            <div className="text">
              <p>{livetoppart.livetopcontent}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="innerpage-slider">
        <div className="wrap">
          <h3 className="h3-black-zilla-slab-—-30pt">
            {livepagesliderheading}
          </h3>
          <div className="innerpage-slider-content">
            <div ref={prevRef} className="left-arrow slider-arrow"></div>
            <div className="right-arrow slider-arrow" ref={nextRef}></div>
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
              {livepageslider.map((livepageslider) => (
                <SwiperSlide key={v4()}>
                  <div className="slider-content">
                    <div className="left-img">
                      <PreviewCompatibleImage
                        imageInfo={livepageslider.livepagesliderimage}
                      />
                    </div>
                    <div className="right-text">
                      <p className="p-white-barlow-—-34pt">
                        {livepageslider.livepageslidercontent}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <div className="stranesections">
        {livepagesections.map((livepagesection, index) => (
          <section
            id={livepagesection.livepagesectionlink}
            className="innerpage-sec flower-wrap"
          >
            <div className="wrap">
              <div className="innerpage-sec-content">
                {/* <div className="innerpage-sec-content-left">
                  <a>
                    <div className="gif">
                      <img src={livepagesection.livesectionimage.image.publicURL} alt={livepagesection.livesectionimage.alt} className="gif" />
                      <PreviewCompatibleImage imageInfo={livepagesection.livesectionimagereducemotion} />
                    </div>
                    <div className="hover-img">
                      <PreviewCompatibleImage imageInfo={livepagesection.livesectionimage2} />
                    </div>
                  </a>
                </div> */}
                <div className="innerpage-sec-content-left">
                  <a>
                    <div className="gif">
                      <img
                        src={livepagesection.livesectionimage.image.publicURL}
                        alt={livepagesection.livesectionimage.alt}
                        className="gif"
                      />
                      <PreviewCompatibleImage
                        imageInfo={livepagesection.livesectionimagereducemotion}
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
                          imageInfo={livepagesection.livesectionimage2}
                        />
                      </div>
                    </Waypoint>
                  </a>
                </div>
                <div className="innerpage-sec-content-right">
                  <ReactMarkdown>
                    {livepagesection.livesectioncontent}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="innerpage-sec star-sec common-pad">
        <div className="wrap">
          <div className="innerpage-sec-content">
            <div className="innerpage-sec-content-left">
              <img src={star} alt="star" className="star" />
            </div>
            <div className="innerpage-sec-content-right">
              <ReactMarkdown>{livepagebottomcontent}</ReactMarkdown>
            </div>
          </div>
        </div>
      </section>

      <section
        className="clip red"
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
              <span className="step1">{Strings.liveswanky}</span>
              <span className="step2">{Strings.livestrong}</span>
              <span className="step3">{Strings.livetasty}</span>
              <span className="step4">{Strings.liveswanky}</span>
              <span className="step5">{Strings.livestrong}</span>
              <span className="step6">{Strings.livetasty}</span>
              <span className="step7">{Strings.liveswanky}</span>
              <span className="step8">{Strings.livestrong}</span>
              <span className="step9">{Strings.livetasty}</span>
              <span className="step10">{Strings.liveswanky}</span>
              <span className="step11">{Strings.livestrong}</span>
              <span className="step12">{Strings.livetasty}</span>
              <span className="step13">{Strings.liveswanky}</span>
              <span className="step14">{Strings.livestrong}</span>
              <span className="step15">{Strings.livetasty}</span>
              <span className="step16">{Strings.liveswanky}</span>
              <span className="step17">{Strings.livestrong}</span>
              <span className="step18">{Strings.livetasty}</span>
              <span className="step19">{Strings.liveswanky}</span>
              <span className="step20">{Strings.livestrong}</span>
              <span className="step21">{Strings.livetasty}</span>
              <span className="step22">{Strings.liveswanky}</span>
              <span className="step23">{Strings.livestrong}</span>
              <span className="step24">{Strings.livetasty}</span>
              <span className="step25">{Strings.liveswanky}</span>
              <span className="step26">{Strings.livestrong}</span>
              <span className="step27">{Strings.livetasty}</span>
              <span className="step28">{Strings.liveswanky}</span>
              <span className="step29">{Strings.livestrong}</span>
              <span className="step30">{Strings.livetasty}</span>
              <span className="step31">{Strings.liveswanky}</span>
              <span className="step32">{Strings.livestrong}</span>
              <span className="step33">{Strings.livetasty}</span>
            </div>
          </div>
        )}
      </section>
      <Getit />
    </div>
  )
}

LivePageTemplate.propTypes = {
  livetoppart: PropTypes.shape({
    livepagelogo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    livetopcontent: PropTypes.string,
  }),
  livepagesliderheading: PropTypes.string,
  livepageslider: PropTypes.array,
  livepagesections: PropTypes.array,
  livepagebottomcontent: PropTypes.string,
}

const LivePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Fragment>
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{Strings.livetitle}</title>
          <meta name="description" content={Strings.livedescription} />
        </Helmet>
        <LivePageTemplate
          livetoppart={frontmatter.livetoppart}
          livepagesliderheading={frontmatter.livepagesliderheading}
          livepageslider={frontmatter.livepageslider}
          livepagesections={frontmatter.livepagesections}
          livepagebottomcontent={frontmatter.livepagebottomcontent}
        />
      </Layout>
    </Fragment>
  )
}

LivePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default LivePage

export const livePageQuery = graphql`
  query LivePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        livetoppart {
          livepagelogo {
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          livetopcontent
        }
        livepagesliderheading
        livepageslider {
          livepagesliderimage {
            image {
              childImageSharp {
                fluid(maxWidth: 250, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          livepageslidercontent
        }
        livepagesections {
          livesectionimage {
            image {
              publicURL
            }
            alt
          }
          livesectionimagereducemotion {
            image {
              childImageSharp {
                fluid(maxWidth: 400, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          livesectionimage2 {
            image {
              childImageSharp {
                fluid(maxWidth: 400, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          livepagesectionname
          livepagesectionlink
          livesectioncontent
        }
        livepagebottomcontent
      }
    }
  }
`
