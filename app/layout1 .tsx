import { CartProvider } from "@/context/CartContext";
import "./globals.css";

export const metadata = {
  title: "World Stickers Market",
  description: "Boutique française spécialisée dans les cartes Panini de la Coupe du Monde 2026."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>

<CartProvider>

{children}

</CartProvider>

</body>
    </html>
  );
}
