import { addBook, searchBook } from "../actions/BookActions";
import { useDispatch } from 'react-redux'
import React, { useState } from 'react';
const Swal = require('sweetalert2')

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const dispatch = useDispatch();

    const handleAddBook = async () => {
        const steps = ['1', '2', '3', '4', '5', '6', '7']
        const swalQueueStep = Swal.mixin({
            confirmButtonText: 'Forward',
            cancelButtonText: 'Back',
            progressSteps: steps,
            input: 'text',
            inputAttributes: {
                required: true
            },
            reverseButtons: true,
            validationMessage: 'This field is required'
        })
        async function backAndForth() {
            const values = []
            let currentStep
            for (currentStep = 0; currentStep < steps.length;) {
                if (steps[currentStep] === '1') {
                    var result = await swalQueueStep.fire({
                        title: 'Enter Book Title',
                        inputValue: values[currentStep],
                        showCancelButton: currentStep > 0,
                        currentProgressStep: currentStep
                    })
                } else if (steps[currentStep] === '2') {
                    var result = await swalQueueStep.fire({
                        title: 'Enter Book Author',
                        inputValue: values[currentStep],
                        showCancelButton: currentStep > 0,
                        currentProgressStep: currentStep
                    })
                } else if (steps[currentStep] === '3') {
                    var result = await swalQueueStep.fire({
                        title: 'Enter Language',
                        inputValue: values[currentStep],
                        showCancelButton: currentStep > 0,
                        currentProgressStep: currentStep
                    })
                } else if (steps[currentStep] === '4') {
                    var result = await swalQueueStep.fire({
                        title: 'Enter Book Link',
                        inputValue: values[currentStep],
                        showCancelButton: currentStep > 0,
                        currentProgressStep: currentStep
                    })
                } else if (steps[currentStep] === '5') {
                    var result = await swalQueueStep.fire({
                        title: 'Enter number of pages',
                        input: 'number',
                        inputValue: values[currentStep],
                        showCancelButton: currentStep > 0,
                        currentProgressStep: currentStep
                    })
                } else if (steps[currentStep] === '6') {
                    var result = await swalQueueStep.fire({
                        title: 'Enter Country',
                        inputValue: values[currentStep],
                        showCancelButton: currentStep > 0,
                        currentProgressStep: currentStep
                    })
                } else if (steps[currentStep] === '7') {
                    var result = await swalQueueStep.fire({
                        title: 'Enter Book Year',
                        input: 'number',
                        inputValue: values[currentStep],
                        showCancelButton: currentStep > 0,
                        currentProgressStep: currentStep
                    })
                } else {
                    break
                }
                if (result.value) {
                    values[currentStep] = result.value
                    currentStep++
                } else if (result.dismiss === 'cancel') {
                    currentStep--
                } else {
                    break
                }

                if (currentStep === steps.length) {
                    Swal.showLoading();
                    dispatch(addBook({ title: values[0], author: values[1], language: values[2], link: values[3], pages: values[4], country: values[5], year: values[6], }));
                }
            }
        }

        backAndForth();
    }

    const handleSearch = () => {
        if (searchQuery !== null && searchQuery !== "") {
            dispatch(searchBook(searchQuery.trim()));
        }
    }

    return (
        <nav className="navbar navbar-dark sticky-top bg-dark flex-wrap2 flex-md-nowrap p-0">
            <a className="navbar-brand col-auto ms-1" href="/">My Book App</a>

            <button className="navbar-toggler d-md-none mt-1 mr-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <ul className="navbar-nav navbar-expand-md pl-2 pr-3">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto text-nowrap">
                        <li className="nav-item my-1 active">
                            <button className="btn btn-dark me-2" onClick={handleAddBook} >Add Book</button>
                        </li>
                    </ul>
                </div>
            </ul>

            <div className="input-group me-2 mb-2 mt-2">
                <input className="form-control form-control-dark" onChange={handleChange} value={searchQuery} type="text" placeholder="Enter book title..." aria-label="Search" />
                <div className="input-group-append">
                    <button className=" ms-2 btn btn-success btn-outline-light" onClick={handleSearch} type="submit">Search<i className="fa fa-search"></i></button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
