import React from 'react';
import Layout from '../components/Layout';
import SearchResults from '../components/SearchResults';

const Creators = () => {
    return (
        <Layout title={"Main"}>
            <SearchResults route={'/api/creators'}/>
        </Layout>
    )
}

export default Creators;

