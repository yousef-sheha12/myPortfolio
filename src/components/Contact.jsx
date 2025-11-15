import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <div className="flex justify-center items-center">
      <section className="flex flex-col gap-10 p-4 ">
        <h2 className="text-3xl mb-5 flex justify-center">Contact Me</h2>

        <div className="flex justify-between gap-5 my-10">
          <a target="_blank" href="https://www.facebook.com/yousef.sheha.75" >
          <FaFacebook className="text-5xl text-blue-700" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/yousef_sheha__?igsh=d2g4eW9tbGVkYzQ5"
          >
          <FaInstagram className="text-5xl text-[#E1306C]" />
          </a>
          <a target="_blank" href="tel:+201092632833" >
          <FaWhatsapp className="text-5xl text-green-500" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/yousef-sheha-1a9316375?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app"
          >
          <FaLinkedin className="text-5xl text-blue-600" />
          </a>
        </div>
      </section>
    </div>

    // <form>
    //   <input type="text" placeholder='Your Name' className="text-amber-50 border border-amber-50 p-3 w-60 h-20 " />
    //   <input type="email" placeholder='Your Email' className="text-amber-50 border border-amber-50 p-3 w-60 h-20 " />
    //   <textarea placeholder='Your Message' className="bg-blue-700 text-white p-10 mt-5"></textarea>
    //   <button type='submit' id='btn' className="bg-blue-900 text-white p-3 w-40  border-5 ml-10 mb-5 cursor-pointer"> Send</button>
    // </form>
  );
};

export default Contact;
