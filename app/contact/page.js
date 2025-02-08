import ContactForm from "@/components/contact/contact-form"
import FadeInObserver from "@/components/fade-in-observer"
import SectionComponent from "@/components/section-component"
import SectionHeader from "@/components/section-header"
import { data, socials } from "@/data/site-details"
import Link from "next/link"

export async function generateMetadata() {
  return {
    metadataBase: new URL(`https://${data.domain}`),
    title: "Contact Gaurav Talekar",
    description: "Want to learn more or discuss about our next plans lets connect.",
    openGraph: {
      title: "Contact Gaurav Talekar",
      description: "Want to learn more or discuss about our next plans lets connect.",
      url: `https://${data.domain}/about`,
      images: [
        {
          url: "/images/gaurav-talekar.jpg",
          width: 1080,
          height: 1080,
          alt: "Portrait of Gaurav Talekar"
        },
      ],
      type: "website",
    },
    twitter: {
      card: 'summary_large_image',
      title: "Contact Gaurav Talekar",
      description: "Want to learn more or discuss about our next plans lets connect.",
      images: ["/images/gaurav-talekar.jpg"],
    },
  }
}

const ContactPage = () => {
  return (
    <>
      <FadeInObserver />
      <SectionComponent id="contact-section" aria-label="Contact Gaurav Talekar" bgColor="bg-white">
        <SectionHeader headingLevel = "h1" title={"Lets work together"} clx={"text-shark-800 font-montserrat font-bold"} />
        <div className="grid grid-cols-1 gap-16">
          <div className="flex flex-col justify-start align-top">
            <div className="fade-in transition-all ease-out duration-500 delay-200">
              <p className="text-lg mt-4">
                Lets collaborate and create something amazing! Feel free to reach out to me via the form or drop a mail at {" "}
                <Link
                  href="mailto:gtalekar21@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dull-lavender-600 font-semibold underline"
                >
                  gtalekar21@gmail.com
                </Link>.
              </p>
              <p className="text-lg mt-4">
                You can check and connect with me on my social handles.
              </p>

              <div className="flex space-x-6 text-4xl md:text-4xl mt-6">
                {socials.map((social, idx) => (
                  <Link
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.title}
                    className="cursor-pointer bg-shark-950 p-3 rounded-lg text-cerise-600 hover:text-dull-lavender-600 hover:-translate-y-1 transition duration-300 ease-in-out"
                  >
                    <span aria-hidden="true">{social.logo}</span>
                  </Link>
                ))}
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