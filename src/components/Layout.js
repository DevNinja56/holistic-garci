import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'
import { Header } from '../components/Header'
import '../assets/css/all.scss'
import '../assets/css/config.scss'
import '../assets/css/innerpages.scss'
import '../assets/css/media.scss'
import FirstModal from './Modal'
import StashUpdate from './StashUpdate'
import { withPrefix } from 'gatsby'
import { FooterTemplate } from '../components/Footer'

const TemplateWrapper = ({ children }) => {
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [stashUpdate, setStashUpdate] = useState(false);

  useEffect(() => {
    let visited = localStorage['alreadyVisited']
    if (visited) {
      setShowFirstModal(false);
      //do not view Popup
    } else {
      //this is the first time
      localStorage['alreadyVisited'] = true
      setShowFirstModal(true);
    }

  }, [])

  // useEffect(() => {
  //   let visited = localStorage["alreadyVisited"];
  //   if (!visited) {
  //     setShowFirstModal(!showFirstModal);
  //   }
  // }, [])

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <link rel="icon" href={`${withPrefix('/')}img/Strane_S.svg`} />
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        /> */}

        {typeof window !== 'undefined' ? (
          document.location.origin === 'https://thisisstrane.com' ? (
            <script>
              {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WSKZHXX');
          `}
            </script>
          ) : null
        ) : null}
      </Helmet>

      <Header />
      <FirstModal modalIsOpen={showFirstModal} closeModal={() => { setShowFirstModal(false); setStashUpdate(true) }} />
      <StashUpdate modalIsOpen={stashUpdate} closeModal={() => { setStashUpdate(false) }} />
      <FirstModal />
      <StashUpdate />
      <div className="page-container">
        {typeof window !== 'undefined' ? (
          document.location.origin === 'https://thisisstrane.com' ? (
            <noscript>
              {`<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WSKZHXX" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}
            </noscript>
          ) : null
        ) : null}
        {children}
      </div>
      <FooterTemplate />
    </div>
  )
}

export default TemplateWrapper
