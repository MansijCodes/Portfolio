import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// export const metadata = {
//   title: 'Mansij Ranjit | Computer Engineer',
//   description: 'Portfolio of Mansij Ranjit - Computer Engineer',
// };
export const metadata = {
  metadataBase: new URL("https://mansij.com.np"),

  title: {
    default: "Mansij Ranjit | Computer Engineer",
    template: "%s | Mansij Ranjit",
  },

  description:
    "Portfolio of Mansij Ranjit - Computer Engineer specializing in software engineering, web development, and scalable applications.",

  keywords: [
    "Mansij Ranjit",
    "Computer Engineer",
    "Software Engineer",
    "Web Developer",
    "Next.js",
    "React",
    "Portfolio",
  ],

  authors: [{ name: "Mansij Ranjit" }],

  openGraph: {
    title: "Mansij Ranjit | Computer Engineer",
    description:
      "Portfolio of Mansij Ranjit showcasing projects, experience, and technical skills.",
    url: "https://mansij.com.np",
    siteName: "Mansij Ranjit",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mansij Ranjit Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mansij Ranjit | Computer Engineer",
    description:
      "Portfolio of Mansij Ranjit showcasing projects, experience, and technical skills.",
    images: ["/og-image.jpg"],
  },

  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon.ico",
  //   apple: "/apple-touch-icon.png",
  // },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

