import React from 'react'
import PropTypes from 'prop-types'
import { PrivacypolicyTemplate } from '../../templates/privacypolicy-page'

const PrivacypolicyPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <PrivacypolicyTemplate
        privacypolicy={entry.getIn(['data', 'privacypolicy'])}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

PrivacypolicyPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PrivacypolicyPagePreview
