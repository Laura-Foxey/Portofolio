import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CSS/Contact.css';
import { motion } from "framer-motion";

function Contact({direction}) {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_9g6qvnf', 'template_g0bmjsn', e.target, 'AIxBFltfpVyq0iPIV')
          .then((result) => {
            toast.success('Succes! Thanks for your message.♥', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

    return (
        <motion.div className="contact template"
        initial= {{x: direction > 0 ? -100: 100}}
        animate={{x: 0, opacity: 1}}
        >
            <form id="contact-form" ref={form} onSubmit={sendEmail}>
                <label>
                <input type="text" name="Name" required={true} placeholder='Name'/>
                </label>

                <label>
                <select name="Subject" required={true} defaultValue={'DEFAULT'}>
                    <option disabled value="DEFAULT"> -- select an option -- </option>
                    <option value="Technical">Website issues or Suggestions</option>
                    <option value="Job">Job offers</option>
                    <option value="Suggestions">Promotions</option>
                    <option value="Questions">Inquiries or Questions</option>
                </select>
                </label>

                <label>
                    <input type="email" name="Email" required={true} placeholder='Email'/>
                </label>

                <label>
                    <textarea className="input-message" type="text" name="Message" required={true} placeholder='Message'/>
                </label>

                <input id="submit-btn" type="submit" value="Send message" />
            </form>
            <section className='contact-links'>
                <a href="https://www.linkedin.com/in/laura-gheorghe-107047244/" target="_blank" rel='noreferrer'>
                    <motion.img className="color-recolor" src="https://cdn-icons-png.flaticon.com/512/3536/3536569.png" whileHover={{ scale: 1.2 }}/>
                </a>
                <a href="https://github.com/Laura-Foxey" target="_blank" rel='noreferrer'>
                    <motion.img className="color-recolor" src='https://cdn-icons-png.flaticon.com/512/25/25231.png' whileHover={{ scale: 1.2 }}/>
                </a>
                <a href="mailto:laura.gheorghe@appliedtechnology.se" target="_blank" rel='noreferrer'>
                    <motion.img className="color-recolor" src='https://cdn-icons-png.flaticon.com/512/2669/2669570.png' whileHover={{ scale: 1.2 }}/>
                </a>
            </section>
            <ToastContainer/>
        </motion.div>
    );
  }
  
  export default Contact;
  