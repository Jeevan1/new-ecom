import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/lib";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "GEOMART | Online E-commerce Platform",
  description: " GEOMART | Online E-commerce Platform",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={""}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
