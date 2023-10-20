
import React from 'react'
import { BsWhatsapp } from "react-icons/bs";

const ContactMe = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 place-items-center ">
      <div className=" ">
        <h5 className="text-2xl font-bold text-white m-2 ml-0 text-center sm:text-left">
          Let's Connect
        </h5>
        <p className=" text-[#adb7be] mb-4 max-w-md text-center sm:text-left ">
          I'm currently looking out for a front-end developer role. Reach out to
          me on WhatsApp to connect. Thank you
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-white font-bold mb-4 sm:mb-2 ">
          Click Here To Send a Direct Message
        </p>
        <a href="https://wa.me/+2348164277071" target='blank'>
          <BsWhatsapp className="h-[15vh] w-[15vh] sm:h-[5vh] sm:w-[5vh] text-white flex" />
        </a>
      </div>
    </section>
  );
}

export default ContactMe