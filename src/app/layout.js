
import "../styles/global.scss";
import { lexend, nunito, mooLahLah, barriecito } from "@/helpers/font";


export const metadata = {
  title: {
    template: `%s | SARI`,
    default: "SARI",
  },
  description: "coffe of yellow",

  /* icons: {
    icon: "/minato.png",
    shortcut: "/shortcut-icon.png",
    apple: "/minologo.jpg",
    other: {
      rel: "minoto",
      url: "/minologo.jpg",
    },
  }, */

  description: "coffee of yellow",
  icons: {
    icon: "/minato/icon1.png",
    shortcut: "/minato/icon1.png",
    apple: "/minato/icon1.png",
  },

  openGraph: {
    title: "Next.js",
    description: "The React Framework for the Web",
    url: "https://nextjs.org",
    siteName: "Next.js",
    images: [
      {
        url: "https://nextjs.org/og.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    videos: [
      {
        url: "https://nextjs.org/video.mp4", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    audio: [
      {
        url: "https://nextjs.org/audio.mp3", // Must be an absolute URL
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${lexend.variable} ${nunito.variable} ${mooLahLah.variable} ${barriecito.variable}`}
    >
      <body className="minato">{children}</body>
    </html>
  );
}
