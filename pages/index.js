// pages/index.js
import Head from 'next/head'
import dynamic from 'next/dynamic'

// Importar el visor de PDF de forma dinámica para evitar problemas de SSR
const PDFViewer = dynamic(() => import('../components/PDFViewer'), {
  ssr: false
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Aviso de Privacidad</title>
        <meta name="description" content="Visor de PDF simple" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Aviso de Privacidad
        </h1>

        <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden p-4">
          <PDFViewer url="/aviso-de-privacidad.pdf" />
        </div>
      </main>
    </div>
  )
}