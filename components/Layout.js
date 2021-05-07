import Link from 'next/link';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Layout({ children, title = 'Game Dev Metrics' }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <Navigation/>
            {children}
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}
