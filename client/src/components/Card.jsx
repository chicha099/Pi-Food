import react from 'react';
import { Link } from 'react-router-dom';
import { changePopup } from '../actions';
import { useDispatch } from 'react-redux';
import './Card.css';

export default function Card({ name, types, img, id }) {
    const dispatch = useDispatch();

    function handlePopup(bool, id) {
        dispatch(changePopup(bool, id))
    }

    return (
        <span onClick={() => handlePopup([true, id])}>
            <div className='cardDiv'>
                <div className='Card' >
                    <img src={img} alt="img not found" className='Img' />
                    <div className="">
                        <h5 className='demotext'>{name}</h5>
                        <h6 className='cardTypes'>{types}</h6>
                    </div>
                </div>
            </div>
        </span>
    )
};

