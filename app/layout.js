import { Fredericka_the_Great, Montserrat, Nunito_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";

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
  title: "Gaurav Talekar",
  description: "Graphic Designer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${montserrat.variable} ${frederickaTheGreat.variable} antialiased m-0 p-0 min-h-screen text-base bg-bone-white-50 text-shark-950 font-normal`}
      >
        <header>
          <NavBar />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
