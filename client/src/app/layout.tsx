import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next js Setup Template",
  description: "Starter template for Nextjs Project",
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
