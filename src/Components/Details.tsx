import React from 'react';

const Details = (props: {
    name: string,
    isbn: string,
    authors: string,
    numberOfPages: string,
    publisher: string,
    country: string,
    mediaType: string,
    released: string,
}) => {
    return (
        <div>
            <b>{props.name}</b> <br />
            <b>{props.isbn}</b> <br />
            <b>{props.authors}</b> <br />
            <b>{props.publisher}</b> <br />
            <b>{props.country}</b> <br />
            <b>{props.released}</b> <br />
            <b>{props.numberOfPages}</b> <br />
            <b>{props.mediaType}</b>
        </div>
    );
};

export default Details;