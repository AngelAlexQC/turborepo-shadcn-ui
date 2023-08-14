import "@ui/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import ThemeProvider from "../components/theme-provider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </html>
    </ClerkProvider>
  );
}
