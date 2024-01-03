import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SlideUpTitle } from "../animations/SlideUpTitle";
import { CardAnimation } from "../animations/CardAnimation";
import { footerLinks } from "../static/data";
import Icons from "../assets/icons/icons.svg";

const Contact = ({ data }) => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [validation, setValidation] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (form.current) {
      const formName = form.current[0].value;
      const formEmail = form.current[1].value;
      const formPhone = form.current[2].value;
      const formMessage = form.current[3].value;
      if (
        formName === "" ||
        formEmail === "" ||
        formPhone === "" ||
        formMessage === ""
      ) {
        setTimeout(() => {
          setValidation(false);
        }, 2500);
        setValidation(true);
      } else {
        emailjs
          .sendForm(
            "service_65arh7p",
            "template_rfv7fo6",
            form.current,
            "5tJYl6v8U-66UYFny"
          )
          .then(
            () => {
              setTimeout(() => {
                setSuccess(false);
              }, 2500);
              setSuccess(true);
            },
            (error) => {
              console.log(error.text);
              setTimeout(() => {
                setShowError(true);
              }, 2500);
              setShowError(false);
            }
          );
        setValidation(false);
      }
    }
  };

  return (
    <div className="container mt-5">
      <SlideUpTitle delaySec={0.5} durationTime={0.5}>
        <h2 className="text-center">Conact Me</h2>
      </SlideUpTitle>
      <SlideUpTitle delaySec={0.5} durationTime={0.5}>
        <h2 className="text-center">If you wanna get a hold of me</h2>
      </SlideUpTitle>
      <div className="form-container">
        {success && (
          <div className="form-message success">
            Your response is succefully submitted!
          </div>
        )}
        {showError && (
          <div className="form-message error">
            {" "}
            Something went wrong try again!
          </div>
        )}
        {validation && (
          <div className="form-message error">
            {" "}
            Please fill all the required blanks.
          </div>
        )}
        <CardAnimation delaySec={0.3} durationTime={0.5}>
          <form ref={form} onSubmit={sendEmail} className="form">
            <input
              type="text"
              name="form_name"
              placeholder="My Name is"
              className="form-input"
            />
            <input
              type="email"
              name="form_email"
              placeholder="My Email"
              className="form-input"
            />
            <input
              type="tel"
              name="form_phone"
              placeholder="My contact"
              className="form-input"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Message"
              className="form-input"
            />
            <button type="submit" className="contact-btn">
              Submit
            </button>
          </form>
        </CardAnimation>
      </div>
      <SlideUpTitle delaySec={0}>
        <h4 className="text-center">You can also reach me through</h4>
        <div className="contact-details">
          <h5>
            Phone : <span> 9959157666</span>
          </h5>
        </div>
      </SlideUpTitle>
      <div className="footer-links-container social-media">
        <SlideUpTitle delaySec={0.3} durationTime={0.5}>
          {footerLinks.map((item) => {
            const { icon, link } = item;
            return (
              <a href={link} target="_blank" rel="noreferrer" key={icon}>
                {" "}
                <svg className="icon-logo">
                  <use xlinkHref={`${Icons}#icon-${icon}`} />
                </svg>
              </a>
            );
          })}
        </SlideUpTitle>
      </div>
    </div>
  );
};

export default Contact;
