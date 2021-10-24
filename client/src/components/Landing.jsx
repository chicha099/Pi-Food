import react from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

export default function LandingPage() {
    return (
        <div className='Landing'>
            <div className='Container'>
                <div className='Title'>
                    <h1 className='landingTitle'>La Fourchette</h1>
                </div>
                <div className='ButtonDiv'>
                    <Link to='/home'>
                        <button className='Button' id='tryButton'>Enter</button>
                    </Link>
                </div>
            </div>
        </div >
    )
}