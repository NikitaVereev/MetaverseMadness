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
				<meta
					property='og:title'
					content='Это заголовок данного сайта Metaversus'
					key='title'
				/>
				<meta name='yandex-verification' content='b5a9ee4525d63e19' />
			</Head>
			<MainProvider {...pageProps}>
				<Component {...pageProps} />
			</MainProvider>
		</>
	)
}
