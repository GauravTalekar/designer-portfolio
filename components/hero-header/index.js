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
          <p className="mt-8 text-pretty text-xl md:text-2xl font-montserrat font-semibold text-cerise-600 relative">
            <span className="relative">
              Illustrator & Graphic Designer
              <svg className="absolute left-[-20px] top-[-5px] h-[150%] w-[110%] -z-10" preserveAspectRatio="none" viewBox="0 0 187 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="draw-path" pathLength={1} d="M16.7641 25.3815C17.6382 25.6195 21.2219 26.3099 28.5642 27.1669C35.9064 28.0239 53.9123 28.4762 61.9975 28.5952C62.216 28.5952 63.8331 28.5952 68.5531 28.5952C73.2731 28.5952 89.3123 28.5952 96.742 28.5952C100.894 28.5952 109.984 28.5952 113.131 28.5952C117.064 28.5952 126.898 28.5952 134.764 27.881C142.631 27.1669 147.875 27.1669 162.298 24.6673C173.835 22.6677 181.527 19.5492 183.931 18.2399C184.805 17.6447 186.422 16.1688 185.898 15.0261C185.242 13.5978 184.586 12.5266 182.62 11.0982C180.653 9.66992 178.031 6.45619 160.331 3.95663C142.631 1.45706 121.653 1.45706 117.064 1.45706C112.475 1.45706 79.6975 0.742902 65.2753 1.09998C50.8531 1.45706 31.1864 4.31372 27.253 5.38496C23.3197 6.45621 13.4864 8.24161 4.30859 12.8837C-4.8692 17.5257 6.27525 21.4536 22.6642 24.3102C39.0531 27.1669 39.7085 26.4527 58.0641 27.8811C76.4197 29.3094 96.0865 29.6665 134.764 27.1669C173.442 24.6673 181.309 18.954 182.62 17.8828C183.931 16.8115 194.42 2.17124 135.42 2.17124C88.2197 2.17124 73.3604 3.83761 71.8308 4.6708" stroke="#A997E7" strokeWidth="2" />
              </svg>

            </span>
          </p>
          <div className='hero-social-wrapper flex justify-center text-cerise-600 text-2xl md:text-3xl mt-6'>
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