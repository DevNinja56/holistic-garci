import React from 'react'
import PropTypes from 'prop-types'
import { StranePageTemplate } from '../../templates/strane-page'

const StranePagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  const entryStickynav = entry.getIn(['data', 'stranepagesections'])
  const stranepagesections = entryStickynav ? entryStickynav.toJS() : []

  if (data) {
    return (
      <StranePageTemplate
        stranetoppart={{
          stranelogo: {
            image: entry.getIn([
              'data',
              'stranetoppart',
              'stranelogo',
              'image',
            ]),
            alt: entry.getIn(['data', 'stranetoppart', 'stranelogo', 'alt']),
          },
          stranetopcontent: entry.getIn([
            'data',
            'stranetoppart',
            'stranetopcontent',
          ]),
        }}
        stranepagesections={stranepagesections}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

StranePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default StranePagePreview
