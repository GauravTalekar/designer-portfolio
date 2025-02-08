const ContactForm = () => {
  return (
    <form
      className="space-y-6"
      action="https://formsubmit.co/gaurav.talekar.designer@gmail.com"
      method="POST"
      aria-labelledby="contact-form-title"
    >
      <h2 id="contact-form-title" className="sr-only">
        Contact Form
      </h2>

      {/* Name and Email Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
            className="w-full h-12 px-4 bg-white text-gray-800 shadow-md hover:shadow-lg outline-none border-b-2 border-cerise-600 focus:border-dull-lavender-600 transition-all duration-300"
          />
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            className="w-full h-12 px-4 bg-white text-gray-800 shadow-md hover:shadow-lg outline-none border-b-2 border-cerise-600 focus:border-dull-lavender-600 transition-all duration-300"
          />
        </div>
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="sr-only">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject"
          required
          className="w-full h-12 px-4 bg-white text-gray-800 shadow-md hover:shadow-lg outline-none border-b-2 border-cerise-600 focus:border-dull-lavender-600 transition-all duration-300"
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Message"
          required
          className="w-full px-4 py-2 bg-white text-gray-800 shadow-md hover:shadow-lg outline-none border-b-2 border-cerise-600 focus:border-dull-lavender-600 transition-all duration-300"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 bg-shark-950 text-cerise-600 rounded hover:text-dull-lavender-600 hover:-translate-y-1 transition duration-300 ease-in-out"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
