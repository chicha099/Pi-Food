import react from 'react';
import { Link } from 'react-router-dom';
import { GetRecipeById } from '../actions';
import { useDispatch } from 'react-redux';
import './Card.css';

export default function Card({ name, types, img, id }) {
    const dispatch = useDispatch();
    // let nameF = name[0].toUpperCase() + name.slice(1);

    function handleId(id) {
        dispatch(GetRecipeById(id))
    }

    return (
        <span onClick={() => handleId(id)}>
            <div className='cardDiv'>
                <div className='Card' >
                    <img src={img} alt="img not found" className='Img' />
                    <h5 className='demotext'>{name}</h5>
                    <h6 className='demotext'>{types}</h6>
                </div>
            </div>
        </span>
    )
};

