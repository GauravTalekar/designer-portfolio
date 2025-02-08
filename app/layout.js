import { Fredericka_the_Great, Montserrat, Nunito_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const frederickaTheGreat = Fredericka_the_Great({
  variable: "--fredericka-the-great",
  subsets: ["latin"],
  weight: "400"
});

export const metadata = {
  title: 'Gaurav Talekar - Graphic Designer Portfolio',
  description: 'Explore the creative works and services of Gaurav Talekar, a professional graphic designer specializing in branding, illustration, and digital design.',
  keywords: ['Graphic Design', 'Branding', 'Illustration', 'Digital Design', 'Portfolio'],
  authors: [{ name: 'Gaurav Talekar', url: 'https://example.com' }],
  openGraph: {
    title: 'Gaurav Talekar - Graphic Designer Portfolio',
    description: 'Discover the portfolio of Gaurav Talekar, showcasing projects in branding, illustration, and digital design.',
    url: 'https://example.com',
    siteName: 'Gaurav Talekar Portfolio',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 3372,
        height: 2752,
        alt: 'Gaurav Talekar Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    // site: '@yourtwitterhandle',
    // creator: '@yourtwitterhandle',
    title: 'Gaurav Talekar - Graphic Designer Portfolio',
    description: 'Explore the creative works of Gaurav Talekar in branding, illustration, and digital design.',
    images: ['/twitter-image.jpg'],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${montserrat.variable} ${frederickaTheGreat.variable} antialiased m-0 p-0 min-h-screen text-base bg-bone-white-50 text-shark-950 font-normal`}
      >
        <header className="h-20">
          <NavBar />
        </header>
        <main className="bg-bone-white-50 relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
