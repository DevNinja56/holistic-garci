import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Strings } from './../resources'

import holisticlogo from '../img/Strane_Logo_white.svg'
import facebook from '../img/social/facebook-white.svg'
import instagram from '../img/social/instagram-white.svg'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  navclick = () => {
    this.setState({
      navBarActiveClass: '',
    })
    window.scrollTo(0, 0)
  }
  componentDidMount() {
    if (typeof window !== `undefined`) {
      window.addEventListener('scroll', () => {
        let activeClass = 'normal'
        if (window.scrollY > 400) {
          activeClass = 'top'
        }
        this.setState({ activeClass })
      })
    }
  }

  render() {
    return (
      <header id="header" className={`${this.state.activeClass}`}>
        <div className="wrap">
          <div className="header-inner">
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
            </div>

            <a
              href="/"
              onClick={() => this.navclick()}
              className={`logo ${this.state.activeClass}`}
              title="Strane"
            >
              <img src={holisticlogo} alt="Strane Homepage" />
            </a>
            <nav
              id="navMenu"
              className={`nav ${this.state.navBarActiveClass} ${this.state.activeClass}`}
            >
              <ul className="displayflex">
                <li>
                  <Link
                    to="/strane"
                    activeClassName="active"
                    onClick={() => this.navclick()}
                  >
                    {Strings.strane}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/live"
                    activeClassName="active"
                    onClick={() => this.navclick()}
                  >
                    {Strings.live}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/stash"
                    activeClassName="active"
                    onClick={() => this.navclick()}
                  >
                    {Strings.stash}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pax"
                    activeClassName="active"
                    onClick={() => this.navclick()}
                  >
                    {Strings.pax}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/process"
                    activeClassName="active"
                    onClick={() => this.navclick()}
                  >
                    {Strings.process}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    activeClassName="active"
                    onClick={() => this.navclick()}
                  >
                    {Strings.faq}
                  </Link>
                </li>
              </ul>
              <ul className="menu-social">
                <li className="facebook-icon">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/strane"
                  >
                    {' '}
                    <img src={facebook} alt={Strings.facebookalt} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/thisisstrane/"
                  >
                    {' '}
                    <img src={instagram} alt={Strings.instagramalt} />
                  </a>
                </li>
              </ul>
            </nav>

            <Link
              to="/findastore"
              className="find-store"
              activeClassName="active"
              onClick={() => this.navclick()}
            >
              <span>{Strings.find_store}</span>
            </Link>
          </div>
        </div>
      </header>
    )
  }
}

export { Header }
