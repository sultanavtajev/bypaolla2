"use client";
import { useState } from "react";
import axios from "axios";

// To handle sending form message
const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });

  /**
   * Change {formData} variable when user input data
   *
   * @param e change event in form inputs
   */
  const handleDataChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /**
   * Handle the http request we sent to send our message (that user wrote)
   * and give message to the user to know what happened, is the message sent or not.
   *
   * @param ok if message has been sent or not
   * @param msg the message to be shown to the user
   */
  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      setFormData(initialFormData);
    }
    setTimeout(() => {
      setServerState((prev) => ({ ...prev, status: null }));
    }, 3000);
  };

  /**
   * Submitting message when user click send button.
   *
   * The user will add his formspree end point here.
   *
   * @param e form submit event
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Submitting Form
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/f/xgebyqqz", // user formspree endpoint
      data: formData,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        handleServerResponse(true, "Message Has Been Sent");
      })
      .catch(() => {
        handleServerResponse(false, "Error occurred while sending");
      });
  };

  return (
    <main className="page">
      <div id="content" className="site-content">
        <div className="header-content content-1170 center-relative block">
          <h1 className="entry-title">
            Vil du jobbe med meg? <br />
            Kontakt meg på{" "}
            <i>
              <span className="underline">e-post eller telefon</span>
            </i>
            .
          </h1>
        </div>

        <div className="page-content-wrapper center-relative content-1170">
          <div className="page-content">
            <div className="one_half">
              <p>
                Phasellus sit amet scelerisque sapien. Aliquam erat volutpat.
                Nam ut lectus at velit dapibus sollicitudin eu.
              </p>
              <br />
              <p>
                Because they are hard, because that goal will serve to organize
                and measure the best of our energies and skills, because that
                challenge is one that we are willing to accept, one we are
                unwilling to postpone and one.
              </p>
              <br />
              <p>
                <strong>Telefon: </strong>(+47) 93626297 <br />
                <strong>E-post: </strong>paolla@avtajeva.com <br />
              </p>
            </div>
            <div className="one_half last">
              {/* The Contact Form */}
              <form className="contact-form" onSubmit={handleSubmit}>
                <p>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Fullt navn"
                    required
                    value={formData["name"]}
                    onChange={handleDataChange}
                  />
                </p>
                <p>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="E-post"
                    pattern="(?=.*[a-zA-Z])[a-zA-Z0-9]+@[a-zA-Z]+\\.[a-zA-Z]{2,}"
                    required
                    value={formData["email"]}
                    onChange={handleDataChange}
                  />
                </p>
                <p>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="Emne"
                    value={formData["subject"]}
                    onChange={handleDataChange}
                  />
                </p>
                <p>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Melding"
                    required
                    value={formData["message"]}
                    onChange={handleDataChange}
                  ></textarea>
                </p>
                <p className="contact-submit-holder">
                  <input type="submit" value="SEND" />
                </p>
                {(serverState.submitting || serverState.status?.msg) && (
                  <p className="respond-message">
                    {serverState.submitting
                      ? "Sending message"
                      : serverState.status?.msg || ""}
                  </p>
                )}
              </form>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
