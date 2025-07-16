import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Rupam-Portfolio',
  description: 'A Next.js animated portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Navbar />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
