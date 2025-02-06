import ContactForm from "@/components/contact/contact-form"
import FadeInObserver from "@/components/fade-in-observer"
import SectionComponent from "@/components/section-component"
import SectionHeader from "@/components/section-header"
import { socials } from "@/data/site-details"
import Link from "next/link"

const ContactPage = () => {
  return (
    <>
      <FadeInObserver />
      <SectionComponent id="contact-section" aria-label="Contact Section" bgColor="bg-white">
        <SectionHeader title={"Lets work together"} clx={"text-shark-800 font-montserrat font-bold"} />
        <div className="grid grid-cols-1 gap-16">
          <div className="flex flex-col justify-start align-top">
            <div className="fade-in transition-all ease-out duration-500 delay-200">
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
          <div className="fade-in transition-all ease-out duration-500 delay-300">
            <ContactForm />
          </div>
        </div>
      </SectionComponent>
    </>
  )
}

export default ContactPage