import React from 'react';
import { Container, Row, Col } from "shards-react";
import { useQuery } from 'react-query';

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
                    <Col sm={{ size: 8, order: 2, offset: 2 }}>
                        {JSON.stringify(data)}
                    </Col>
                </Row>
            </Container>
        </>
    )

};

export default SearchResults;
