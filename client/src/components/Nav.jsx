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
            <div className="dropdown">
                <img src="./img/drop.png" alt="" width="70px" />
                <div className="dropdown-content">
                    <div className="dropdownEach">
                        <Link to='/create' className="dropdownEach">
                            <h2> New Recipe</h2>
                        </Link>
                    </div>
                    <div className="dropdownEach">
                        <Link to='/about' className="dropdownEach">
                            <h2>About</h2>
                        </Link>
                    </div>
                </div>
            </div>
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