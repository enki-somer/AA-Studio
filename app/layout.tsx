import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ErrorSuppressor from '@/components/ErrorSuppressor';

export const metadata: Metadata = {
  title: 'AA Studio',
  description: 'Senior full-stack and Systems engineer',
  metadataBase: new URL('https://aastudio.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <ErrorSuppressor />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
