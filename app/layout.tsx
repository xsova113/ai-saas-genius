import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import StoreProvider from "./provider/storeProvider";
import ModalProvider from "@/components/modal-provider";
import { CrispProvider } from "@/components/crisp-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genius",
  description: "AI Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: "gray" } }}>
      <StoreProvider>
        <html lang="en">
          <CrispProvider />
          <body className={inter.className}>
            <ModalProvider />
            {children}
            <Toaster />
          </body>
        </html>
      </StoreProvider>
    </ClerkProvider>
  );
}
