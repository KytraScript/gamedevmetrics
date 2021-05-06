import React, { useState } from 'react';
import { Container, Row, Col } from "shards-react";
import { useQuery } from 'react-query';
import CreatorCard from './CreatorCard';

const SearchResults = ({route}) => {

    const { isLoading, error, data } = useQuery(route, () =>
        fetch(route).then(res =>
            res.json()
        )
    )

    if (isLoading) return 'Loading...';
    if (error) return 'An error has occurred: ' + error.message;

    return(
        <>
            <Container>
                <Row>
                        {
                            data.data.results.map( e => {
                            return (
                                <Col sm="12" md="4" lg="3">
                                    <CreatorCard creator={e} key={e.id}/>
                                </Col>
                            )
                        })
                        }
                </Row>
            </Container>
        </>
    )

};

export default SearchResults;
