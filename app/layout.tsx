import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vigneshwar S Balakrishnan | Technical Architect",
  description:
    "Full Stack Technical Architect with 12+ years of experience. Principal Information Systems Engineer at Mr. Cooper, Dallas TX.",
  keywords: [
    "Technical Architect",
    "Full Stack Engineer",
    "React",
    "Node.js",
    "Microservices",
    "Azure",
    "Vigneshwar Balakrishnan",
  ],
  metadataBase: new URL("https://vigneshwar.tech"),
  openGraph: {
    title: "Vigneshwar S Balakrishnan | Technical Architect",
    description:
      "Full Stack Technical Architect with 12+ years of experience. Principal Information Systems Engineer at Mr. Cooper, Dallas TX.",
    url: "https://vigneshwar.tech",
    siteName: "Vigneshwar S Balakrishnan",
    images: [{ url: "/profile.jpg", width: 400, height: 500, alt: "Vigneshwar S Balakrishnan" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vigneshwar S Balakrishnan | Technical Architect",
    description:
      "Full Stack Technical Architect with 12+ years of experience. Principal Information Systems Engineer at Mr. Cooper, Dallas TX.",
    images: ["/profile.jpg"],
  },
  alternates: {
    canonical: "https://vigneshwar.tech",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
          <ThemeProvider>{children}</ThemeProvider>
        </body>
    </html>
  );
}
