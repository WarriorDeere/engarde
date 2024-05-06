import type { Metadata } from "next";
import "./shared/style/globals.css";

export const metadata: Metadata = {
  title: "Project engarde",
  description: "Project engarde by WarriorDeere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
