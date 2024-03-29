import { Judson } from "next/font/google";
import "./globals.css";

const judson = Judson({ subsets: ["latin"], weight: ['400', '700'], });

export const metadata = {
  title: "Gohelboy",
  description: "Dwarkesh gohel aka gohelboy's Portfolio designed and developed by @gohelboy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={judson.className}>{children}</body>
    </html>
  );
}
