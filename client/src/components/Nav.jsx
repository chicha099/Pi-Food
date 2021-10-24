import react from 'react';
import { searchName, setPage } from '../actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(setPage(1));
        dispatch(searchName(name))
    }

    return (
        <div className='NavDiv'>

            <Link to='/home' className='Logo'>
                <img src="./img/logonav.png" alt="" />
                <div className='TitleNav'>
                    <h2>HENRY</h2>
                </div>
            </Link>
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
            <img src="./img/loupe.png" alt="" className='ButtonNav'  onClick={(e) => handleSubmit(e)}/>
        </div>
    )
};