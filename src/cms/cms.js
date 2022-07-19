import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import StranePagePreview from './preview-templates/StranePagePreview'
import LivePagePreview from './preview-templates/LivePagePreview'
import PaxPagePreview from './preview-templates/PaxPagePreview'
import FaqPagePreview from './preview-templates/FaqPagePreview'
import PrivacypolicyPagePreview from './preview-templates/PrivacypolicyPagePreview'
import ProcessPagePreview from './preview-templates/ProcessPagePreview'

import styles from './preview-templates/previewcms.scss'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('strane', StranePagePreview)
CMS.registerPreviewTemplate('live', LivePagePreview)
CMS.registerPreviewTemplate('pax', PaxPagePreview)
CMS.registerPreviewTemplate('faq', FaqPagePreview)
CMS.registerPreviewTemplate('privacypolicy', PrivacypolicyPagePreview)
CMS.registerPreviewTemplate('process', ProcessPagePreview)
