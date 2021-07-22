import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useQuery } from 'react-query';

export default function Layout({children, title = 'Game Dev Metrics'}) {

    const { isLoading, error, data } = useQuery('/api/creator-roles', () =>
        fetch('/api/creator-roles').then(res =>
            res.json()
        )
    )

    return (
        <div>

            <Head>
                <title>{title}</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>

            { data ? <Navigation dataResults={ data.data.results } /> : JSON.stringify(error) }

                {children}

            <footer>
                <Footer/>
            </footer>

        </div>
    );
}
