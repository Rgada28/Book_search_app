import axios from 'axios';
import React, { useState } from 'react';

const Navbar = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [pagination, setPagination] = useState({
        sortDirection: '',
        totalPages: 0,
        pageSize: 0,
        currentPage: 0,
        totalElements: 0,
    });
    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };



    const handleSearch = (query) => {
        axios
            .get(`http://68.178.162.203:8080/application-test-v1.1/books?title=${query}`)
            .then((response) => {
                setSearchResults(response.data.data);
                setPagination(response.data.pagination);
            })
            .catch((error) => {
                console.error('Error fetching search results:', error);
            });
    };

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
                            <a className="nav-link active" href="#">Add Book</a>
                        </li>
                    </ul>
                </div>
            </ul>
            <div className="input-group me-2 mb-2 mt-2">
                <input className="form-control form-control-dark" type="text" placeholder="Enter book Title..." aria-label="Search" />
                <div className="input-group-append">
                    <button className=" ms-2 btn btn-success btn-outline-light" type="submit">Search<i className="fa fa-search"></i></button>
                </div>
            </div>
        </nav>



    );
};

export default Navbar;
