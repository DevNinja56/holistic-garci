import React from 'react'
import PropTypes from 'prop-types'
import { ProcessPageTemplate } from '../../templates/process-page'

const ProcessPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  // const entryStickynav = entry.getIn(['data', 'stranepagesections'])
  // const stranepagesections = entryStickynav ? entryStickynav.toJS() : []

  if (data) {
    return (
      <ProcessPageTemplate
        goingback={{
          goingbacksectionname: entry.getIn([
            'data',
            'goingback',
            'goingbacksectionname',
          ]),
          journeyheading: entry.getIn(['data', 'goingback', 'journeyheading']),
          goingbacktitle: {
            image: entry.getIn([
              'data',
              'goingback',
              'goingbacktitle',
              'image',
            ]),
            alt: entry.getIn(['data', 'goingback', 'goingbacktitle', 'alt']),
          },
          goingbackcontent: entry.getIn([
            'data',
            'goingback',
            'goingbackcontent',
          ]),
          goingbackcrownimage: {
            image: entry.getIn([
              'data',
              'goingback',
              'goingbackcrownimage',
              'image',
            ]),
            alt: entry.getIn([
              'data',
              'goingback',
              'goingbackcrownimage',
              'alt',
            ]),
          },
          goingbackcrowntext: entry.getIn([
            'data',
            'goingback',
            'goingbackcrowntext',
          ]),
        }}
        seedsection={{
          seedsectionname: entry.getIn([
            'data',
            'seedsection',
            'seedsectionname',
          ]),
          searchseedcontent: entry.getIn([
            'data',
            'seedsection',
            'searchseedcontent',
          ]),
          searchseedtitle: {
            image: entry.getIn([
              'data',
              'seedsection',
              'searchseedtitle',
              'image',
            ]),
            alt: entry.getIn(['data', 'seedsection', 'searchseedtitle', 'alt']),
          },
        }}
        cultivatesection={{
          cultivatesectionname: entry.getIn([
            'data',
            'cultivatesection',
            'cultivatesectionname',
          ]),
          cultivatetitle: {
            image: entry.getIn([
              'data',
              'cultivatesection',
              'cultivatetitle',
              'image',
            ]),
            alt: entry.getIn([
              'data',
              'cultivatesection',
              'cultivatetitle',
              'alt',
            ]),
          },
          cultivatecontent: entry.getIn([
            'data',
            'cultivatesection',
            'cultivatecontent',
          ]),
          cultivatecontent2: entry.getIn([
            'data',
            'cultivatesection',
            'cultivatecontent2',
          ]),
          cultivatewatering: {
            image: entry.getIn([
              'data',
              'cultivatesection',
              'cultivatewatering',
              'image',
            ]),
            alt: entry.getIn([
              'data',
              'cultivatesection',
              'cultivatewatering',
              'alt',
            ]),
          },
          cultivateflower: {
            image: entry.getIn([
              'data',
              'cultivatesection',
              'cultivateflower',
              'image',
            ]),
            alt: entry.getIn([
              'data',
              'cultivatesection',
              'cultivateflower',
              'alt',
            ]),
          },
        }}
        harvestsection={{
          harvestsectionname: entry.getIn([
            'data',
            'harvestsection',
            'harvestsectionname',
          ]),
          harvestsectiontitle: {
            image: entry.getIn([
              'data',
              'harvestsection',
              'harvestsectiontitle',
              'image',
            ]),
            alt: entry.getIn([
              'data',
              'harvestsection',
              'harvestsectiontitle',
              'alt',
            ]),
          },
          harvestcontent: entry.getIn([
            'data',
            'harvestsection',
            'harvestcontent',
          ]),
          harvestcontent2: entry.getIn([
            'data',
            'harvestsection',
            'harvestcontent2',
          ]),
          harvesthappyimage: {
            image: entry.getIn([
              'data',
              'harvestsection',
              'harvesthappyimage',
              'image',
            ]),
            alt: entry.getIn([
              'data',
              'harvestsection',
              'harvesthappyimage',
              'alt',
            ]),
          },
        }}
        labmagicsection={{
          labmagicsectionname: entry.getIn([
            'data',
            'labmagicsection',
            'labmagicsectionname',
          ]),
          labmagicsectiontitle: {
            image: entry.getIn([
              'data',
              'labmagicsection',
              'labmagicsectiontitle',
              'image',
            ]),
            alt: entry.getIn([
              'data',
              'labmagicsection',
              'labmagicsectiontitle',
              'alt',
            ]),
          },
          labmagicsectioncontent: entry.getIn([
            'data',
            'labmagicsection',
            'labmagicsectioncontent',
          ]),
          labmagicsectioncontentsmall: entry.getIn([
            'data',
            'labmagicsection',
            'labmagicsectioncontentsmall',
          ]),
          labdiamondimage: {
            image: entry.getIn([
              'data',
              'labmagicsection',
              'labdiamondimage',
              'image',
            ]),
            alt: entry.getIn([
              'data',
              'labmagicsection',
              'labdiamondimage',
              'alt',
            ]),
          },
          labwhipimage: {
            image: entry.getIn([
              'data',
              'labmagicsection',
              'labwhipimage',
              'image',
            ]),
            alt: entry.getIn([
              'data',
              'labmagicsection',
              'labwhipimage',
              'alt',
            ]),
          },
          labproductimage: {
            image: entry.getIn([
              'data',
              'labmagicsection',
              'labproductimage',
              'image',
            ]),
            alt: entry.getIn([
              'data',
              'labmagicsection',
              'labproductimage',
              'alt',
            ]),
          },
          labbadderimage: {
            image: entry.getIn([
              'data',
              'labmagicsection',
              'labbadderimage',
              'image',
            ]),
            alt: entry.getIn([
              'data',
              'labmagicsection',
              'labbadderimage',
              'alt',
            ]),
          },
          labstarimage: {
            image: entry.getIn([
              'data',
              'labmagicsection',
              'labstarimage',
              'image',
            ]),
            alt: entry.getIn([
              'data',
              'labmagicsection',
              'labstarimage',
              'alt',
            ]),
          },
        }}
        allyourssection={{
          allyourssectionname: entry.getIn([
            'data',
            'allyourssection',
            'allyourssectionname',
          ]),
          allyourssectiontitle: {
            image: entry.getIn([
              'data',
              'allyourssection',
              'allyourssectiontitle',
              'image',
            ]),
            alt: entry.getIn([
              'data',
              'allyourssection',
              'allyourssectiontitle',
              'alt',
            ]),
          },
          allyourssectioncontent: entry.getIn([
            'data',
            'allyourssection',
            'allyourssectioncontent',
          ]),
        }}
        signaturesection={{
          signaturesectionleft: {
            signaturecontent: entry.getIn([
              'data',
              'signaturesection',
              'signaturesectionleft',
              'signaturecontent',
            ]),
            signaturesectionleftimage: {
              image: entry.getIn([
                'data',
                'signaturesection',
                'signaturesectionleft',
                'signaturesectionleftimage',
                'image',
              ]),
              alt: entry.getIn([
                'data',
                'signaturesection',
                'signaturesectionleft',
                'signaturesectionleftimage',
                'alt',
              ]),
            },
            signaturesectionleftimage2: {
              image: entry.getIn([
                'data',
                'signaturesection',
                'signaturesectionleft',
                'signaturesectionleftimage2',
                'image',
              ]),
              alt: entry.getIn([
                'data',
                'signaturesection',
                'signaturesectionleft',
                'signaturesectionleftimage2',
                'alt',
              ]),
            },
          },
          signaturesectionright: {
            signaturesectionrightimage: {
              image: entry.getIn([
                'data',
                'signaturesection',
                'signaturesectionright',
                'signaturesectionrightimage',
                'image',
              ]),
              alt: entry.getIn([
                'data',
                'signaturesection',
                'signaturesectionright',
                'signaturesectionrightimage',
                'alt',
              ]),
            },
            signaturecontent: entry.getIn([
              'data',
              'signaturesection',
              'signaturesectionright',
              'signaturecontent',
            ]),
          },
        }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

ProcessPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ProcessPagePreview
