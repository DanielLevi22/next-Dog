import type { Metadata } from 'next';
import './globals.css';
import { Spectral } from 'next/font/google'
import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';
import { UserContextProvider } from '@/context/usercontext';
import getUser  from '@/actions/getuser';

const spectral = Spectral({ subsets:['latin'], weight: ['700'], variable: '--type-second-spectral'})

export const metadata: Metadata = {
  title: 'Dogs Next',
  description: 'Rede Social Para cachorro',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { data :user } = await getUser()
  return (
    <html lang="pt-BR">
      <body className={spectral.variable}>
        <UserContextProvider user={user}>
          <div className='App'>
            <Header />
              <main className='AppBody'>
              {children}
              </main>
            <Footer />
          </div>
        </UserContextProvider>
      </body>
    </html>
  );
}
