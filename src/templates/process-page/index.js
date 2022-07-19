import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Strings } from '../../resources'
import Layout from '../../components/Layout'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'
import Icon_FindAStore_yellow_big from '../../img/Icon_FindAStore-yellow-big.png'
import searchicon from '../../img/search.png'
import GetIt_Title from '../../img/GetIt_Title.png'
import ReactMarkdown from 'react-markdown'
import './process.scss'
import { navigate } from 'gatsby'

import scrollTo from 'gatsby-plugin-smoothscroll'

// import Lottie from 'react-lottie';
// import * as animationData from './Beaker.json'
import { Waypoint } from 'react-waypoint'
import MagicLottie from '../../components/MagicLottie'
import { GoingTree } from '../../components/GoingTree'
import { Telescope } from '../../components/Telescope'

export const ProcessPageTemplate = ({
  goingback,
  seedsection,
  cultivatesection,
  harvestsection,
  labmagicsection,
  allyourssection,
  signaturesection,
  signaturesectionleft,
  signaturesectionright,
}) => {
  if (typeof window !== `undefined`) {
    window.addEventListener(
      'scroll',
      () => {
        handleScroll()
        document.body.style.setProperty(
          '--scroll',
          window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        )
      },
      false
    )
  }

  const [scrollStatus, setScrollStatus] = useState('')
  var timeout = null

  const handleScroll = (event) => {
    if (timeout) {
      //if there is already a timeout in process cancel it
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      timeout = null
      setScrollStatus('scroll stopped')
    }, 100)
    if (scrollStatus !== 'scrolling') {
      setScrollStatus('scrolling')
    }
  }

  function _handleKeyDown(e) {
    if (e.key === 'Enter') {
      //console.log('do validate');
      // this.props.onPressEnter(e.target.value)
      navigate('/findastore', {
        state: { text: e.target.value },
      })
    }
  }

  const [renderLottie, setRenderLottie] = useState(false)

  // const [isStopped, isPaused] = useState(false);

  // const defaultOptions = {
  //   loop: false,
  //   autoplay: true,
  //   animationData: animationData.default,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   }
  // };

  return (
    <div className="process">
      <section className="header-bottom">
        <div className="wrap">
          <div className="header-bottom-inner">
            <ul className="header-bottom-nav">
              <li>
                <a onClick={() => scrollTo('#going-back-sec')}>
                  {goingback.goingbacksectionname}
                </a>
              </li>
              <li>
                <a onClick={() => scrollTo('#seeds-sec')}>
                  {seedsection.seedsectionname}
                </a>
              </li>
              <li>
                <a onClick={() => scrollTo('#with-care-sec')}>
                  {cultivatesection.cultivatesectionname}
                </a>
              </li>
              <li>
                <a onClick={() => scrollTo('#happy-harvest-sec')}>
                  {harvestsection.harvestsectionname}
                </a>
              </li>
              <li>
                <a onClick={() => scrollTo('#lab-magic-sec')}>
                  {labmagicsection.labmagicsectionname}
                </a>
              </li>
              <li>
                <a onClick={() => scrollTo('#all-yours-sec')}>
                  {allyourssection.allyourssectionname}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="going-back-sec" className="going-back">
        <div className="wrap">
          <h1 className="h1-zilla-slab-—-100pt yellow">
            {goingback.journeyheading}
          </h1>
          <div className="going-back-content">
            <div className="going-back-content-left">
              <div className="going-way-row">
                <div className="going-way">
                  <PreviewCompatibleImage
                    imageInfo={goingback.goingbacktitle}
                  />
                  <div className="going-way-after"></div>
                </div>
                <div className="going-back-text">
                  <p>{goingback.goingbackcontent}</p>
                </div>
              </div>
            </div>
            <div className="going-back-content-right">
              <div className="crown-content">
                <div className="img">
                  <PreviewCompatibleImage
                    imageInfo={goingback.goingbackcrownimage}
                  />
                </div>
                <p>{goingback.goingbackcrowntext}</p>
              </div>
              <div className="tree-video">
                <GoingTree />
                {/* <video autoPlay loop muted>
                
                </video> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="seeds-sec" className="tele-section">
        <div className="wrap">
          <div className="tele-content">
            <div className="tele-content-left">
              <div className="tele-video">
                <Telescope />
                {/* <video autoPlay loop muted>
                  <source src={Telescope} type="video/mp4" />
                </video> */}
              </div>
              <div className="tele-center-text">
                <p>{seedsection.searchseedcontent}</p>
              </div>
            </div>
            <div className="tele-content-right">
              <div className="search-seed">
                <PreviewCompatibleImage
                  imageInfo={seedsection.searchseedtitle}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="tele-after"></div>
      </section>
      <section
        id="with-care-sec"
        className="with-care-section"
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
        <div className="wrap">
          <div className="with-care-content">
            <div className="with-care-content-left">
              <div className="cult">
                <PreviewCompatibleImage
                  imageInfo={cultivatesection.cultivatetitle}
                />
              </div>
              <div className="with-care-text">
                <p>{cultivatesection.cultivatecontent}</p>
              </div>
              <div className="with-flower-text">
                <p>{cultivatesection.cultivatecontent2}</p>
              </div>
            </div>
            <div className="with-care-content-right">
              <div className="watering">
                <div className="watering-before"></div>
                <div className="watering-image">
                  <PreviewCompatibleImage
                    imageInfo={cultivatesection.cultivatewatering}
                  />
                </div>
                <div className="watering-after"></div>
              </div>
              <div className="cul-flower">
                <PreviewCompatibleImage
                  imageInfo={cultivatesection.cultivateflower}
                />
                <div className="cul-flower-after"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="happy-harvest-sec" className="happy-harvest-section">
        <div className="wrap">
          <div className="happy-harvest-content">
            <div className="happy-harvest-content-left">
              <div className="cult">
                <div className="cult-before"></div>
                <PreviewCompatibleImage
                  imageInfo={harvestsection.harvestsectiontitle}
                />
              </div>
              <div className="happy-harvest-text">
                <div className="happy-harvest-inner-text">
                  <p>{harvestsection.harvestcontent}</p>
                </div>
                <div className="harvestcontent2markdown">
                  <ReactMarkdown>
                    {harvestsection.harvestcontent2}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
            <div className="happy-harvest-content-right">
              <div className="happy-harvest-image">
                <PreviewCompatibleImage
                  imageInfo={harvestsection.harvesthappyimage}
                />
                <div className="happy-harvest-before"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="lab-magic-sec" className="lab-magic">
        <div className="lab-magic-before"></div>
        <div className="wrap">
          <div className="lab-mag-wrap">
            <div className="lab-mag-left">
              <div className="lab-mag">
                <PreviewCompatibleImage
                  imageInfo={labmagicsection.labmagicsectiontitle}
                />
              </div>
            </div>
            <div className="lab-mag-right">
              <div className="lab-mag-text">
                <p>{labmagicsection.labmagicsectioncontent}</p>
              </div>
            </div>
          </div>
          <div className="lab-magic-content">
            <div className="lab-magic-content-left">
              <div className="beaker-wrap">
                <div className="beaker-text">
                  <p className="p-details-barlow-—-24pt">
                    {labmagicsection.labmagicsectioncontentsmall}
                  </p>
                </div>
                <div className="beaker-video">
                  <div className="beaker-video-preview">
                    <MagicLottie isPaused={scrollStatus !== 'scrolling'} />
                  </div>
                  <Waypoint onEnter={() => setRenderLottie(true)} />
                  {renderLottie && (
                    <MagicLottie isPaused={scrollStatus !== 'scrolling'} />
                  )}

                  {/* <Lottie options={defaultOptions}
                    height={220}
                    width={500}
                    isStopped={isStopped}
                    isPaused={isPaused}/> */}

                  {/* <video autoPlay loop muted>
                    <source src={Beaker} type="video/mp4" />  
                  </video> */}
                </div>
              </div>
            </div>
            <div className="lab-magic-content-right">
              <div className="product-imgs">
                <div className="lab-diamond-img">
                  <div className="lab-diamond">
                    <PreviewCompatibleImage
                      imageInfo={labmagicsection.labdiamondimage}
                    />
                  </div>
                </div>
                <div className="lab-whip">
                  <PreviewCompatibleImage
                    imageInfo={labmagicsection.labwhipimage}
                  />
                </div>
                <div className="lab-product">
                  <PreviewCompatibleImage
                    imageInfo={labmagicsection.labproductimage}
                  />
                </div>
                <div className="lab-badder">
                  <PreviewCompatibleImage
                    imageInfo={labmagicsection.labbadderimage}
                  />
                </div>
                <div className="lab-star">
                  <PreviewCompatibleImage
                    imageInfo={labmagicsection.labstarimage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lab-magic-after"></div>
      </section>
      <section id="all-yours-sec" className="all-yours">
        <div className="wrap">
          <div className="all-yours-content">
            <div className="all-yours-content-left">
              <div className="its-all">
                <PreviewCompatibleImage
                  imageInfo={allyourssection.allyourssectiontitle}
                />
              </div>
              <div className="all-yours-text">
                <p>{allyourssection.allyourssectioncontent}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="signature">
          <div className="wrap">
            <div className="signature-content">
              <div className="signature-content-left">
                <ReactMarkdown>
                  {signaturesection.signaturesectionleft.signaturecontent}
                </ReactMarkdown>
                <div className="sign-strane-img">
                  <div className="str-cart">
                    <PreviewCompatibleImage
                      imageInfo={
                        signaturesection.signaturesectionleft
                          .signaturesectionleftimage
                      }
                    />
                  </div>
                  <div className="str-pack">
                    <PreviewCompatibleImage
                      imageInfo={
                        signaturesection.signaturesectionleft
                          .signaturesectionleftimage2
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="signature-content-right">
                <div className="con-img-parent-before"></div>
                <div className="con-img">
                  <div className="con-img-before"></div>
                  <PreviewCompatibleImage
                    imageInfo={
                      signaturesection.signaturesectionright
                        .signaturesectionrightimage
                    }
                  />
                </div>
                <ReactMarkdown>
                  {signaturesection.signaturesectionright.signaturecontent}
                </ReactMarkdown>
                <div className="con-img-parent-after"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="find-getin">
        <div className="wrap">
          <div className="find-getin-content">
            <div className="find-getin-content-left">
              <div className="find-img">
                <img
                  src={Icon_FindAStore_yellow_big}
                  alt={Strings.findastorealt}
                />
              </div>
            </div>
            <div className="find-getin-content-right">
              <div className="get-search-content">
                <div className="get-img">
                  <img src={GetIt_Title} alt="Get It in white letters" />
                </div>
                <p>
                  {Strings.processfindastoretext}
                  <br /> {Strings.nearyoutext}
                </p>
              </div>
              <div className="get-search">
                <label htmlFor="processfindastore">{Strings.getitlabel}</label>
                <input
                  type="text"
                  id="processfindastore"
                  placeholder={Strings.getitlabel}
                  onKeyDown={_handleKeyDown}
                />
                <img
                  className="search-img"
                  src={searchicon}
                  alt={Strings.findastorealt}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

ProcessPageTemplate.propTypes = {
  goingback: PropTypes.shape({
    goingbacksectionname: PropTypes.string,
    goingbacksectionlink: PropTypes.string,
    journeyheading: PropTypes.string,
    goingbacktitle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    goingbackcontent: PropTypes.string,
    goingbackcrownimage: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
    goingbackcrowntext: PropTypes.string,
    goingbackstars: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  seedsection: PropTypes.shape({
    seedsectionname: PropTypes.string,
    seedsectionlink: PropTypes.string,
    searchseedtitle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    searchseedcontent: PropTypes.string,
  }),
  cultivatesection: PropTypes.shape({
    cultivatesectionname: PropTypes.string,
    cultivatetitle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    cultivatecontent: PropTypes.string,
    cultivatecontent2: PropTypes.string,
    cultivatewatering: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
    cultivateflower: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  harvestsection: PropTypes.shape({
    harvestsectionname: PropTypes.string,
    harvestsectionlink: PropTypes.string,
    harvestsectiontitle: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
    harvestcontent: PropTypes.string,
    harvestcontent2: PropTypes.string,
    harvesthappyimage: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
  }),
  labmagicsection: PropTypes.shape({
    labmagicsectionname: PropTypes.string,
    labmagicsectiontitle: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
    labmagicsectioncontentsmall: PropTypes.string,
    labmagicsectioncontent: PropTypes.string,
    labdiamondimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    labwhipimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    labproductimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    labbadderimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    labstarimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  allyourssection: PropTypes.shape({
    allyourssectionname: PropTypes.string,
    allyourssectionlink: PropTypes.string,
    allyourssectiontitle: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
    allyourssectioncontent: PropTypes.string,
  }),
  signaturesection: PropTypes.shape({
    signaturesectionleft: PropTypes.shape({
      signaturecontent: PropTypes.string,
      signaturesectionleftimage: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
      ]),
      signaturesectionleftimage2: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
      ]),
    }),
    signaturesectionright: PropTypes.shape({
      signaturecontent: PropTypes.string,
      signaturesectionrightimage: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
      ]),
      signaturerightdiamondimage: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
      ]),
      signaturerightdiamond2image: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
      ]),
      signaturerightdiamond3image: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
      ]),
    }),
  }),
}

const ProcessPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Fragment>
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{Strings.processtitle}</title>
          <meta name="description" content={Strings.processdescription} />
        </Helmet>
        <ProcessPageTemplate
          goingback={frontmatter.goingback}
          seedsection={frontmatter.seedsection}
          cultivatesection={frontmatter.cultivatesection}
          harvestsection={frontmatter.harvestsection}
          labmagicsection={frontmatter.labmagicsection}
          allyourssection={frontmatter.allyourssection}
          signaturesection={frontmatter.signaturesection}
        />
      </Layout>
    </Fragment>
  )
}

ProcessPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProcessPage

export const processPageQuery = graphql`
  query ProcessPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        goingback {
          goingbacksectionname
          goingbacksectionlink
          journeyheading
          goingbacktitle {
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          goingbackcontent
          goingbackcrownimage {
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          goingbackcrowntext
          goingbackstars {
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
        }
        seedsection {
          seedsectionname
          seedsectionlink
          searchseedtitle {
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          searchseedcontent
        }
        cultivatesection {
          cultivatesectionname
          cultivatetitle {
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          cultivatecontent
          cultivatecontent2
          cultivatewatering {
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          cultivateflower {
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        harvestsection {
          harvestsectionname
          harvestsectionlink
          harvestsectiontitle {
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          harvestcontent
          harvestcontent2
          harvesthappyimage {
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
        }
        labmagicsection {
          labmagicsectionname
          labmagicsectiontitle {
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          labmagicsectioncontent
          labmagicsectioncontentsmall
          labdiamondimage {
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          labwhipimage {
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          labproductimage {
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          labbadderimage {
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          labstarimage {
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
        }
        allyourssection {
          allyourssectionname
          allyourssectionlink
          allyourssectiontitle {
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          allyourssectioncontent
        }
        signaturesection {
          signaturesectionleft {
            signaturecontent
            signaturesectionleftimage {
              image {
                childImageSharp {
                  fluid(maxWidth: 600, quality: 92) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              alt
            }
            signaturesectionleftimage2 {
              image {
                childImageSharp {
                  fluid(maxWidth: 600, quality: 92) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              alt
            }
          }
          signaturesectionright {
            signaturecontent
            signaturesectionrightimage {
              image {
                childImageSharp {
                  fluid(maxWidth: 600, quality: 92) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              alt
            }
          }
        }
      }
    }
  }
`
