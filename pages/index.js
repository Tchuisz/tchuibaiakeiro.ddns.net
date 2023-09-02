import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>tchuibaiakeiro.ddns.net!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bem Vindo Baiakeiro!" />
        <p className="description">
      </main>

      <Footer />
    </div>
  )
}
