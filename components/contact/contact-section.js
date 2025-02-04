import ContactForm from "./contact-form"
import { socials } from '@/data/site-details';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <section id="contact-me" className="flex items-center justify-center mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8 text-shark-800 font-nunito">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-8 md:py-12">
        <div className="flex flex-col justify-start align-top">
          <hr className="border-shark-950 md:hidden" />
          <h2
            className="heading fade-in transition-all ease-out duration-500"
          >
            Lets work together
          </h2>
          <hr className="border-shark-950" />
          <div className="mt-6 fade-in transition-all ease-out duration-500 delay-200">
            <p className="text-lg mt-4">
              Let&apos;s collaborate and create something amazing! Feel free to reach out to me via the form or drop me a mail at <strong className="text-dull-lavender-600 font-semibold">gtalekar21@gmail.com</strong>.
            </p>
            <p className="text-lg mt-4">
              You can check and connect with me on my other social handles.
            </p>

            <div className="flex space-x-6 text-4xl md:text-4xl mt-6">
              {
                socials.map((social, idx) =>
                  <Link
                    title={social.title}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={idx}
                    text={social.logo}
                    className="cursor-pointer bg-shark-950 p-3 rounded-lg font-bold text-cerise-600 hover:text-dull-lavender-600 hover:-translate-y-1 hover:scale-110 transition delay-150 duration-300 ease-in-out"
                  >
                    {social.logo}
                  </Link>
                )
              }
            </div>
          </div>
        </div>
        <div className="fade-in transition-all ease-out duration-500 delay-300">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactSection