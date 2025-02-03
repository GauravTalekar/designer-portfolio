import { data, socials } from "@/data/site-details"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-white text-shark-950 font-nunito drop-shadow-[0_-2px_2px_rgba(0,0,0,0.05)]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 font-montserrat">
            <Link href="/" aria-label="Navigate to the home page" className="flex items-center">
              <img
                alt="GT"
                src={data.logoLink}
                className="h-10 me-3"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">{data.title}</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-montserrat font-semibold text-gray-900 uppercase">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
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
              <h2 className="mb-6 text-sm font-montserrat font-semibold text-gray-900 uppercase">Follow Me</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
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
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 What's mine is mine, what's yours is yours.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {
              socials.map((social, idx) =>
                <Link
                  className="cursor-pointer bg-shark-950 p-3 m-3 rounded-lg font-bold text-white  hover:text-cerise-600 transition delay-150 duration-300 ease-in-out"
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