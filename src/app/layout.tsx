import type { Metadata } from 'next';
import './globals.css';
import { Spectral } from 'next/font/google'
import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';

const spectral = Spectral({ subsets:['latin'], weight: ['700'], variable: '--type-second-spectral'})

export const metadata: Metadata = {
  title: 'Dogs Next',
  description: 'Rede Social Para cachorro',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={spectral.variable}>
        <div className='App'>
          <Header />
            <main className='AppBody'>
             {children}
            </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
