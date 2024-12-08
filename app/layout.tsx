import "./globals.css";
import { Plus_Jakarta_Sans } from 'next/font/google';
import Header from "@/components/header";
import Footer from "@/components/footer";

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return (
    <html lang="en">
      <body className={`${jakarta.className} `}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}