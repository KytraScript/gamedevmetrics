import React from 'react';
import {Navbar, Nav} from 'shards-react';
import {Container, Row, Col} from 'shards-react';

const Footer = () => {
    return (
        <>
            <Navbar type="dark" theme="dark">
                <Container style={{color: 'white'}}>
                    <Row style={{ width: '100%' }}>
                        <Col className={'jc-around'}>Is this Centered information?</Col>
                    </Row>
                </Container>
            </Navbar>
        </>
    );
};

export default Footer;
