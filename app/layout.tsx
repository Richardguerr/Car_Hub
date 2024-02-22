
import "./globals.css";
import { Footer,Navbar } from "@/components";

export const metadata = {
  title: "Car Hub",
  description: "Descubre los mejores carros en el mundo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
