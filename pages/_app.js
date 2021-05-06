import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import '../styles/global.css';


const queryClient = new QueryClient()

function MyApp({Component, pageProps}){
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps}/>
            </QueryClientProvider>
        </>
    );
}

export default MyApp;
