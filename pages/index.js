import React, { useState, useEffect } from 'react';
import { Alert } from 'shards-react';
import SearchResults from '../components/SearchResults';
import { Button, ButtonGroup } from "shards-react";
import Layout from '../components/Layout';
import { useRouter } from 'next/router'

const Home = () => {

    const router = useRouter()

    const handleClick = (e, path) => {
        e.preventDefault()
        router.push(path)
    }

    return(
        <Layout title={"Main"}>

        </Layout>
    )
}

export default Home;






{ /*<ButtonGroup vertical>
                <Button theme="secondary" onClick={ (e) => handleClick(e, '/creators') }>Creators</Button>
            </ButtonGroup>*/ }
