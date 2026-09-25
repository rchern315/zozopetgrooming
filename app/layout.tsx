import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zozo's Pet Grooming",
  description: "Professional pet grooming with personality in Reno, Nevada.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
