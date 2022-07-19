import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import facebookicon from '../img/Facebook.png'
import instaicon from '../img/Instagram.png'
import send from '../img/Submit.svg'
import { Strings } from './../resources'

class FooterTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      progress: '',
      sent: '',
    }
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()

    this.setState({
      progress: 'progress',
    })

    fetch(
      'https://contact-form.holisticindustries.com/api/site-contact',
      {
        method: 'POST',
        body: JSON.stringify({
          siteGuid: 'c8de8bab-4d61-49fa-b745-5e2e53bc83a2',
          email: this.state.email,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        return this.setState({
          sent: 'senticon',
          progress: '',
        })

        this.resetForm()
        // if (response.status === 'success') {
        //   alert("Message Sent.");

        // } else if(response.status === 'fail') {
        //   alert("Message failed to send.")
        // }
      })
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      state: '',
      subject: '',
      message: '',
    })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query FooterTemplate {
            markdownRemark(frontmatter: { templateKey: { eq: "footer" } }) {
              frontmatter {
                leftpart {
                  contactus
                  email
                }
                rightpart {
                  pagewithlink {
                    pagename1
                    pagelink1
                  }
                  pagewithlink2 {
                    pagename2
                    pagelink2
                  }
                  copyright
                }
              }
            }
          }
        `}
        render={(data) => (
          <footer className="footer">
            <div className="footer-inner">
              <div className="footer-left">
                <p>
                  <Link
                    to="/contact"
                    onClick={() => {
                      window.scrollTo(0, 0)
                    }}
                  >
                    {data.markdownRemark.frontmatter.leftpart.contactus}
                  </Link>
                </p>
                <p>
                  <a
                    href={
                      'mailto:' + data.markdownRemark.frontmatter.leftpart.email
                    }
                  >
                    {data.markdownRemark.frontmatter.leftpart.email}
                  </a>
                </p>
                <ul className="social">
                  <li>
                    <a
                      href="https://www.facebook.com/strane"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img src={facebookicon} alt={Strings.facebookalt} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/thisisstrane/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img src={instaicon} alt={Strings.instagramalt} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-middle">
                <div className="get-update">
                  <h6>Get Updates</h6>
                  <div className="get-update-frm">
                    <form
                      method="post"
                      action="#"
                      onSubmit={this.handleSubmit.bind(this)}
                    >
                      <label htmlFor="emailfooter">
                        {Strings.emailaddresstext}
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="emailfooter"
                        placeholder={Strings.emailaddresstext}
                        value={this.state.email}
                        onChange={this.onEmailChange.bind(this)}
                        required
                      />
                      <button
                        type="submit"
                        className={`${this.state.sent} ${this.state.progress}`}
                      >
                        <img src={send} alt="Send" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="footer-right">
                <ul className="footer-nav">
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={
                        data.markdownRemark.frontmatter.rightpart.pagewithlink
                          .pagelink1
                      }
                      onClick={() => {
                        window.scrollTo(0, 0)
                      }}
                    >
                      {
                        data.markdownRemark.frontmatter.rightpart.pagewithlink
                          .pagename1
                      }
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={
                        data.markdownRemark.frontmatter.rightpart.pagewithlink2
                          .pagelink2
                      }
                      onClick={() => {
                        window.scrollTo(0, 0)
                      }}
                    >
                      {
                        data.markdownRemark.frontmatter.rightpart.pagewithlink2
                          .pagename2
                      }
                    </a>
                  </li>
                </ul>
                <p className="copyright">
                  {data.markdownRemark.frontmatter.rightpart.copyright}
                </p>
              </div>
            </div>
          </footer>
        )}
      />
    )
  }
}

export { FooterTemplate }
