import react from 'react';
import { getRecipes, searchName, setPage } from '../actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useHistory } from "react-router";
import './Nav.css';

export default function Nav() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const history = useHistory();

    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(setPage(1));
        dispatch(searchName(name))
    }

    function handleGoHome(e) {
        e.preventDefault();
        dispatch(getRecipes());
        history.push('/home');
    }

    return (
        <div className='NavDiv'>

            <a className='Logo' onClick={(e) => handleGoHome(e)}>
                <img src="./img/logonav.png" alt="" />
                <div className='TitleNav'>
                    <h2>D4C</h2>
                </div>
            </a>
            <Link to='/create' className='CreateNav'>
                <h2> Create </h2>
                <h2> Recipe </h2>
            </Link>
            <Link to='/about' className='AboutNav'>
                <h2>About</h2>
            </Link>
            <input
                type='text'
                className='Input'
                placeholder=' Search...'
                onChange={(e) => handleInputChange(e)}
            />
            <div className='ButtonNavDiv'>
                <img src="./img/loupe.png" alt="" className='ButtonNav' onClick={(e) => handleSubmit(e)} />
            </div>
        </div>
    )
};