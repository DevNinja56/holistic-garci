import React from 'react'
import PropTypes from 'prop-types'
import { FaqPageTemplate } from '../../templates/faq-page'

const FaqPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  const entryfaqlist = entry.getIn(['data', 'faqcategorylist'])
  const faqcategorylist = entryfaqlist ? entryfaqlist.toJS() : []

  if (data) {
    return (
      <FaqPageTemplate
        faqpageheading={entry.getIn(['data', 'faqpageheading'])}
        faqcategorylist={faqcategorylist}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

FaqPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default FaqPagePreview
