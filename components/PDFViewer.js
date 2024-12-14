// pages/index.js
import Head from 'next/head'

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>Aviso de Privacidad</title>
                <meta name="description" content="Visor de PDF simple" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container min-h-screen">
                <div className="w-full h-screen bg-white rounded-lg shadow-lg">
                    <iframe
                        src="/aviso-de-privacidad.pdf#toolbar=1&navpanes=1&scrollbar=1&view=FitH&name=Aviso de Privacidad"
                        width="100%"
                        height="100%"
                        title="Aviso de Privacidad"
                        className="w-full h-screen border-none"
                    ></iframe>
                </div>
            </main>
        </div>
    );
}