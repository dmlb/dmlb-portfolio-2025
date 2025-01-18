import sanityClient from "@/lib/sanity-utils/sanityClient";
import { AUTHOR_QUERY } from "@/lib/sanity-utils/sanityQueries";

import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import Footer from "@/components/Globals/Footer/Footer";
import Header from "@/components/Globals/Header/Header";
import { AUTHOR_QUERYResult } from "@/types/sanity";


// Font files can be colocated inside of `pages`
const openDyslexicFont = localFont({ src: "../../public/OpenDyslexic-Regular.otf" })
const author: AUTHOR_QUERYResult = await sanityClient.fetch(AUTHOR_QUERY);

export const metadata: Metadata = {
  title: {
    template: `%s | ${author?.name} | ${author?.title}`,
    default: 'Welcome',
  },
  description: `${author?.name} ${author?.pronouns} • ${author?.title} • ${author?.location}`,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  let settings;
  const fontClass = settings ? openDyslexicFont.className : '';

  return (
    <html lang="en">
      <body itemScope itemType="http://schema.org/Person" className={`${fontClass} antialiased`}
      >
        <div id="top_site">
          <a className="skip-to-content-link" href="#main"> Skip to content </a>
        </div>
        <Header author={author} />
        <main id="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
