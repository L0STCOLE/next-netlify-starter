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
          4 Sisters Private Care Givers /n<code></code>
          24 Houre Services 
          document.write("\n");
          Contact Estella for more information at (832)-531-2323
          document.write("\n");
          Offering pravite care in the Houston Area are prices range from $25 per hour to $30 per hour
          document.write("\n");
           Our Sister's specalize in giving care to your loved one's with the upmost attenction and care. 
          document.write("\n");
          Please contact us to book a time with one of our Sister's.
        </p>
      </main>

      <Footer />
    </div>
  )
}
