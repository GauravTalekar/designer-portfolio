import { Montserrat, Nunito_Sans } from "next/font/google";
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

export const metadata = {
  title: "Gaurav Talekar",
  description: "Graphic Designer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${montserrat.variable} antialiased m-0 p-0 min-h-screen text-base`}
      >
        <header>
          <NavBar />
        </header>
        <main className="mt-20 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
