import React, { useState, useEffect } from 'react';
import { Alert } from 'shards-react';
import SearchResults from '../components/SearchResults';
import Layout from '../components/Layout';

const Home = () => {

    return(
        <Layout title={"Main"}>
                <SearchResults route={'/api/creators'}/>
        </Layout>
    )
}

export default Home;
