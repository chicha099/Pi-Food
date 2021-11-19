import react from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filter50, getTypes, setPage } from '../actions';
import { filterRecipesByType } from '../actions';
import './Sidebar.css';

export default function Sidebar() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch]);

    function handleFilterTypes(e) {
        dispatch(setPage(1));
        dispatch(filterRecipesByType(e.target.name));
        console.log(e.target)
    }

    function handleFilter50(e) {
        dispatch(setPage(1));
        dispatch(filter50());
    }
    return (
        <div className='SidebarDiv'>
            <div className='Filter'>
                <div className='divForFilter'>
                    <img src="/img/vegetarian.png" alt="" className='iconFilter' onClick={e => handleFilterTypes(e)} name="vegetarian" />
                    <p className="hiddenFilter">Vegetarian</p>
                </div>
                <div className='divForFilter'>
                    <img src="/img/vegan.png" alt="" className='iconFilter' onClick={e => handleFilterTypes(e)} name="vegan" />
                    <p className="hiddenFilter">Vegan</p>
                </div>
                <div className='divForFilter2'>
                    <img src="/img/glutenfree.png" alt="" className='iconFilter' onClick={e => handleFilterTypes(e)} name="gluten free" />
                    <p className="hiddenFilter">Gluten Free</p>
                </div>
                <div className='divForFilter2'>
                    <img src="/img/dairy-free.png" alt="" className='iconFilter' onClick={e => handleFilterTypes(e)} name="dairy free" />
                    <p className="hiddenFilter">Dairy Free</p>
                </div>
                <div className='divForFilter'>
                    <img src="/img/ovo.png" alt="" className='iconFilter' onClick={e => handleFilterTypes(e)} name="lacto ovo vegetarian" />
                    <p className="hiddenFilter">Lacto Ovo Vegetarian</p>
                </div>
                <div className='divForFilter'>
                    <img src="/img/paleo.png" alt="" className='iconFilter' onClick={e => handleFilterTypes(e)} name="paleolithic" />
                    <p className="hiddenFilter">Paleolithic</p>
                </div>
                <div className='divForFilter'>
                    <img src="/img/primal.png" alt="" className='iconFilter' onClick={e => handleFilterTypes(e)} name="primal" />
                    <p className="hiddenFilter">Primal</p>
                </div>
                <div className='divForFilter'>
                    <img src="/img/fish.png" alt="" className='iconFilter' onClick={e => handleFilterTypes(e)} name="pescatarian" />
                    <p className="hiddenFilter">Pescatarian</p>
                </div>
                <div className='divForFilter'>
                    <img src="/img/fodmap.png" alt="" className='iconFilter' onClick={e => handleFilterTypes(e)} name="fodmap friendly" />
                    <p className="hiddenFilter">Fodmap Friendly</p>
                </div>
                <div className='divForFilter'>
                    <img src="/img/whole30.png" alt="" className='iconFilter' onClick={e => handleFilterTypes(e)} name="whole 30" />
                    <p className="hiddenFilter">Whole30</p>
                </div>
                <div className='divForFilter'>
                    <img src="/img/ketogenic.png" alt="" className='iconFilter' onClick={e => handleFilterTypes(e)} name="ketogenic" />
                    <p className="hiddenFilter">Ketogenic</p>
                </div>
                <div className='divForFilter'>
                    <img src="/img/all.png" alt="" className='iconFilter' onClick={e => handleFilterTypes(e)} name="all" />
                    <p className="hiddenFilter">All</p>
                </div>
            </div>
        </div>
    )
};