import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import { Toaster } from "react-hot-toast";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Küme Wellness - Bienestar Integral con Flores de Bach",
  description: "Tratamientos faciales profesionales y terapias holísticas. Sesiones premium con Flores de Bach en Villa Luro y Cid Campeador, Buenos Aires.",
  keywords: "wellness, flores de bach, tratamientos faciales, dermapen, masajes, buenos aires",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CartDrawer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#688662',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  );
}
