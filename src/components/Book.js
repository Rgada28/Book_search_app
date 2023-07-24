import React, { useEffect } from 'react'
import '../styles/book.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux'
import { updateBook } from '../actions/BookActions';

const Book = ({ book }) => {

    const [bookData, setBookData] = useState(book);

    const dispatch = useDispatch();

    const handleOnSave = () => {
        if (bookData.title == null || bookData.title.trim() === "" ||
            bookData.author == null || bookData.author.trim() === "" ||
            bookData.pages == null || bookData.author.trim() === "" ||
            bookData.language == null || bookData.author.trim() === "" ||
            bookData.country == null || bookData.author.trim() === "" ||
            bookData.link == null || bookData.author.trim() === "" ||
            bookData.year == null || bookData.author.trim() === "") {
            Swal.fire({
                title: "Failed to save Book Details",
                text: "Please enter all details correctly",
                icon: "error",
            });
        }
        dispatch(updateBook(bookData));
    }

    const onTitleChange = (e) => {
        const newBook = { ...bookData, title: e.target.value };
        setBookData(newBook);
    }

    const onAuthorChange = (e) => {
        const newBook = { ...bookData, author: e.target.value };
        setBookData(newBook);
    }

    const onLanguageChange = (e) => {
        const newBook = { ...bookData, language: e.target.value };
        setBookData(newBook);
    }

    const onCountryChange = (e) => {
        const newBook = { ...bookData, country: e.target.value };
        setBookData(newBook);
    }

    const onPagesChange = (e) => {
        const newBook = { ...bookData, pages: e.target.value };
        setBookData(newBook);
    }

    const onYearChange = (e) => {
        const newBook = { ...bookData, year: e.target.value };
        setBookData(newBook);
    }

    const onLinkChange = (e) => {
        const newBook = { ...bookData, link: e.target.value };
        setBookData(newBook);
    }

    const handleOnClose = () => {
        setBookData(book);
    }

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
                <Button data-bs-toggle="modal" data-bs-target="#exampleModal" variant="primary">Edit</Button>

                <div class="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Edit Book</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-floating mb-3">
                                                <input type="text" value={bookData.title} onChange={(e) => onTitleChange(e)} class="form-control" id="floatingTextInput1" placeholder="Book Title" />
                                                <label for="floatingTextInput1">Book Title</label>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-floating mb-3">
                                                <input type="text" value={bookData.author} onChange={(e) => onAuthorChange(e)} class="form-control" id="floatingTextInput2" placeholder="Book Author" />
                                                <label for="floatingTextInput2">Book Author</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-floating mb-3">
                                                <input type="text" value={bookData.language} onChange={(e) => onLanguageChange(e)} class="form-control" id="floatingTextInput1" placeholder="Language" />
                                                <label for="floatingTextInput1">Language</label>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-floating mb-3">
                                                <input type="text" value={bookData.country} onChange={(e) => onCountryChange(e)} class="form-control" id="floatingTextInput2" placeholder="Country" />
                                                <label for="floatingTextInput2">Country</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-floating mb-3">
                                                <input type="number" value={bookData.pages} onChange={(e) => onPagesChange(e)} class="form-control" id="floatingTextInput1" placeholder="Book Pages" required />
                                                <label for="floatingTextInput1">Book Pages</label>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-floating mb-3">
                                                <input type="number" value={bookData.year} onChange={(e) => onYearChange(e)} class="form-control" id="floatingTextInput2" placeholder="Book Year" />
                                                <label for="floatingTextInput2">Book Year</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input type="email" value={bookData.link} onChange={(e) => onLinkChange(e)} class="form-control" id="floatingEmailInput" placeholder="example.com" />
                                        <label for="floatingEmailInput">Book Link</label>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" onClick={handleOnClose} data-bs-dismiss="modal">Close</button>
                                <button type="button" onClick={handleOnSave} data-bs-dismiss="modal" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card >
    )
}

export default Book
