import "./globals.css";


export const metadata = {
  title: "Basic Project Next.js",
  description: "Crud basico utilizando Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container mx-auto h-screen flex justify-center items-center mt-9 ">{children}</body>
    </html>
  );
}
