import type { Metadata } from "next";
import { Barlow_Condensed, Poppins } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
      variable: "--font-barlow",
      });

      const poppins = Poppins({
        subsets: ["latin"],
          weight: ["300", "400", "500", "600"],
            variable: "--font-poppins",
            });

            export const metadata: Metadata = {
              title: "Burdeos Restobar | La Universidad del Carrete",
                description: "Restobar en el coraz\u00f3n de Santiago. Alameda 2555, desde 2008.",
                };

                export default function RootLayout({
                  children,
                  }: {
                    children: React.ReactNode;
                    }) {
                      return (
                          <html lang="es" className={`${barlowCondensed.variable} ${poppins.variable}`}>
                                <body className="bg-black text-white">{children}</body>
                                    </html>
                                      );
                                      }
