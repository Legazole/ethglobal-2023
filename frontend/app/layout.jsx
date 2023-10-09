import Header from './components/Header';
import Footer from './components/Footer';

import { Poppins } from 'next/font/google'

import './globals.css'

const poppins = Poppins({
  weight:['400','700'],
  subsets:['latin']
});

export const metadata = {
  title: 'MEV-Safe',
  description: '',
  keywords: 'web development, web design, javascript, angular, vue, html, css',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header></Header>
        <main className='container'>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  )
}
