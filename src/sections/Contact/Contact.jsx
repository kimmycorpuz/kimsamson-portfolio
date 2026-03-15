import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactStyles.module.css";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_2jqgyyj",
        "template_47z4oet",
        form.current,
        "QEJo2Zk5zEJDqe2-i"
      )
      .then(() => {

        emailjs.send(
          "service_2jqgyyj",
          "template_1zm8j5y",
          {
            user_name: form.current.user_name.value,
            user_email: form.current.user_email.value,
          },
          "QEJo2Zk5zEJDqe2-i"
        );

        setSuccess(true);
        setError(false);
        form.current.reset();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setError(true);
        setSuccess(false);
      });
  };

  return (
    <section className={styles.contact}>
      <div className={styles.contactContainer}>
        <h1>CONTACT</h1>

        {success && (
          <p className={styles.successMessage}>
            Message sent successfully!
          </p>
        )}

        {error && (
          <p className={styles.errorMessage}>
            Failed to send message. Please try again.
          </p>
        )}

        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            required
            className={styles.input}
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
            className={styles.input}
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="6"
            required
            className={styles.textarea}
          />

          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;