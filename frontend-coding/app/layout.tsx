import type { Metadata } from "next";
import "./globals.css";
import { AuthenticationProvider } from "@/contexts/authContext";

export const metadata: Metadata = {
  title: "Frontend Coding",
  description: "Frontend Coding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AuthenticationProvider>{children}</AuthenticationProvider>
      </body>
    </html>
  );
}
