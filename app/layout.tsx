import { Header } from "@/components/feature/header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AyEstate",
  description:
    "Discover Your Dream Home Today. Find the perfect property that suits your lifestyle. Our real estate service offers unique selling propositions that set us apart from the competition. Find your perfect home today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
