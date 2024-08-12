import "@/styles/globals.css";
import { Cabin } from "next/font/google";

const cabin = Cabin({
  subsets: ["latin"],
  variable: "--font-cabin",
  weight: ["400", "500", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${cabin.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
