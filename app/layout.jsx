import Navbar from "@/components/Navbar";
import { Roboto } from "next/font/google";
// metadatos de la pagina, solo con crear el obj metadata
export const metadata = {
  title: "Mi pagina con NextJS",
  description: "Pagina con ejercicios basicos de nextjs",
};

//*importar fuentes desde google fonts
export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
