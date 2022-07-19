import React from 'react'
import Lottie from 'react-lottie'
import * as animationData from '../templates/index-page/Eyecons.json'
import PropTypes from 'prop-types'

const Eyecons = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {isStopped: false, isPaused: false};
  // }

  // render() {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  const { isPaused } = props
  return (
    <Lottie
      options={defaultOptions}
      width={'100%'}
      isStopped={true}
      isPaused={false}
    />
  )
}
// }

Eyecons.propTypes = {
  // Required props
  // isPaused: PropTypes.bool.isRequired,
}

export default Eyecons
