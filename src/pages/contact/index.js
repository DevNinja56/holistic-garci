import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../../components/Content'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'
import ReactMarkdown from 'react-markdown'
import { v4 } from 'uuid'
import { useRef } from 'react'
import { Helmet } from 'react-helmet'
import { Strings } from '../../resources'
import './contact.scss'
import contactImg from '../../img/word-cloud.svg'
import usstates from './../../data/usstates'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      state: '',
      subject: '',
      message: '',
      progress: '',
      sent: '',
    }
  }

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onStateChange(event) {
    this.setState({ state: event.target.value })
  }

  onSubjectChange(event) {
    this.setState({ subject: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    //console.log('formsubmit', this.state);

    this.setState({
      progress: 'progress',
    })

    fetch(
      'https://contact-form.holisticindustries.com/api/site-contact',
      {
        method: 'POST',
        body: JSON.stringify({
          siteGuid: 'c8de8bab-4d61-49fa-b745-5e2e53bc83a2',
          name: this.state.name,
          email: this.state.email,
          state: this.state.state,
          subject: this.state.subject,
          message: this.state.message,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        // console.log('response', response)
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
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{Strings.contacttitle}</title>
          <meta name="description" content={Strings.contactdescription} />
        </Helmet>
        <section className="contact_section">
          <div className="wrap">
            <div className="contact-row">
              <div className="contact-form">
                <h1 className="h1-zilla-slab-—-90pt">Contact Us</h1>
                <form
                  method="post"
                  action="#"
                  className="contact-frm"
                  onSubmit={this.handleSubmit.bind(this)}
                >
                  <div className="frm">
                    <label htmlFor="name">Name: </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      value={this.state.name}
                      onChange={this.onNameChange.bind(this)}
                    />
                  </div>
                  <div className="frm">
                    <label htmlFor="email">email: </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.onEmailChange.bind(this)}
                      required
                    />
                  </div>
                  <div className="frm">
                    <div className="selectControl">
                      <label htmlFor="state">state: </label>
                      <select
                        name="state"
                        id="state"
                        value={this.state.state}
                        onChange={this.onStateChange.bind(this)}
                      >
                        <option value="0">Select your state</option>
                        <option value={usstates.Alabama}>
                          {usstates.Alabama}
                        </option>
                        <option value={usstates.Alaska}>
                          {usstates.Alaska}
                        </option>
                        <option value={usstates.Arizona}>
                          {usstates.Arizona}
                        </option>
                        <option value={usstates.Arkansas}>
                          {usstates.Arkansas}
                        </option>
                        <option value={usstates.California}>
                          {usstates.California}
                        </option>
                        <option value={usstates.Colorado}>
                          {usstates.Colorado}
                        </option>
                        <option value={usstates.Connecticut}>
                          {usstates.Connecticut}
                        </option>
                        <option value={usstates.Delaware}>
                          {usstates.Delaware}
                        </option>
                        <option value={usstates.Florida}>
                          {usstates.Florida}
                        </option>
                        <option value={usstates.Georgia}>
                          {usstates.Georgia}
                        </option>
                        <option value={usstates.Hawaii}>
                          {usstates.Hawaii}
                        </option>
                        <option value={usstates.Idaho}>{usstates.Idaho}</option>
                        <option value={usstates.Illinois}>
                          {usstates.Illinois}
                        </option>
                        <option value={usstates.Indiana}>
                          {usstates.Indiana}
                        </option>
                        <option value={usstates.Iowa}>{usstates.Iowa}</option>
                        <option value={usstates.Kansas}>
                          {usstates.Kansas}
                        </option>
                        <option value={usstates.Kentucky}>
                          {usstates.Kentucky}
                        </option>
                        <option value={usstates.Louisiana}>
                          {usstates.Louisiana}
                        </option>
                        <option value={usstates.Maine}>{usstates.Maine}</option>
                        <option value={usstates.Maryland}>
                          {usstates.Maryland}
                        </option>
                        <option value={usstates.Massachusetts}>
                          {usstates.Massachusetts}
                        </option>
                        <option value={usstates.Michigan}>
                          {usstates.Michigan}
                        </option>
                        <option value={usstates.Minnesota}>
                          {usstates.Minnesota}
                        </option>
                        <option value={usstates.Mississippi}>
                          {usstates.Mississippi}
                        </option>
                        <option value={usstates.Missouri}>
                          {usstates.Missouri}
                        </option>
                        <option value={usstates.Montana}>
                          {usstates.Montana}
                        </option>
                        <option value={usstates.Nebraska}>
                          {usstates.Nebraska}
                        </option>
                        <option value={usstates.Nevada}>
                          {usstates.Nevada}
                        </option>
                        <option value={usstates.NewHampshire}>
                          {usstates.NewHampshire}
                        </option>
                        <option value={usstates.NewJersey}>
                          {usstates.NewJersey}
                        </option>
                        <option value={usstates.NewMexico}>
                          {usstates.NewMexico}
                        </option>
                        <option value={usstates.NewYork}>
                          {usstates.NewYork}
                        </option>
                        <option value={usstates.NorthCarolina}>
                          {usstates.NorthCarolina}
                        </option>
                        <option value={usstates.NorthDakota}>
                          {usstates.NorthDakota}
                        </option>
                        <option value={usstates.Ohio}>{usstates.Ohio}</option>
                        <option value={usstates.Oklahoma}>
                          {usstates.Oklahoma}
                        </option>
                        <option value={usstates.Oregon}>
                          {usstates.Oregon}
                        </option>
                        <option value={usstates.Pennsylvania}>
                          {usstates.Pennsylvania}
                        </option>
                        <option value={usstates.RhodeIsland}>
                          {usstates.RhodeIsland}
                        </option>
                        <option value={usstates.SouthCarolina}>
                          {usstates.SouthCarolina}
                        </option>
                        <option value={usstates.SouthDakota}>
                          {usstates.SouthDakota}
                        </option>
                        <option value={usstates.Tennessee}>
                          {usstates.Tennessee}
                        </option>
                        <option value={usstates.Texas}>{usstates.Texas}</option>
                        <option value={usstates.Utah}>{usstates.Utah}</option>
                        <option value={usstates.Vermont}>
                          {usstates.Vermont}
                        </option>
                        <option value={usstates.Virginia}>
                          {usstates.Virginia}
                        </option>
                        <option value={usstates.Washington}>
                          {usstates.Washington}
                        </option>
                        <option value={usstates.WashingtonDC}>
                          {usstates.WashingtonDC}
                        </option>
                        <option value={usstates.WestVirginia}>
                          {usstates.WestVirginia}
                        </option>
                        <option value={usstates.Wisconsin}>
                          {usstates.Wisconsin}
                        </option>
                        <option value={usstates.Wyoming}>
                          {usstates.Wyoming}
                        </option>
                        <option value={usstates.Other}>{usstates.Other}</option>
                      </select>
                    </div>
                  </div>
                  <div className="frm">
                    <label htmlFor="subject">subject: </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Subject line"
                      value={this.state.subject}
                      onChange={this.onSubjectChange.bind(this)}
                    />
                  </div>
                  <div className="frm">
                    <label htmlFor="message">message: </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="5"
                      placeholder="Message"
                      value={this.state.message}
                      onChange={this.onMessageChange.bind(this)}
                    />
                  </div>
                  <button
                    type="submit"
                    className={`sumitbutton ${this.state.sent} ${this.state.progress}`}
                  >
                    Submit
                  </button>
                </form>
              </div>
              <div className="contact-image">
                <img
                  src={contactImg}
                  alt="word cloud: kush, dank, vape, inhale, exhale, haze, relax, unwind, and awake"
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
