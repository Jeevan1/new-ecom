import Banner from "@/components/Banner";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "GEOMART | Online E-commerce Platform",
  description: " GEOMART | Online E-commerce Platform",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <NavBar />
        {/* <Banner /> */}
        {children}
      </body>
    </html>
  );
}
