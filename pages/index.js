import React, { useState, useEffect } from 'react';
import { Alert } from 'shards-react';
import SearchResults from '../components/SearchResults';
import Layout from '../components/Layout';

const Home = () => {

    return(
        <Layout title={"Main"}>
                <h2>Welcome to your placeholder page!</h2>
                <Alert theme="primary">
                    Alert - Primary Theme (default) -{" "}
                    <a className="alert-link" href="#">
                        Example Link
                    </a>
                </Alert>

                <SearchResults route={'/api/creators'}/>
        </Layout>
    )
}

export default Home;
