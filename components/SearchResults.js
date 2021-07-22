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
                <Row className={"results-row"}>
                        {
                            data.data.results.map( e => {
                            return (
                                <Col className={'results-col'} xs="12" sm="12" md="6" lg="4" xl="4" >
                                    { route === '/api/creators' ? <CreatorCard creator={e} key={e.id}/> : '' }
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
