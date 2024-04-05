import { Judson } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const judson = Judson({ subsets: ["latin"], weight: ['400', '700'], });

export const metadata = {
  title: "Gohelboy",
  description: "Dwarkesh Gohel aka gohelboy's Portfolio designed and developed by @gohelboy",
  keywords: "gohelboy, Dwarkesh Gohel, portfolio, web designing, full stack MERN developer, game developer, graphic designing, freelancer, web developer",
  imagePath: "/preview.PNG" // Assuming the image is located in the public folder
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}${metadata.imagePath}`} />
        <meta property="og:url" content="https://gohelboy.vercel.app" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}${metadata.imagePath}`} />
      </Head>
      <html lang="en">
        <body className={judson.className}>{children}</body>
      </html>
    </>
  );
}
