import { Poppins, Rubik_Bubbles } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const rubik = Rubik_Bubbles({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Furrever",
  description: "SAFE and HAPPY well being for animal with FurrEver!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body className={`${poppins.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}

export { rubik };