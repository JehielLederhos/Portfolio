import "./globals.css";
import { LanguageProvider } from "@/context/languageContext";

export const metadata = {
  title: "Jehiel Lederhos | Portfolio",
  description: "Portfolio of Jehiel Lederhos, Frontend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          <LanguageProvider>
            {children}
          </LanguageProvider>
      </body>
    </html>
  );
}
