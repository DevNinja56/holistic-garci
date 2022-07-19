import React from 'react'
import PropTypes from 'prop-types'
import { PaxPageTemplate } from '../../templates/pax-page'

const PaxPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  const entryPaxsection = entry.getIn(['data', 'paxpagesections'])
  const paxpagesections = entryPaxsection ? entryPaxsection.toJS() : []

  const entryPaxslider = entry.getIn(['data', 'paxpageslider'])
  const paxpageslider = entryPaxslider ? entryPaxslider.toJS() : []

  const entryPaxsection2 = entry.getIn(['data', 'paxpagesections2'])
  const paxpagesections2 = entryPaxsection2 ? entryPaxsection2.toJS() : []

  if (data) {
    return (
      <PaxPageTemplate
        paxtoppart={{
          paxpagelogo: {
            image: entry.getIn(['data', 'paxtoppart', 'paxpagelogo', 'image']),
            alt: entry.getIn(['data', 'paxtoppart', 'paxpagelogo', 'alt']),
          },
          paxpagelogoright: {
            image: entry.getIn([
              'data',
              'paxtoppart',
              'paxpagelogoright',
              'image',
            ]),
            alt: entry.getIn(['data', 'paxtoppart', 'paxpagelogoright', 'alt']),
          },
          paxtopcontent: entry.getIn(['data', 'paxtoppart', 'paxtopcontent']),
        }}
        paxpagesections={paxpagesections}
        paxpagesliderheading={entry.getIn(['data', 'paxpagesliderheading'])}
        paxpageslider={paxpageslider}
        paxpagesections2={paxpagesections2}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

PaxPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PaxPagePreview
