import type { Metadata } from "next";
import { Montserrat, Merriweather } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abhijit-kadalli.github.io/cv/"),
  title: "Abhijit Kadalli — Portfolio",
  description: "Portfolio of Abhijit Kadalli — Researcher in Data and Computational Neuroscience. EEG signal processing, multimodal synchronization, real-time systems, and ML projects.",
  openGraph: {
    title: "Abhijit Kadalli — Portfolio",
    description: "Researcher in Data and Computational Neuroscience. EEG, multimodal pipelines, real-time systems, and ML projects.",
    type: "website",
    url: "https://abhijit-kadalli.github.io/cv/",
    images: ["/cv/images/profilepic.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhijit Kadalli — Portfolio",
    description: "EEG, multimodal synchronization, real-time systems, ML.",
    images: ["/cv/images/profilepic.png"],
  },
  icons: {
    icon: "/cv/running.gif",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://abhijit-kadalli.github.io/cv/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abhijit Kadalli",
              email: "abhijitkadalli14@gmail.com",
              telephone: "+91 9049775722",
              jobTitle: "Researcher, Data and Computational Neuroscience",
              affiliation: {
                "@type": "Organization",
                name: "Dognosis Private Limited",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "National Institute of Technology Goa",
              },
              sameAs: [
                "https://www.linkedin.com/in/abhijitkadalli/",
                "https://github.com/Abhijit-Kadalli",
                "https://twitter.com/kadalli_",
              ],
              url: "https://abhijit-kadalli.github.io/cv/",
            }),
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${merriweather.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
