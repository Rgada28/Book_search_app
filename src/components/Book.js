import React from 'react'
import '../styles/book.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const handleEditBook = (bookId) => {

};

const Book = ({ book }) => {

    return (
        <Card className='border-1 border-dark' style={{ width: '18rem' }}>
            <Card.Body className='d-flex justify-content-center'>
                <Card.Title ><a href={book.link} >{book.title}</a></Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Author: {book.author}</ListGroup.Item>
                <ListGroup.Item>Pages: {book.pages}</ListGroup.Item>
                <ListGroup.Item>Year: {book.year}</ListGroup.Item>
                <ListGroup.Item>Language: {book.language}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Button variant="primary">Edit</Button>
            </Card.Body>
        </Card>
    )
}

export default Book
