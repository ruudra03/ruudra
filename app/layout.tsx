import type { Metadata } from "next";
import "./globals.css";

// Import components
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "ruudra",
  description: "a lean personal site of @ruudra",
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
        <Footer />
      </body>
    </html>
  );
}
