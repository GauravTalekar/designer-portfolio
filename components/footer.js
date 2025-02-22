import { data, socials } from "@/data/site-details"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="text-shark-950 font-nunito drop-shadow-[0_-2px_2px_rgba(0,0,0,0.05)]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 font-montserrat">
            <Link href="/" aria-label="Navigate to the home page" className="flex items-center">
              <img
                alt="GT"
                src={data.logoLink}
                className="h-10 me-3 rounded-md"
              />
              <span className="self-center text-2xl font-medium whitespace-nowrap">{data.title}</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-montserrat font-semibold text-gray-900 uppercase">Resources</h2>
              <ul className="text-shark-950 font-medium">
                <li className="mb-4">
                  <Link
                    className="hover:text-cerise-600 transition delay-150 duration-300 ease-in-out"
                    href="/work"
                  >
                    Work
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="hover:text-cerise-600 transition delay-150 duration-300 ease-in-out"
                    href="/resume"
                  >
                    Resume
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="hover:text-cerise-600 transition delay-150 duration-300 ease-in-out"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-montserrat font-semibold text-shark-950 uppercase">Follow Me</h2>
              <ul className="text-shark-950 font-medium">
                {
                  socials.map((social, idx) =>
                    <li className="mb-4" key={idx}>
                      <Link
                        className="hover:text-cerise-600 transition delay-150 duration-300 ease-in-out"
                        title={social.title}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.title}
                      </Link>
                    </li>
                  )
                }
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-shark-950 sm:text-center">© 2025 Gaurav Talekar. All rights reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {
              socials.map((social, idx) =>
                <Link
                  className="cursor-pointer bg-shark-950 p-3 m-1 rounded-lg font-bold text-white  hover:text-cerise-600 transition delay-150 duration-300 ease-in-out"
                  title={social.title}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={idx}
                >
                  {social.logo}
                </Link>
              )
            }
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer