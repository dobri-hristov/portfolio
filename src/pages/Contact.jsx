import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiSolidErrorCircle } from "react-icons/bi";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastClass, setToastClass] = useState("");
  const [toastShow, setToastShow] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    toastShow && setTimeout(() => setToastShow(false), 4000);
  }, [toastShow]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setToastMessage(
            <>
              <AiFillCheckCircle size={25} style={{ color: "green" }} />
              <span>Your message has been sent</span>
            </>
          );
          setToastClass("success");
          setToastShow(true);
          setName("");
          setEmail("");
          setMessage("");
        },
        () => {
          setToastMessage(
            <>
              <BiSolidErrorCircle size={25} style={{ color: "red" }} />
              <span>Something went wrong</span>
            </>
          );
          setToastShow(true);
          setToastClass("error");
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" className="bg-dark">
      <div className="row">
        <h4>Contact me</h4>
        <form id="contact-form" onSubmit={sendEmail} ref={formRef}>
          <div>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="contact-form-input"
              autoComplete="off"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="contact-form-input"
              autoComplete="off"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter message"
              className="contact-form-input textarea"
              required
            />
          </div>
          <button
            type="submit"
            value="Send"
            className={isSending ? "btn-disable" : ""}
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
      {toastShow && (
        <div id="toast" className={toastClass}>
          <span className="toast-container">{toastMessage}</span>
        </div>
      )}
    </section>
  );
};

export default Contact;
