import { LazyMotion, domAnimation } from "motion/react"
import * as m from "motion/react-m"

const ContactForm = () => {
  // Animation variants for Motion
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial="hidden"
        animate="visible"
        variants={formVariants}>
        <form className="space-y-6" action="https://formsubmit.co/gaurav.talekar.designer@gmail.com" method="POST">
          {/* Name and Email Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="w-full h-12 px-4 bg-white text-gray-800 shadow-md hover:shadow-lg outline-none border-b-2 border-cerise-600 focus:border-dull-lavender-600 transition-all duration-300"
            />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full h-12 px-4 bg-white text-gray-800 shadow-md hover:shadow-lg outline-none border-b-2 border-cerise-600 focus:border-dull-lavender-600 transition-all duration-300"
            />
          </div>

          {/* Subject Field */}

          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            className="w-full h-12 px-4 bg-white text-gray-800 shadow-md hover:shadow-lg outline-none border-b-2 border-cerise-600 focus:border-dull-lavender-600 transition-all duration-300"
          />

          {/* Message Field */}
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Message"
            className="w-full px-4 py-2 bg-white text-gray-800 shadow-md hover:shadow-lg outline-none border-b-2 border-cerise-600 focus:border-dull-lavender-600 transition-all duration-300"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 cursor-pointer bg-shark-950 rounded font-montserrat text-xl text-cerise-600 hover:text-dull-lavender-600 transition duration-300 ease-in"
          >
            Send Message!
          </button>
        </form>
      </m.div>
    </LazyMotion>
  );
};

export default ContactForm;