import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>'4 Sisters Private Care Givers' </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Gods Helping Hands" />
        <p className="description">
          4 Sisters Private Care Givers <code></code>
          24 Houre Services
          Contact Estella for more information at (831)-531-2323
        </p>
      </main>

      <Footer />
    </div>
  )
}
