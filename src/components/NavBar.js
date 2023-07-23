import { searchBook } from "../actions/BookActions";
import { useDispatch } from 'react-redux'
import React, { useState } from 'react';


const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const dispatch = useDispatch();

    const handleSearch = () => {
        if (searchQuery !== null && searchQuery !== "") {
            dispatch(searchBook(searchQuery));
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
                            <a className="nav-link active" href="/addBook">Add Book</a>
                        </li>
                    </ul>
                </div>
            </ul>
            <div className="input-group me-2 mb-2 mt-2">
                <input className="form-control form-control-dark" onChange={handleChange} value={searchQuery} type="text" placeholder="Enter book Title..." aria-label="Search" />
                <div className="input-group-append">
                    <button className=" ms-2 btn btn-success btn-outline-light" onClick={handleSearch} type="submit">Search<i className="fa fa-search"></i></button>
                </div>
            </div>
        </nav>



    );
};

export default Navbar;
