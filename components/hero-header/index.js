import "./style.css"
import { data, socials } from "@/data/site-details"
import { LazyMotion, domAnimation } from "motion/react"
import * as m from "motion/react-m"
import LinkButton from "../link-button"

const HeroHeader = () => {
  return (
    <LazyMotion features={domAnimation}>
      <header className="h-screen mt-10 flex items-center justify-center relative overflow-hidden magicpattern">
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-z-10 sm:-top-10 sm:right-1/2 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div className="text-center mx-auto max-w-7xl px-6 lg:px-8">
          <m.div
            className="mx-auto max-w-2xl lg:mx-0"
            initial={{ opacity:0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p
              className="text-5xl md:text-6xl font-fredericka font-normal tracking-tight text-shark-950 pd-4 md:pb-6"
            >
              Hi I am
            </p>
            <h2 className="text-7xl md:text-8xl font-fredericka font-normal tracking-tight text-shark-950">
              {data.title}
            </h2>
            <strong className="block mt-8 text-pretty text-xl md:text-2xl font-montserrat font-semibold text-cerise-600">
              {data.is}
            </strong>
            <div className="hero-social-wrapper flex justify-center text-4xl md:text-4xl mt-6">
              {
                socials.map((social, idx) =>
                  <LinkButton
                    title={social.title}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={idx}
                    text={social.logo}
                    clx={"cursor-pointer bg-shark-950 p-3 m-3 rounded-lg font-bold text-cerise-600 hover:text-dull-lavender-600"}
                  >
                  </LinkButton>
                )
              }
            </div>
          </m.div>
        </div>
      </header>
    </LazyMotion>
  )
}

export default HeroHeader