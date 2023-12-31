import Chat from "@/components/chat";
import Headers from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import TanstackProvider from "@/providers/reactQuery";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Istiak Hassan Emon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Headers />
        <TanstackProvider>
          {children}
          <Chat />
        </TanstackProvider>
        <Toaster />
      </body>
    </html>
  );
}
