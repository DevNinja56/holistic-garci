import React from 'react'
import Modal from 'react-modal'
import holisticlogo from '../img/Strane_Logo_white.svg'
import { Strings } from './../resources'

const customStyles = {
  content: {
    top: '-2px',
    left: '-2px',
    right: '-2px',
    bottom: '-2px',
    background: 'none',
  },
}

const FirstModal = class extends React.Component {
  state = {
    modalIsOpen: false,
  }

  openModal = () => {
    this.setState({ modalIsOpen: true })
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  // componentDidMount() {
  //   let visited = localStorage['alreadyVisited']
  //   if (visited) {
  //     this.setState({ modalIsOpen: false })
  //     //do not view Popup
  //   } else {
  //     //this is the first time
  //     localStorage['alreadyVisited'] = true
  //     this.setState({ modalIsOpen: true })
  //   }
  // }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.modalIsOpen}
          // onRequestClose={this.props.closeModal}
          style={customStyles}
        >
          <section className="overlay">
            <div className="wrap">
              <div className="overlay-content">
                <div className="overlay-top">
                  <div className="logo">
                    <img src={holisticlogo} />
                  </div>
                  <div className="title">
                    <h2>{Strings.modelareyou21}</h2>
                  </div>
                  <div className="btn-wrap">
                    <div>
                      <a href="#" onClick={this.props.closeModal} className="btn">
                        {Strings.youknowit}
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://en.wikipedia.org/wiki/Minors_and_the_legality_of_cannabis"
                        rel="noreferrer"
                        target="_blank"
                        className="btn"
                      >
                        {Strings.notyet}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="overlay-btm">
                  <p className="p-white-barlow-—-34pt">
                    {Strings.termsmodel}
                    <a
                      rel="noreferrer"
                      href="https://holisticindustries.com/terms-of-service"
                      target="_blank"
                    >
                      {Strings.termsofservices}
                    </a>{' '}
                    {Strings.andtext}{' '}
                    <a
                      href="https://holisticindustries.com/privacy-policy"
                      rel="noreferrer"
                      target="_blank"
                    >
                      {Strings.privacypolicytext}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Modal>
      </div>
    )
  }
}

export default FirstModal
