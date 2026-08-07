import type { Metadata } from "next";
import { Chakra_Petch, Titillium_Web } from "next/font/google";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const titilliumWeb = Titillium_Web({
  variable: "--font-titillium",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const title = "Continuum Hyper — spec-sheet EV reporting, every Thursday";
const description =
  "Range figures, charge curves, and battery data for EV buyers who read past the press release. Measured, not marketed. Every Thursday.";

export const metadata: Metadata = {
  metadataBase: new URL("https://continuumhyper.info"),
  title,
  description,
  openGraph: {
    title: "Continuum Hyper",
    description,
    type: "website",
    siteName: "Continuum Hyper",
    url: "https://continuumhyper.info",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Continuum Hyper",
    description,
  },
};

const NO_FLASH_THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('drive-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${chakraPetch.variable} ${titilliumWeb.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: NO_FLASH_THEME_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
