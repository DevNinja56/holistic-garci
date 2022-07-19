import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        homebanner={{
          bannertitle: entry.getIn(['data', 'homebanner', 'bannertitle']),
          stranebannerlogo: {
            image: entry.getIn([
              'data',
              'homebanner',
              'stranebannerlogo',
              'image',
            ]),
            alt: entry.getIn(['data', 'homebanner', 'stranebannerlogo', 'alt']),
          },
          eyehybridimage: {
            image: entry.getIn([
              'data',
              'homebanner',
              'eyehybridimage',
              'image',
            ]),
            alt: entry.getIn(['data', 'homebanner', 'eyehybridimage', 'alt']),
          },
          homeblackflowerblock: {
            image: entry.getIn([
              'data',
              'homebanner',
              'homeblackflowerblock',
              'image',
            ]),
            alt: entry.getIn([
              'data',
              'homebanner',
              'homeblackflowerblock',
              'alt',
            ]),
          },
          homegreydiamondblock: {
            image: entry.getIn([
              'data',
              'homebanner',
              'homegreydiamondblock',
              'image',
            ]),
            alt: entry.getIn([
              'data',
              'homebanner',
              'homegreydiamondblock',
              'alt',
            ]),
          },
          homegreydiamondtextblock: {
            image: entry.getIn([
              'data',
              'homebanner',
              'homegreydiamondtextblock',
              'image',
            ]),
            alt: entry.getIn([
              'data',
              'homebanner',
              'homegreydiamondtextblock',
              'alt',
            ]),
          },
          homeyellowcartblock: {
            image: entry.getIn([
              'data',
              'homebanner',
              'homeyellowcartblock',
              'image',
            ]),
            alt: entry.getIn([
              'data',
              'homebanner',
              'homeyellowcartblock',
              'alt',
            ]),
          },
          iconcrownblack: {
            image: entry.getIn([
              'data',
              'homebanner',
              'iconcrownblack',
              'image',
            ]),
            alt: entry.getIn(['data', 'homebanner', 'iconcrownblack', 'alt']),
          },
          bannerbottomtext: entry.getIn([
            'data',
            'homebanner',
            'bannerbottomtext',
          ]),
        }}
        stranetwoblocks={{
          stranefirstblock: {
            straneblocklogo: {
              image: entry.getIn([
                'data',
                'stranetwoblocks',
                'stranefirstblock',
                'straneblocklogo',
                'image',
              ]),
              alt: entry.getIn([
                'data',
                'stranetwoblocks',
                'stranefirstblock',
                'straneblocklogo',
                'alt',
              ]),
            },
            content: entry.getIn([
              'data',
              'stranetwoblocks',
              'stranefirstblock',
              'content',
            ]),
            buttontext: entry.getIn([
              'data',
              'stranetwoblocks',
              'stranefirstblock',
              'buttontext',
            ]),
          },
          stranesecondblock: {
            straneblocklogo: {
              image: entry.getIn([
                'data',
                'stranetwoblocks',
                'stranesecondblock',
                'straneblocklogo',
                'image',
              ]),
              alt: entry.getIn([
                'data',
                'stranetwoblocks',
                'stranesecondblock',
                'straneblocklogo',
                'alt',
              ]),
            },
            content: entry.getIn([
              'data',
              'stranetwoblocks',
              'stranesecondblock',
              'content',
            ]),
            buttontext: entry.getIn([
              'data',
              'stranetwoblocks',
              'stranesecondblock',
              'buttontext',
            ]),
          },
        }}
        threetab={{
          tab1: {
            vapcloud: {
              image: entry.getIn([
                'data',
                'threetab',
                'tab1',
                'vapcloud',
                'image',
              ]),
              alt: entry.getIn(['data', 'threetab', 'tab1', 'vapcloud', 'alt']),
            },
            vapitimage: {
              image: entry.getIn([
                'data',
                'threetab',
                'tab1',
                'vapitimage',
                'image',
              ]),
              alt: entry.getIn([
                'data',
                'threetab',
                'tab1',
                'vapitimage',
                'alt',
              ]),
            },
            paxicon: {
              image: entry.getIn([
                'data',
                'threetab',
                'tab1',
                'paxicon',
                'image',
              ]),
              alt: entry.getIn(['data', 'threetab', 'tab1', 'paxicon', 'alt']),
            },
            leftcontent: entry.getIn([
              'data',
              'threetab',
              'tab1',
              'leftcontent',
            ]),
            leftlinktext: entry.getIn([
              'data',
              'threetab',
              'tab1',
              'leftlinktext',
            ]),
            leftlink: entry.getIn(['data', 'threetab', 'tab1', 'leftlink']),
            rightcontent: entry.getIn([
              'data',
              'threetab',
              'tab1',
              'rightcontent',
            ]),
            rightlinktext: entry.getIn([
              'data',
              'threetab',
              'tab1',
              'rightlinktext',
            ]),
            rightlink: entry.getIn(['data', 'threetab', 'tab1', 'rightlink']),
          },
          tab2: {
            smokecloud: {
              image: entry.getIn([
                'data',
                'threetab',
                'tab2',
                'smokecloud',
                'image',
              ]),
              alt: entry.getIn([
                'data',
                'threetab',
                'tab2',
                'smokecloud',
                'alt',
              ]),
            },
            smokeimage: {
              image: entry.getIn([
                'data',
                'threetab',
                'tab2',
                'smokeimage',
                'image',
              ]),
              alt: entry.getIn([
                'data',
                'threetab',
                'tab2',
                'smokeimage',
                'alt',
              ]),
            },
            smokejoint: {
              image: entry.getIn([
                'data',
                'threetab',
                'tab2',
                'smokejoint',
                'image',
              ]),
              alt: entry.getIn([
                'data',
                'threetab',
                'tab2',
                'smokejoint',
                'alt',
              ]),
            },
            leftcontent: entry.getIn([
              'data',
              'threetab',
              'tab2',
              'leftcontent',
            ]),
            leftlinktext: entry.getIn([
              'data',
              'threetab',
              'tab2',
              'leftlinktext',
            ]),
            leftlink: entry.getIn(['data', 'threetab', 'tab2', 'leftlink']),
            rightcontent: entry.getIn([
              'data',
              'threetab',
              'tab2',
              'rightcontent',
            ]),
            rightlinktext: entry.getIn([
              'data',
              'threetab',
              'tab2',
              'rightlinktext',
            ]),
            rightlink: entry.getIn(['data', 'threetab', 'tab2', 'rightlink']),
          },
          tab3: {
            dabrig: {
              image: entry.getIn([
                'data',
                'threetab',
                'tab3',
                'dabrig',
                'image',
              ]),
              alt: entry.getIn(['data', 'threetab', 'tab3', 'dabrig', 'alt']),
            },
            dabimage: {
              image: entry.getIn([
                'data',
                'threetab',
                'tab3',
                'dabimage',
                'image',
              ]),
              alt: entry.getIn(['data', 'threetab', 'tab3', 'dabimage', 'alt']),
            },
            dabtool: {
              image: entry.getIn([
                'data',
                'threetab',
                'tab3',
                'dabtool',
                'image',
              ]),
              alt: entry.getIn(['data', 'threetab', 'tab3', 'dabtool', 'alt']),
            },
            dabtorch: {
              image: entry.getIn([
                'data',
                'threetab',
                'tab3',
                'dabtorch',
                'image',
              ]),
              alt: entry.getIn(['data', 'threetab', 'tab3', 'dabtorch', 'alt']),
            },
            leftcontent: entry.getIn([
              'data',
              'threetab',
              'tab3',
              'leftcontent',
            ]),
            leftlinktext: entry.getIn([
              'data',
              'threetab',
              'tab3',
              'leftlinktext',
            ]),
            leftlink: entry.getIn(['data', 'threetab', 'tab3', 'leftlink']),
            rightcontent: entry.getIn([
              'data',
              'threetab',
              'tab3',
              'rightcontent',
            ]),
            rightlinktext: entry.getIn([
              'data',
              'threetab',
              'tab3',
              'rightlinktext',
            ]),
            rightlink: entry.getIn(['data', 'threetab', 'tab3', 'rightlink']),
          },
        }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
