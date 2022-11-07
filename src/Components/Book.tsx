import React, { useState } from 'react';
import BookEntity from "../Entities/BookEntity";
import Popup from './Popup';
import Details from "./Details";

const Book = (props: BookEntity) => {
    const { url, name, isbn, authors, numberOfPages, publisher, country, mediaType, released, characters, povCharacters } = props;
    const [show, setShow] = useState(false);

    return (
        <>
            <Popup
                characters={characters}
                povCharacters={povCharacters}
                show={show}
                onHide={() => setShow(false)}
            />
            <div className='book col' style={{
                margin: '1em'
            }}>
                <div className='book-Image' style={{
                    border: 'solid .5em',
                    borderImageSlice: 1,
                    borderImageSource: 'linear-gradient(256.5deg, rgb(216, 38, 68) -6.61%, rgb(110, 53, 126) 112.39%)',
                    width: '220px',
                    height: '390px'
                }}
                    onClick={() => setShow(true)}
                >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Closed_Book_Icon.svg/1200px-Closed_Book_Icon.svg.png" width={'100px'} height={'100px'}></img>
                    <div className='book-Info' style={{
                        display: 'inline-block',
                        marginTop: '.5em',
                        width: '200px',
                        backgroundColor: '#e9ecef',
                        textAlign: 'center'
                    }}>
                        <Details
                            name={"name: " + props.name}
                            isbn={"isbn: " + props.isbn}
                            authors={"authors: " + props.authors}
                            numberOfPages={"page: " + props.numberOfPages}
                            publisher={"publisher: " + props.publisher}
                            country={"country: " + props.country}
                            mediaType={"mediaType: " + props.mediaType}
                            released={"released: " + props.released} />
                    </div>
                </div>
            </div></>
    );
};

export default Book;