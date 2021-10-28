import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { GetRecipeById, changePopup, resetDetail } from "../actions";
import { useEffect } from "react";
import './Details.css';

export default function Details() {
    const dispatch = useDispatch();
    const recipeDetails = useSelector((state) => state.detail);
    const idDetail = useSelector((state) => state.id);

    useEffect(() => {
        dispatch(resetDetail());
    }, [])

    useEffect(() => {
        dispatch(GetRecipeById(idDetail));
    }, [dispatch]);

    function handleClickPopup(bool) {
        dispatch(changePopup(bool))
    }

    return (
        <div className='allDet'>
            <div className='darken'></div>
            {recipeDetails.length !== 0 ? (
                <div>
                    <div id='mainDetail' className='mainDetail'>
                        <div id='bigCard' className='bigCard'>
                            <button onClick={() => handleClickPopup(false)} className='closeBut'>X</button>
                            <h1 className='pokeNameDet'>{recipeDetails.title}</h1>
                            <div className='imgDetailDiv'>
                                <img className='imgDetail' src={recipeDetails.image} alt="" height='263px' />

                                <div className='detailedInfo'>
                                    <div className='pokeTypeDet'>
                                        {
                                            recipeDetails.types.map(t => {
                                                return (
                                                    <h3>{t[0].toUpperCase() + t.slice(1)}</h3>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='contChart'><h3 className='statHP'>{recipeDetails.summary.replace(/(<([^>]+)>)/ig, '')}</h3></div>

                                    <div className='contChart'>  <h3 className='statForce'> SpoonacularScore: {recipeDetails.spoonacularScore}</h3></div>


                                    <div className='contChart'>  <h3 className='statDefense'> HealthScore: {recipeDetails.healthScore}</h3></div>


                                    <div className='contChart'>  <h3 className='statSpeed'>{recipeDetails.steps} </h3></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <img src="https://media3.giphy.com/media/IQebREsGFRXmo/200.gif" alt="" />
                </div>
            )}
        </div>
    )
};

