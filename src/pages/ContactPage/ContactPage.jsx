import { useState } from "react";
import styles from "./ContactPage.module.css";
import { motion } from "framer-motion";

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (formData.fullName.length < 3) newErrors.fullName = "Full Name must be at least 3 characters long.";
    if (formData.subject.length < 3) newErrors.subject = "Subject must be at least 3 characters long.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email address.";
    if (formData.body.length < 3) newErrors.body = "Message must be at least 3 characters long.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data Submitted:", formData);
      setFormData({ fullName: "", subject: "", email: "", body: "" });
    }
  };

  return (
    <motion.div className={styles.contactContainer} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h1 className={styles.contactTitle}>Contact Us</h1>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <motion.input 
          type="text" 
          name="fullName" 
          placeholder="Full Name" 
          value={formData.fullName} 
          onChange={handleChange} 
          className={styles.inputField} 
          whileFocus={{ scale: 1.02 }}
        />
        {errors.fullName && <p className={styles.errorText}>{errors.fullName}</p>}

        <motion.input 
          type="text" 
          name="subject" 
          placeholder="Subject" 
          value={formData.subject} 
          onChange={handleChange} 
          className={styles.inputField} 
          whileFocus={{ scale: 1.02 }}
        />
        {errors.subject && <p className={styles.errorText}>{errors.subject}</p>}

        <motion.input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          className={styles.inputField} 
          whileFocus={{ scale: 1.02 }}
        />
        {errors.email && <p className={styles.errorText}>{errors.email}</p>}

        <motion.textarea 
          name="body" 
          placeholder="Your message..." 
          value={formData.body} 
          onChange={handleChange} 
          className={styles.textArea} 
          whileFocus={{ scale: 1.02 }}
        />
        {errors.body && <p className={styles.errorText}>{errors.body}</p>}

        <motion.button 
          type="submit" 
          className={styles.submitButton} 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
}

export default ContactPage;