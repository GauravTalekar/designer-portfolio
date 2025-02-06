import ContactForm from "./contact-form"
import { socials } from '@/data/site-details';
import Link from 'next/link';
import SectionComponent from "../section-component";
import SectionHeader from "../section-header";

const ContactSection = () => {
  return (
    <SectionComponent id="contact-section" aria-label="Contact Section" bgColor={"bg-white"}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-8 md:py-12">
        <div>
          <SectionHeader
            clx="text-shark-800 font-montserrat font-bold fade-in transition-all ease-out duration-500"
            title="Lets work together"
          />

          <div className="mt-6 fade-in transition-all ease-out duration-500 delay-200">
            <p className="text-lg mt-4">
              Lets collaborate and create something amazing! Feel free to reach out to me via the form or drop a mail at <strong className="text-dull-lavender-600 font-semibold">gtalekar21@gmail.com</strong>.
            </p>
            <p className="text-lg mt-4">
              You can check and connect with me on my social handles.
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
        <div className="mt-10 lg:my-16 fade-in transition-all ease-out duration-500 delay-300">
          <ContactForm />
        </div>
      </div>
    </SectionComponent>
  )
}

export default ContactSection