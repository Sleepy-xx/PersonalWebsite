import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://sleepy-xx.github.io"),
  title: {
    default: "TSANG KWOK HIN (HENRY)",
    template: "%s | TSANG KWOK HIN",
  },
  description:
    "Personal portfolio of Tsang Kwok Hin (Henry), a Computer Science undergraduate at HKUST focused on cloud computing, software engineering, AI, and web development.",
  keywords: [
    "TSANG KWOK HIN",
    "Henry Tsang",
    "HKUST",
    "Computer Science",
    "portfolio",
    "AWS",
    "AI",
    "software engineering",
  ],
  authors: [{ name: "TSANG KWOK HIN (HENRY)" }],
  creator: "TSANG KWOK HIN (HENRY)",
  openGraph: {
    title: "TSANG KWOK HIN (HENRY)",
    description:
      "Personal portfolio of Tsang Kwok Hin (Henry), a Computer Science undergraduate at HKUST focused on cloud computing, software engineering, AI, and web development.",
    type: "website",
    url: "/PersonalWebsite",
    images: [
      {
        url: "/PersonalWebsite/image0.jpg",
        width: 1200,
        height: 1200,
        alt: "TSANG KWOK HIN (HENRY)",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
