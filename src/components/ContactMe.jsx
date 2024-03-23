import React from "react";
import styles from "../styles/contactMe.module.css";

function ContactMe() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>CONTACT</div>
      <div className={styles.info}>
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible.
      </div>
      <form className={styles.form}>
        <label htmlFor="name">Name</label>
        <input type="text" id={styles.name} placeholder="Enter Your Name" />
        <label htmlFor="email">Email</label>
        <input type="text" id={styles.email} placeholder="Enter your Email" />
        <label htmlFor="message">Message</label>
        <textarea
          type="text"
          id={styles.message}
          placeholder="Enter your message"
        ></textarea>
        <div className={styles.submit_box}>
          {" "}
          <div className={styles.submit}>SUBMIT</div>
        </div>
      </form>
    </div>
  );
}

export default ContactMe;
