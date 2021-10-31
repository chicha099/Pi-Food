import react from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

export default function LandingPage() {
    return (
        <div className='Landing'>
            <div className='Container'>
                <div className='Title'>
                    <h1 className='landingTitle'> Tasty </h1>
                    <h1 className='landingTitle'> Meals </h1>
                    <h1 className='landingTitle'> Done </h1>
                    <h1 className='landingTitle'> Dirty </h1>
                    <h1 className='landingTitle'> Cheap </h1>
                </div>
                <div className='ButtonDiv'>
                    <Link to='/home'>
                        <button className='Button' id='tryButton'>Explore</button>
                    </Link>
                </div>
            </div>
        </div >
    )
}