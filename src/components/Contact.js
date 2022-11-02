import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion";
import { SERVICE_CODE, TEMPLATE_CODE, FORM_CODE} from './../secrets';
import './CSS/Contact.css'

function Contact({direction}) {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(SERVICE_CODE, TEMPLATE_CODE, e.target, FORM_CODE)
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
            <p>Make this the start of something incredible...</p>
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
            <section className='contact__links'>
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
  