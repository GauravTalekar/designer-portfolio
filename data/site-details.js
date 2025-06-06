import { SlSocialBehance, SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";

export const data = {
  title: "Gaurav Talekar",
  domain: "gauravtalekar.com",
  is: "Designer",
  logoLink: "/android-chrome-512x512.png",
  resume: {
    english: "https://drive.google.com/file/d/1JLp2L20SpLqG79l5HM9wr3aTM1B47g99/view?usp=drive_link",
    german: "https://drive.google.com/file/d/1snqx4_NOtxdACtvEQ29PPBA2pbxCV-w_/view?usp=drive_link"
  }
}

export const socials = [
  {
    link: "https://www.behance.net/gtalekar21",
    title: "Behance",
    logo: <SlSocialBehance />
  },
  {
    link: "https://www.linkedin.com/in/gtalekar21/",
    title: "LinkedIn",
    logo: <SlSocialLinkedin />
  },
  {
    link: "https://www.instagram.com/gtalekar21/",
    title: "Instagram",
    logo: <SlSocialInstagram />
  },
]

export const about = [
  {
    text: "Gaurav Talekar is a Bremen, Germany-based designer who was born in Mumbai, India.",
    highlight: ["Bremen, Germany-based designer", "Mumbai, India"],
  },
  {
    text: "His work oscillates between substantial usage of colors and illustrations, creating a playful and optimistic style. It always starts with paper sketches and culminates in the digital space. His work is an exploration of different forms of shapes and emphasizes the connotations behind color.",
  },
  {
    text: "Gaurav draws inspiration from his own cultural thread, using abundant colors to tell stories. He's passionate about typography, design, animation, and print. When he's not designing, you might find him in a ceramic studio, shaping clay.",
    underline: ["typography, design, animation, and print"]
  },
]

export const projectTypeFilter = [
  "Print",
  "Website",
  "Editorial Design",
  "Illustration",
  "Graphic Design",
  "Branding and identity",
]