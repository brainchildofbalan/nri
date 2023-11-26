import Header from '@components/components/header/header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@components/components/footer/footer'
import RecoilContext from '@components/components/recoilContext'
import Head from 'next/head'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <script id='google-analytics' strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-57875M33');`}} />
      </head>
      <body className={inter.className}>
        <noscript strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-57875M33"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`}} />
        <RecoilContext>
          <Header />
          {children}
          <Footer />
        </RecoilContext>
      </body>
    </html>
  )
}
