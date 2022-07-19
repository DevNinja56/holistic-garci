import React, { Component } from 'react'
import Lottie from 'react-lottie'
import * as animationData from '../templates/process-page/tree.json'

class GoingTree extends Component {
  constructor(props) {
    super(props)
    this.state = { isStopped: false, isPaused: false }
  }

  render() {
    const defaultOptions = {
      loop: true,
      animationData: animationData.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    }
    return (
      <Lottie
        options={defaultOptions}
        width={'100%'}
        isStopped={this.state.isStopped}
        isPaused={this.state.isPaused}
      />
    )
  }
}

export { GoingTree }
