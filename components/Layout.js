import Link from 'next/link'
import Head from 'next/head'
import Navigation from '../components/Navigation'

export default function Layout({
   children,
   title = 'This is the default title',
}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>


            <Navigation />

            {children}

            <footer>{'I`m here to stay'}</footer>
        </div>
    )
}
