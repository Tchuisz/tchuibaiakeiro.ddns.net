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
          o servidor ainda não tem site mais vou ajudar vocês a entrar no server pelo tíbia 8.6 + ipchange ou apk Otcliente e bem simples fazer as conf abre seu tibia 8.6 Coloque na account 1 password 1 para criar sua senha. No Apk Android você deve por esse ip tchuibaiakeiro.ddns.net:7171 e seu apk estiver já com outros opção você deve achar na lista de server um nome chamado Another aki você coloca o ip tchuibaiakeiro.ddns.net:7171 na versão coloca 860 pra criar sua account Basta por na account 1 password 1 Criando sua account no game. depois entre no game com sua account e password que voce acabou de criar dentro do game. Pronto agora só logar e vir jogar com a galera por que Baiakeiro e por Baiakeiro!! <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
