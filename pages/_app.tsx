import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import MainProvider from '../app/providers/MainProvider'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Metaversus</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<MainProvider {...pageProps}>
				<Component {...pageProps} />
			</MainProvider>
		</>
	)
}
