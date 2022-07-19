import React from 'react'
import Lottie from 'react-lottie'
import PropTypes from 'prop-types'
import * as animationData from '../templates/process-page/Beaker.json'

const MagicLottie = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {isStopped: false, isPaused: false};
  // }

  // render() {
  const defaultOptions = {
    loop: false,
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
      isStopped={false}
      isPaused={isPaused}
    />
  )
}

MagicLottie.propTypes = {
  // Required props
  isPaused: PropTypes.bool.isRequired,
}

export default MagicLottie
