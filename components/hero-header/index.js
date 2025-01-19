import clsx from "clsx";
import "./style.css"
import { Fredericka_the_Great } from "next/font/google"
import { SlSocialBehance, SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl"
import Link from "next/link";

const frederickaTheGreat = Fredericka_the_Great({
  variable: "--fredericka-the-great",
  subsets: ["latin"],
  weight: "400"
});


const HeroHeader = () => {
  return (
    <header className="h-screen mt-10 flex items-center justify-center relative isolate overflow-hidden bg-bone-white-50 magicpattern">
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
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
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="text-center mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className={clsx("text-5xl md:text-6xl font-semibold tracking-tight text-shark-950 pd-4 md:pb-6", frederickaTheGreat.className)}>Hi I am</p>
          <h2 className={clsx("text-7xl md:text-8xl font-semibold tracking-tight text-shark-950", frederickaTheGreat.className)}>
            Gaurav Talekar
          </h2>
          <p className="mt-8 text-pretty text-xl md:text-2xl font-montserrat font-semibold text-cerise-600">
            Illustrator & Graphic Designer
          </p>
          <div className='hero-social-wrapper flex justify-center text-cerise-600 text-2xl md:text-3xl'>
            <Link
              className='cursor-pointer bg-shark-950 p-3 m-3 rounded-lg font-bold'
              title='LinkedIn Profile'
              href='https://www.linkedin.com/in/yugabdh-pashte/'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              <SlSocialBehance />
            </Link>
            <Link
              className='cursor-pointer bg-shark-950 p-3 m-3 rounded-lg font-bold'
              title='Twitter Profile'
              href='https://twitter.com/yugabdh'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              <SlSocialInstagram />
            </Link>
            <Link
              className='cursor-pointer bg-shark-950 p-3 m-3 rounded-lg font-bold'
              title='Github Profile'
              href='https://github.com/Yugabdh'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              <SlSocialLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeroHeader