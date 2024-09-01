import React, { useState } from "react";
import styles from "../styles/contactMe.module.css";

import { toast } from "react-toastify";

import contactMeEmail from "../api/email-service-api";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  //Updates the values of the inputs of Contact form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //sends the email
  const submitHandler = () => {
    const res = contactMeEmail(formData.name, formData.email, formData.message);
    if (res.response_code == 1) {
      toast.success("Email sent successfully");
    } else toast.error("Oops something went wrong");
  };
  return (
    <div id="contact" className={styles.container}>
      <div className={styles.heading}>CONTACT</div>
      <div className={styles.info}>
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible.
      </div>
      <form className={styles.form}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id={styles.name}
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Your Name"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id={styles.email}
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your Email"
        />
        <label htmlFor="message">Message</label>
        <textarea
          type="text"
          id={styles.message}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
        ></textarea>
        <div className={styles.submit_box}>
          {" "}
          <div onClick={submitHandler} className={styles.submit}>
            SUBMIT
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactMe;
