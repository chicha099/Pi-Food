import react from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes, orderRecipesByName, orderRecipesByRating } from '../actions';
import { Link } from 'react-router-dom';
import Card from './Card';
import Nav from './Nav';
import Sidebar from './Sidebar';
import Pagination from './Pages';
import Details from './Details';
import './Home.css';

export default function Home() {
    const dispatch = useDispatch();
    const allRecipes = useSelector((state) => state.recipes);
    const allTypes = useSelector((state) => state.types);

    const currentPage = useSelector((state) => state.page);
    const recipesPerPage = 12;
    const lastRecipeIndex = currentPage * recipesPerPage;
    const firstRecipeIndex = lastRecipeIndex - recipesPerPage;
    const currentRecipes = Array.isArray(allRecipes) ? allRecipes.slice(firstRecipeIndex, lastRecipeIndex) : [allRecipes];

    useEffect(() => {
        dispatch(getRecipes());
    }, [dispatch]);

    function handleOrderByName(e) {
        dispatch(orderRecipesByName(e.target.value));
    }

    function handleOrderByRating(e) {
        dispatch(orderRecipesByRating(e.target.value));
    }

    return (
        <div>
            {currentRecipes.length > 0 || allTypes.length > 0 ? (
                <div>
                    <Nav />
                    <div id='main' className='MainDiv'>
                        <Sidebar />
                        <div>
                            <div className='selectHome' >
                                <select onChange={e => handleOrderByName(e)} className='Font'>
                                    <option value="" selected disabled hidden>Sort</option>
                                    <option className='optionsHome' value="alpha-Asc">A-Z</option>
                                    <option className='optionsHome' value="alpha-Desc">Z-A</option>
                                </select>
                                <select onChange={e => handleOrderByRating(e)} className='Font'>
                                    <option value="" selected disabled hidden>Sort rating</option>
                                    <option className='optionsHome' value="rating-Asc">RATING ASC</option>
                                    <option className='optionsHome' value="rating-Desc">RATING DESC</option>
                                </select>
                            </div>
                            <div id="recipes" className='Recipes'>
                                {
                                    currentRecipes && currentRecipes.map(p => {
                                        let typesCaps = p.types.map(p => {
                                            return (p[0].toUpperCase() + p.slice(1))
                                        })
                                        return (
                                            <div>
                                                <Card name={p.title} types={typesCaps} img={p.image} id={p.id} />
                                            </div>
                                        )
                                    }
                                    )
                                }
                            </div>
                        </div>
                        <Pagination
                            recipesPerPage={recipesPerPage}
                            allRecipes={allRecipes.length}
                        />
                    </div>
                </div>
            ) :
                <div className='loadingHome'>
                    <img className='loadingMew' src="https://media3.giphy.com/media/IQebREsGFRXmo/200.gif" alt="" />
                    <h2>Preparing the kitchen...</h2>
                </div>
            }
        </div>
    )
}