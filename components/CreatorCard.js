import React from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter,
    Button
} from "shards-react";

const CreatorCard = ( {creator} ) => {

    function sanitizePosition( arr ) {
        let len = arr.length;
        if( !len ) return ['Job title not listed.'];
        if( len === 1 ) return [firstCapital( arr[0].name )];
        if( len >= 2 ) return arr.map( ( {name} ) => firstCapital( name ) );
    }

    function sanitizeGame( arr ){
        let len = arr.length;
        if( !len ) return ['No games listed.'];
        if( len === 1 ) return firstCapital( arr[0].name );
        if( len >= 2 ) return arr.map( ( {name} ) => firstCapital( name ) );
    }

    function firstCapital( word ){ return word.charAt( 0 ).toUpperCase() + word.slice( 1 ) }

    return (<>
            <Card className={'card-wrapper'}>
                <CardHeader className={'card-header'}>
                    <div className={'absolute-tag-wrapper'}>
                        { sanitizePosition( creator.positions )
                            .map( job => <Button squared> {job} </Button> ) }
                    </div>
                </CardHeader>
                <CardImg className={'card-image'} style={{ backgroundImage: `url(${creator.image})` }} />
                <CardBody className={'card-body'}>
                    <CardTitle className={'card-title'}>{creator.name}</CardTitle>
                    <h6>Notable Works:</h6>
                        { sanitizeGame( creator.games )
                           .map( game => <Button className={'game-title-btn'} squared theme="info"> {game} </Button> ) }
                </CardBody>
                <CardFooter className={'card-footer'}>
                    <Button className={'card-footer-btn'} outline>Learn More &rarr;</Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default CreatorCard;
