import React, { useState, useRef } from "react";
import Modal from "react-modal";
import { Strings } from "./../resources";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const customStyles = {
  content: {
    top: "-2px",
    left: "-2px",
    right: "-2px",
    bottom: "-2px",
    background: "none",
  },
};

const options = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "Washington D.C.",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
  "Other",
];

function StashUpdate(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(true);

  const [state, setState] = useState(true);
  const [name, setName] = useState(true);
  const [email, setEmail] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

  const inputUserName = useRef(null);
  const inputUserEmail = useRef(null);
  const inputUserState = useRef(null);
  const [progress, setProgress] = useState("");
  const [sent, setSent] = useState("");

  const [selectedState, setSelectedState] = useState(null);
  const onSelectState = (event) => {
    if (event.value === null) {
      setState(false);
      setErrorMessage(true);
    } else {
      setState(true);
      setErrorMessage(false);
    }
    setSelectedState(event.value);
  };

  const [userName, setUserName] = useState(null);
  const onNameChange = (event) => {
    var name = event.target;
    if (name.value.length < 1) {
      setName(false);
      setErrorMessage(true);
    } else {
      setName(true);
      setErrorMessage(false);
    }
    setUserName(name.value);
  };

  const EMAIL_VALIDATION_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [userEmail, setUserEmail] = useState(null);
  const onEmailChange = (event) => {
    var email = event.target;

    if (!EMAIL_VALIDATION_REGEX.test(email.value)) {
      setEmail(false);
      setErrorMessage(true);
    } else {
      setEmail(true);
      setErrorMessage(false);
    }
    setUserEmail(email.value);
  };

  const handleSubmit = () => {
    setProgress("progress");

    fetch("https://contact-form.holisticindustries.com/api/site-contact", {
      method: "POST",
      body: JSON.stringify({
        siteGuid: "c8de8bab-4d61-49fa-b745-5e2e53bc83a2",
        name: state,
        email: email,
        state: state,
        action: "subscribe",
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("response", response);
        setProgress("");
        setSent("senticon");
        props.closeModal();
      });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    var name = userName;
    var email = userEmail;
    var state = selectedState;

    var isValid = true;

    if (state === null) {
      setState(false);
      isValid = false;
    } else {
      setState(true);
      isValid = true;
    }

    if (!name || name.length < 1) {
      setName(false);
      isValid = false;
    } else {
      setName(true);
      isValid = true;
    }

    if (!EMAIL_VALIDATION_REGEX.test(email)) {
      setEmail(false);
      isValid = false;
    } else {
      setEmail(true);
      isValid = true;
    }

    if (isValid) {
      handleSubmit();
    }
  };

  const closeModal = (e) => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(!modalIsOpen);
        }}
        style={customStyles}
      >
        <section className="overlay">
          <div className="wrap">
            <div className="overlay-content text-center">
              <div className="stash-update-content">
                <a href="#" onClick={props.closeModal} className="btn-close">
                  X
                </a>
                <h4>THIS IS THE INSIDE SCOOP.</h4>
                <p>
                  Share your email below and we’ll share highly considered
                  updates on Strane and Strane LIVE products, partners, events
                  and more.
                </p>
                <form name="Contact Form" method="POST" onSubmit={sendEmail}>
                  <div className={`frm-row ${!name ? "error" : ""} `}>
                    <input
                      type="text"
                      className="form-control name"
                      id="name"
                      ref={inputUserName}
                      onChange={(event) => onNameChange(event)}
                      placeholder="Name"
                    />
                  </div>
                  <div className={`frm-row ${!email ? "error" : ""} `}>
                    <input
                      type="text"
                      className="form-control email"
                      id="email"
                      ref={inputUserEmail}
                      onChange={(event) => onEmailChange(event)}
                      placeholder="Email"
                    />
                  </div>
                  <div className={`frm-row ${!state ? "error" : ""} `}>
                    <div
                      className="col-12 col-sm-12 col-md-6"
                      ref={inputUserState}
                    >
                      <Dropdown
                        options={options}
                        onChange={(event) => onSelectState(event)}
                        value={selectedState}
                        placeholder={"Select your state"}
                        id="state"
                        controlClassName="select-control"
                        menuClassName="myMenuClassName"
                        placeholderClassName="myPlaceholderClassName"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className={`btn btn-minWidth getButton ${sent} ${progress}`}
                  >
                    {Strings.getittext}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Modal>
    </div>
  );
}

export default StashUpdate;
