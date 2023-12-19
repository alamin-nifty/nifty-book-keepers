import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header/Header";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nifty Book Keeper",
  description:
    "Since 2018, Nifty Bookkeepers has empowered countless businesses to reach financial milestones. Our innovative solutions and trusted services build confidence in clients, aiding informed financial decisions. Collaborate with us to achieve your financial goals and elevate your business to new heights!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
