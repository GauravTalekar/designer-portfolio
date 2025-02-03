const ContactForm = () => {
  return (
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
        className="w-full py-3 inline-block transform cursor-pointer bg-shark-950 p-4 rounded text-cerise-600 hover:text-dull-lavender-600 hover:-translate-y-1 transition delay-150 duration-300 ease-in-out"
      >
        Send Message!
      </button>
    </form>
  );
};

export default ContactForm;