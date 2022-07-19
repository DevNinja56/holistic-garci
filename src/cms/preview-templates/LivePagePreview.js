import React from 'react'
import PropTypes from 'prop-types'
import { LivePageTemplate } from '../../templates/live-page'

const LivePagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  const entrySlider = entry.getIn(['data', 'livepageslider'])
  const livepageslider = entrySlider ? entrySlider.toJS() : []

  const entryLivesection = entry.getIn(['data', 'livepagesections'])
  const livepagesections = entryLivesection ? entryLivesection.toJS() : []

  if (data) {
    return (
      <LivePageTemplate
        livetoppart={{
          livepagelogo: {
            image: entry.getIn([
              'data',
              'livetoppart',
              'livepagelogo',
              'image',
            ]),
            alt: entry.getIn(['data', 'livetoppart', 'livepagelogo', 'alt']),
          },
          livetopcontent: entry.getIn([
            'data',
            'livetoppart',
            'livetopcontent',
          ]),
        }}
        livepagesliderheading={entry.getIn(['data', 'livepagesliderheading'])}
        livepageslider={livepageslider}
        livepagesections={livepagesections}
        livepagebottomcontent={entry.getIn(['data', 'livepagebottomcontent'])}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

LivePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default LivePagePreview
